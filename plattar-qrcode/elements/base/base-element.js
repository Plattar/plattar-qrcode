const QRCodeStyling = require("qr-code-styling");
const hash = require("object-hash");

class BaseElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        if (this.hasAttribute("url")) {
            this.renderQRCode();
        }

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes") {
                    if (this.hasAttribute("url")) {
                        this.renderQRCode();
                    }
                }
            });
        });

        observer.observe(this, {
            attributes: true
        });
    }

    download(options) {
        const opt = options || {
            name: "plattar-qrcode",
            extension: "png"
        };

        if (this._qrCode) {
            this._qrCode.download(opt);
        }
    }

    renderQRCode() {
        const url = this.hasAttribute("url") ? this.getAttribute("url") : undefined;

        if (!url) {
            console.warn("PlattarQR.renderQRCode() - required attribute \"url\" is missing or invalid, QR Code will not render");
            return;
        }

        const width = this.hasAttribute("width") ? this.getAttribute("width") : "100%";
        const height = this.hasAttribute("height") ? this.getAttribute("height") : "100%";
        const margin = this.hasAttribute("margin") ? this.getAttribute("margin") : 0;
        const image = this.hasAttribute("image") ? this.getAttribute("image") : undefined;
        const color = this.hasAttribute("color") ? this.getAttribute("color") : "#000000";
        const style = this.hasAttribute("qr-type") ? this.getAttribute("qr-type") : "default";

        // used to check if anything has changed in the options
        // to avoid re-rendering
        this._optionsHash = '0';
        this._options = this._options || {
            imageOptions: {
                hideBackgroundDots: true,
                imageSize: 0.4,
                margin: 0
            },
            dotsOptions: {
                type: "rounded"
            },
            backgroundOptions: {
                color: "#ffffff"
            },
            dotsOptionsHelper: {
                colorType: {
                    single: true,
                    gradient: false
                },
                gradient: {
                    linear: true,
                    radial: false,
                    color1: "#6a1a4c",
                    color2: "#6a1a4c",
                    rotation: "0"
                }
            },
            cornersSquareOptions: {
                type: "extra-rounded"
            },
            cornersSquareOptionsHelper: {
                colorType: {
                    single: true,
                    gradient: false
                },
                gradient: {
                    linear: true,
                    radial: false,
                    color1: "#000000",
                    color2: "#000000",
                    rotation: "0"
                }
            },
            cornersDotOptions: {
                type: "dot"
            },
            cornersDotOptionsHelper: {
                colorType: {
                    single: true,
                    gradient: false
                },
                gradient: {
                    linear: true,
                    radial: false,
                    color1: "#000000",
                    color2: "#000000",
                    rotation: "0"
                }
            },
            backgroundOptionsHelper: {
                colorType: {
                    single: true,
                    gradient: false
                },
                gradient: {
                    linear: true,
                    radial: false,
                    color1: "#ffffff",
                    color2: "#ffffff",
                    rotation: "0"
                }
            },
            width: 1024,
            height: 1024,
            type: "canvas"
        };

        this._options.margin = margin;
        this._options.image = image;

        // set the colors
        this._options.dotsOptions.color = color;
        this._options.cornersDotOptions.color = color;
        this._options.cornersSquareOptions.color = color;

        switch (style) {
            case "dots":
                this._options.dotsOptions.type = "dots";
                break;
            case "default":
            default:
                this._options.dotsOptions.type = "rounded";
        }

        const shortenURL = this.hasAttribute("shorten") ? this.getAttribute("shorten") : "false";

        if (shortenURL && shortenURL.toLowerCase() === "true") {
            this._ShortenURL(url).then((newURL) => {
                this._GenerateQRCode(newURL, width, height);
            }).catch((_err) => {
                console.warn(_err);
                // ignore error and just generate normal QR Code
                this._GenerateQRCode(url, width, height);
            });
        }
        else {
            this._GenerateQRCode(url, width, height);
        }
    }

    _UpdateCanvas(width, height) {
        if (!this._qrCode) {
            return;
        }

        const canvas = this._qrCode._canvas;

        if (canvas) {
            if (canvas.style.width !== "100%") {
                canvas.style.width = "100%";
            }

            if (canvas.style.height !== "100%") {
                canvas.style.height = "100%";
            }
        }

        if (this._divContainer) {
            const div = this._divContainer;

            if (div.style.width !== width) {
                div.style.width = width;
            }

            if (div.style.height !== height) {
                div.style.height = height;
            }
        }
    }

    _GenerateQRCode(url, width, height) {
        this._options.data = url;

        const shadow = this.shadowRoot || this.attachShadow({ mode: 'open' });

        const qrCode = this._qrCode;

        if (!qrCode) {
            const div = document.createElement("div");
            div.style.display = "none";
            shadow.appendChild(div);

            this._divContainer = div;
            this._qrCode = new QRCodeStyling(this._options);
            this._qrCode.append(div);

            this._UpdateCanvas(width, height);

            div.style.display = "block";

            return;
        }

        const newHash = hash({
            options: this._options,
            width: width,
            height: height
        });

        if (this._optionsHash !== newHash) {
            this._optionsHash = newHash;

            this._qrCode.update(this._options);

            this._UpdateCanvas(width, height);
        }
    }

    _IsFetchAPISupported() {
        return "fetch" in window;
    }

    _ShortenURL(url) {
        return new Promise((accept, reject) => {
            if (!this._IsFetchAPISupported()) {
                return reject(new Error("PlattarQR._ShortenURL() - fetch api not supported, cannot proceed"));
            }

            try {
                const b64Link = btoa(url);

                fetch("https://c.plattar.com/shorten", {
                    cache: "no-store",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        data: {
                            attributes: {
                                url: b64Link,
                                isBase64: true
                            }
                        }
                    })
                }).then((response) => {
                    if (!response.ok) {
                        throw new Error("PlattarQR._ShortenURL() - response was invalid");
                    }

                    return response.json();
                }).then((json) => {
                    return accept(json.data.attributes.url);
                }).catch(() => {
                    return reject(new Error("PlattarQR._ShortenURL() - there was an unexpected issue generating short url"));
                });
            }
            catch (err) {
                return reject(err);
            }
        });
    }
}

module.exports = BaseElement;
const QRCodeStyling = require("qr-code-styling");

class BaseElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        if (this.hasAttribute("url")) {
            this.renderQRCode();
        }
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
            throw new Error("BaseElement.renderQRCode() - required attribute \"url\" is missing or invalid");
        }

        const width = this.hasAttribute("width") ? this.getAttribute("width") : 512;
        const height = this.hasAttribute("height") ? this.getAttribute("height") : 512;
        const margin = this.hasAttribute("margin") ? this.getAttribute("margin") : 0;
        const image = this.hasAttribute("image") ? this.getAttribute("image") : undefined;
        const color = this.hasAttribute("color") ? this.getAttribute("color") : "#000000";

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
            }
        };

        this._options.width = width;
        this._options.height = height;
        this._options.data = url;
        this._options.margin = margin;
        this._options.image = image;

        // set the colors
        this._options.dotsOptions.color = color;
        this._options.cornersDotOptions.color = color;
        this._options.cornersSquareOptions.color = color;

        const shadow = this.shadowRoot || this.attachShadow({ mode: 'open' });

        const qrCode = this._qrCode;

        if (!qrCode) {
            this._qrCode = new QRCodeStyling(this._options);

            this._qrCode.append(shadow);

            return;
        }

        this._qrCode.update(this._options);
    }
}

module.exports = BaseElement;
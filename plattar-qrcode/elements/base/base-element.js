const QRCodeStyling = require("qr-code-styling");

class BaseElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const url = this.hasAttribute("url") ? this.getAttribute("url") : undefined;

        if (!url) {
            throw new Error("BaseElement - required attribute \"url\" is missing");
        }

        const width = this.hasAttribute("width") ? this.getAttribute("width") : 512;
        const height = this.hasAttribute("height") ? this.getAttribute("height") : 512;
        const margin = this.hasAttribute("margin") ? this.getAttribute("margin") : 0;

        let image = this.hasAttribute("image") ? this.getAttribute("image") : undefined;

        if (image === "default") {
            image = "data:image/png;base64,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";
        }

        const shadow = this.shadowRoot || this.attachShadow({ mode: 'open' });

        const qrCode = new QRCodeStyling(
            {
                "width": width,
                "height": height,
                "data": url,
                "margin": margin,
                "imageOptions": {
                    "hideBackgroundDots": true,
                    "imageSize": 0.4,
                    "margin": 0
                },
                "dotsOptions": {
                    "type": "rounded",
                    "color": "#2162f0"
                },
                "backgroundOptions": {
                    "color": "#ffffff"
                },
                "image": image,
                "dotsOptionsHelper": {
                    "colorType": {
                        "single": true,
                        "gradient": false
                    },
                    "gradient": {
                        "linear": true,
                        "radial": false,
                        "color1": "#6a1a4c",
                        "color2": "#6a1a4c",
                        "rotation": "0"
                    }
                },
                "cornersSquareOptions": {
                    "type": "extra-rounded",
                    "color": "#2162f0"
                },
                "cornersSquareOptionsHelper": {
                    "colorType": {
                        "single": true,
                        "gradient": false
                    },
                    "gradient": {
                        "linear": true,
                        "radial": false,
                        "color1": "#000000",
                        "color2": "#000000",
                        "rotation": "0"
                    }
                },
                "cornersDotOptions": {
                    "type": "dot",
                    "color": "#2162f0"
                },
                "cornersDotOptionsHelper": {
                    "colorType": {
                        "single": true,
                        "gradient": false
                    },
                    "gradient": {
                        "linear": true,
                        "radial": false,
                        "color1": "#000000",
                        "color2": "#000000",
                        "rotation": "0"
                    }
                },
                "backgroundOptionsHelper": {
                    "colorType": {
                        "single": true,
                        "gradient": false
                    },
                    "gradient": {
                        "linear": true,
                        "radial": false,
                        "color1": "#ffffff",
                        "color2": "#ffffff",
                        "rotation": "0"
                    }
                }
            }
        );

        qrCode.append(shadow);
    }
}

module.exports = BaseElement;
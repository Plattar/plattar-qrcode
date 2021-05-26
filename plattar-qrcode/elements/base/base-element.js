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
        const image = this.hasAttribute("image") ? this.getAttribute("image") : undefined;

        const shadow = this.shadowRoot || this.attachShadow({ mode: 'open' });

        const qrCode = new QRCodeStyling(
            {
                "width": width,
                "height": height,
                "data": url,
                "margin": 20,
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
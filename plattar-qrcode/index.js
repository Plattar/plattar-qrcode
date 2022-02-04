"use strict";
const QRCodeElement = require("./elements/qrcode-element.js");
const Version = require("./version");

if (customElements) {
    if (customElements.get("plattar-qrcode") === undefined) {
        customElements.define("plattar-qrcode", QRCodeElement);
    }
}

console.log("using @plattar/plattar-qrcode v" + Version);

module.exports = {
    version: Version
};
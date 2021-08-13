"use strict";
const QRCodeElement = require("./elements/qrcode-element.js");
const Version = require("./version");

console.log("using @plattar/plattar-qrcode v" + Version);

customElements.define("plattar-qrcode", QRCodeElement);

module.exports = {
    version: Version
};
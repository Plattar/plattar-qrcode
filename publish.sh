#!/bin/bash
rm -rf plattar-qrcode/README.md plattar-qrcode/graphics plattar-qrcode/node_modules plattar-qrcode/build plattar-qrcode/package-lock.json
cp README.md plattar-qrcode/README.md
cp -R graphics plattar-qrcode/
cd plattar-qrcode && npm run build && npm publish --scope=public && cd ../
rm -rf plattar-qrcode/README.md plattar-qrcode/graphics plattar-qrcode/node_modules plattar-qrcode/build plattar-qrcode/package-lock.json
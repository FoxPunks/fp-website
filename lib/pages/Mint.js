"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
class Mint extends skynode_1.DomNode {
    constructor() {
        super("section.mint");
        let foxes;
        this.append((0, skynode_1.el)("h2", "Mint a Fox"), foxes = (0, skynode_1.el)(".foxes"), (0, skynode_1.el)("a", "Connect Wallet"), (0, skynode_1.el)(".wallet-address", "0x1234..."), (0, skynode_1.el)("a", "Mint"), (0, skynode_1.el)(".progress-bar", (0, skynode_1.el)(".bar")), (0, skynode_1.el)(".progress-text", (0, skynode_1.el)("h3", "mint progress"), (0, skynode_1.el)("p", "10000/10000")));
        skyutil_1.default.repeat(40, (i) => {
            (0, skynode_1.el)("img", { src: `https://storage.googleapis.com/fp-pfp/${i}.png` }).appendTo(foxes);
        });
    }
}
exports.default = Mint;
//# sourceMappingURL=Mint.js.map
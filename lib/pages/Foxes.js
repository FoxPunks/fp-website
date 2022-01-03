"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
class Foxes extends skynode_1.DomNode {
    constructor() {
        super("section.mint");
        let foxes;
        this.append((0, skynode_1.el)("h2", "Foxes"), foxes = (0, skynode_1.el)(".foxes"));
        skyutil_1.default.repeat(32, (i) => {
            (0, skynode_1.el)("img", { src: `https://storage.googleapis.com/fp-pfp/${i}.png` }).appendTo(foxes);
        });
    }
}
exports.default = Foxes;
//# sourceMappingURL=Foxes.js.map
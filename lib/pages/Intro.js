"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Intro extends skynode_1.DomNode {
    constructor() {
        super("section.intro");
        this.append((0, skynode_1.el)("h2", "What are FoxPunks?"), (0, skynode_1.el)("header", (0, skynode_1.el)("img", { src: "/images/0.png", height: "200" }), (0, skynode_1.el)("p", "Cool Cats are a collection of programmatically, randomly generated NFTs on the Ethereum blockchain. The 1st generation consists of 10,000 randomly assembled cats from over 300k total options. Cool Cats that have a variety of outfits, faces and colors - all cats are cool, but completed outfit cats are the coolest. Each Cool Cat is comprised of a unique body, hat, face and outfit - the possibilities are endless!")));
    }
}
exports.default = Intro;
//# sourceMappingURL=Intro.js.map
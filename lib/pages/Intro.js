"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Intro extends skynode_1.DomNode {
    constructor() {
        super("section.intro");
        this.append((0, skynode_1.el)("h2", "What are FoxPunks?"), (0, skynode_1.el)("header", (0, skynode_1.el)("img", { src: "/images/0.png", height: "200" }), (0, skynode_1.el)("p", "FoxPunks is a Profile Picture (PFP) project based on Binance Smart Chain. It has 10,000 cute random generative foxes. Each FoxPunk is comprised of a unique body, hat, face and outfit - the possibilities are endless! Our goal is to establish a foxverse by making cute foxes widely known to people. Many foxes are waiting for their owners. Everyone! Please be the owner of the fox.")));
    }
}
exports.default = Intro;
//# sourceMappingURL=Intro.js.map
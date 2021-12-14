"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Roadmap extends skynode_1.DomNode {
    constructor() {
        super("section.roadmap");
        this.append((0, skynode_1.el)("h2", "Roadmap"), (0, skynode_1.el)("section", (0, skynode_1.el)("h3", "2021 4Q"), (0, skynode_1.el)("ul", (0, skynode_1.el)("li", "FoxPunks Launching"), (0, skynode_1.el)("li", "Listing on Pancake NFT"))), (0, skynode_1.el)("section", (0, skynode_1.el)("h3", "2022 1Q"), (0, skynode_1.el)("ul", (0, skynode_1.el)("li", "Tokenomics and PancakeSwap Pool Provision"), (0, skynode_1.el)("li", "PFP Character Item Parts System Launching"), (0, skynode_1.el)("li", "Clan System Launching"))), (0, skynode_1.el)("section", (0, skynode_1.el)("h3", "2022 2Q"), (0, skynode_1.el)("ul", (0, skynode_1.el)("li", "Foxverse (a.k.a FoxPunks Metaverse) Launching"))));
    }
}
exports.default = Roadmap;
//# sourceMappingURL=Roadmap.js.map
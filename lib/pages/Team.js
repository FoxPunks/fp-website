"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Team extends skynode_1.DomNode {
    constructor() {
        super("section.team");
        this.append((0, skynode_1.el)("h2", "The Team"), (0, skynode_1.el)(".members", (0, skynode_1.el)("section", (0, skynode_1.el)("h3", "0xDesertFox"), (0, skynode_1.el)("img", { src: "https://storage.googleapis.com/fp-pfp/3.png" }), (0, skynode_1.el)("p", "Project Manager of FoxPunks. I love cute beings, and cuteness will dominate the world!")), (0, skynode_1.el)("section", (0, skynode_1.el)("h3", "Wavo"), (0, skynode_1.el)("img", { src: "https://storage.googleapis.com/fp-pfp/5.png" }), (0, skynode_1.el)("p", "Designer of FoxPunks. I tried to capture the cuteness of a Desert Fox.")), (0, skynode_1.el)("section", (0, skynode_1.el)("h3", "0xMax"), (0, skynode_1.el)("img", { src: "https://storage.googleapis.com/fp-pfp/2.png" }), (0, skynode_1.el)("p", "Global Communication and Community Manager. Get in a ride on a cute journey!")), (0, skynode_1.el)("section", (0, skynode_1.el)("h3", "Cion"), (0, skynode_1.el)("img", { src: "https://storage.googleapis.com/fp-pfp/4.png" }), (0, skynode_1.el)("p", "Support in various aspects, including community Building for the success of FoxPunks."))));
    }
}
exports.default = Team;
//# sourceMappingURL=Team.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Team extends skynode_1.DomNode {
    constructor() {
        super("section.team");
        this.append((0, skynode_1.el)("h2", "The Team"), (0, skynode_1.el)("section", (0, skynode_1.el)("h3", "0xDesertFox"), (0, skynode_1.el)("p", "팍스펑크를 기획 및 개발했습니다. 귀여운 것을 사랑하며 귀여움이 세상을 지배할 것이라 생각합니다.")), (0, skynode_1.el)("section", (0, skynode_1.el)("h3", "Wavo"), (0, skynode_1.el)("p", "팍스펑크를 디자인 했으며 사막여우의 귀여움을 그림에 녹여냈습니다.")), (0, skynode_1.el)("section", (0, skynode_1.el)("h3", "Cion"), (0, skynode_1.el)("p", "팍스펑크의 순항을 위해 커뮤니티 빌딩을 비롯한 다양한 부분에서 도움을 주고 있습니다.")));
    }
}
exports.default = Team;
//# sourceMappingURL=Team.js.map
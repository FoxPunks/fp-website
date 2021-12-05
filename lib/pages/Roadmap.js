"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Roadmap extends skynode_1.DomNode {
    constructor() {
        super("section.roadmap");
        this.append((0, skynode_1.el)("h2", "Roadmap"), (0, skynode_1.el)("section", (0, skynode_1.el)("h3", "2021 4Q"), (0, skynode_1.el)("ul", (0, skynode_1.el)("li", "FoxPunks 론칭"), (0, skynode_1.el)("li", "팬케익스왑 NFT에서 거래 시작"))), (0, skynode_1.el)("section", (0, skynode_1.el)("h3", "2022 1Q"), (0, skynode_1.el)("ul", (0, skynode_1.el)("li", "코인 적용, 팬케익 스왑 풀 생성"), (0, skynode_1.el)("li", "파트 변경 기능 론칭"), (0, skynode_1.el)("li", "클랜 시스템 론칭"))), (0, skynode_1.el)("section", (0, skynode_1.el)("h3", "2022 2Q"), (0, skynode_1.el)("ul", (0, skynode_1.el)("li", "메타버스 Foxverse 론칭"))));
    }
}
exports.default = Roadmap;
//# sourceMappingURL=Roadmap.js.map
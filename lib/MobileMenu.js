"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class MobileMenu extends skynode_1.ClosableFloatingDomNode {
    constructor(position, mint, roadmap, team, gallary) {
        super(position, ".mobile-menu");
        this.append((0, skynode_1.el)("a.pc-menu", "Mint a Fox", {
            click: () => scrollTo(0, mint.rect.top),
        }), (0, skynode_1.el)("a.pc-menu", "Roadmap", {
            click: () => scrollTo(0, roadmap.rect.top),
        }), (0, skynode_1.el)("a.pc-menu", "Team", {
            click: () => scrollTo(0, team.rect.top),
        }), (0, skynode_1.el)("a.pc-menu", "Gallary", {
            click: () => scrollTo(0, gallary.rect.top),
        }));
        this.onDom("click", () => this.delete());
    }
}
exports.default = MobileMenu;
//# sourceMappingURL=MobileMenu.js.map
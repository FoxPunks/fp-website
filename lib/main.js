"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Gallary_1 = __importDefault(require("./pages/Gallary"));
const Intro_1 = __importDefault(require("./pages/Intro"));
const Mint_1 = __importDefault(require("./pages/Mint"));
const Roadmap_1 = __importDefault(require("./pages/Roadmap"));
const Team_1 = __importDefault(require("./pages/Team"));
(async () => {
    let mint;
    let roadmap;
    let team;
    let gallary;
    skynode_1.BodyNode.append((0, skynode_1.el)("header", (0, skynode_1.el)("a.logo", (0, skynode_1.el)("img", { src: "/images/0.png", height: "60" }), (0, skynode_1.el)("h1", "FoxPunks")), (0, skynode_1.el)("a", "Mint a Fox", {
        click: () => scrollTo(0, mint.rect.top),
    }), (0, skynode_1.el)("a", "Roadmap", {
        click: () => scrollTo(0, roadmap.rect.top),
    }), (0, skynode_1.el)("a", "Team", {
        click: () => scrollTo(0, team.rect.top),
    }), (0, skynode_1.el)("a", "Gallary", {
        click: () => scrollTo(0, gallary.rect.top),
    })), new Intro_1.default(), mint = new Mint_1.default(), roadmap = new Roadmap_1.default(), team = new Team_1.default(), gallary = new Gallary_1.default(), (0, skynode_1.el)("footer", "© 2021 FoxPunks LLC"));
})();
//# sourceMappingURL=main.js.map
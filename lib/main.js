"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const MobileMenu_1 = __importDefault(require("./MobileMenu"));
const Gallary_1 = __importDefault(require("./pages/Gallary"));
const Intro_1 = __importDefault(require("./pages/Intro"));
const Mint_1 = __importDefault(require("./pages/Mint"));
const Team_1 = __importDefault(require("./pages/Team"));
(async () => {
    let mint;
    let roadmap;
    let team;
    let gallary;
    skynode_1.BodyNode.append((0, skynode_1.el)("header", (0, skynode_1.el)("a.logo", (0, skynode_1.el)("img", { src: "/images/0.png", height: "60" }), (0, skynode_1.el)("h1", "FoxPunks"), { click: () => scrollTo(0, 0) }), (0, skynode_1.el)("a.pc-menu", "Mint a Fox", {
        click: () => scrollTo(0, mint.rect.top),
    }), (0, skynode_1.el)("a.pc-menu", "Roadmap", {
        click: () => scrollTo(0, roadmap.rect.top),
    }), (0, skynode_1.el)("a.pc-menu", "Team", {
        click: () => scrollTo(0, team.rect.top),
    }), (0, skynode_1.el)("a.pc-menu", "Gallary", {
        click: () => scrollTo(0, gallary.rect.top),
    }), (0, skynode_1.el)("a.mobile-menu-button", (0, skynode_1.el)("i.fas.fa-bars"), {
        click: (event, button) => {
            const rect = button.rect;
            new MobileMenu_1.default({ left: rect.right - 170, top: rect.bottom }, mint, roadmap, team, gallary).appendTo(skynode_1.BodyNode);
        },
    })), new Intro_1.default(), mint = new Mint_1.default(), team = new Team_1.default(), gallary = new Gallary_1.default(), (0, skynode_1.el)("section.discord", (0, skynode_1.el)("h2", "Join Us!"), (0, skynode_1.el)("p", "Let's hang out on Discord."), (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "/images/join-discord.png", width: "200" }), { href: "https://discord.gg/YGmPxyyCnb", target: "_blank" }), (0, skynode_1.el)("p", "Click to join the FoxPunks Discord Lounge")), (0, skynode_1.el)("section.contract", (0, skynode_1.el)("h2", "Smart Contract"), (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "/images/logo-bscscan.svg", width: "200" }), { href: "https://bscscan.com/token/0x5D4541Ea6460c39B5d600Fe06d2865637867b122", target: "_blank" })), (0, skynode_1.el)("footer", "© 2021 FoxPunks LLC"));
})();
//# sourceMappingURL=main.js.map
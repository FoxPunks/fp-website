import { BodyNode, DomNode, el } from "@hanul/skynode";
import MobileMenu from "./MobileMenu";
import Gallary from "./pages/Gallary";
import Intro from "./pages/Intro";
import Mint from "./pages/Mint";
import Roadmap from "./pages/Roadmap";
import Team from "./pages/Team";

(async () => {

    let mint: DomNode;
    let roadmap: DomNode;
    let team: DomNode;
    let gallary: DomNode;

    BodyNode.append(
        el("header",
            el("a.logo",
                el("img", { src: "/images/0.png", height: "60" }),
                el("h1", "FoxPunks"),
                { click: () => scrollTo(0, 0) },
            ),
            el("a.pc-menu", "Mint a Fox", {
                click: () => scrollTo(0, mint.rect.top),
            }),
            el("a.pc-menu", "Roadmap", {
                click: () => scrollTo(0, roadmap.rect.top),
            }),
            el("a.pc-menu", "Team", {
                click: () => scrollTo(0, team.rect.top),
            }),
            el("a.pc-menu", "Gallary", {
                click: () => scrollTo(0, gallary.rect.top),
            }),
            el("a.mobile-menu-button", el("i.fas.fa-bars"), {
                click: (event, button) => {
                    const rect = button.rect;
                    new MobileMenu({ left: rect.right - 170, top: rect.bottom }, mint, roadmap, team, gallary).appendTo(BodyNode);
                },
            }),
        ),
        new Intro(),
        mint = new Mint(),
        roadmap = new Roadmap(),
        team = new Team(),
        gallary = new Gallary(),
        el("section.discord",
            el("h2", "Join Us!"),
            el("p", "Let's hang out on Discord."),
            el("a",
                el("img", { src: "/images/join-discord.png", width: "200" }),
                { href: "https://discord.gg/YGmPxyyCnb", target: "_blank" },
            ),
            el("p", "Click to join the FoxPunks Discord Lounge"),
        ),
        el("footer",
            "© 2021 FoxPunks LLC",
        ),
    );
})();
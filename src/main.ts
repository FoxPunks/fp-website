import { BodyNode, DomNode, el } from "@hanul/skynode";
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
            el("a.mobile-menu", el("i.fas.fa-bars"), {
            }),
        ),
        new Intro(),
        mint = new Mint(),
        roadmap = new Roadmap(),
        team = new Team(),
        gallary = new Gallary(),
        el("footer",
            "© 2021 FoxPunks LLC"
        ),
    );
})();
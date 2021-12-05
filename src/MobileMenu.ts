import { ClosableFloatingDomNode, DomNode, el, Position } from "@hanul/skynode";

export default class MobileMenu extends ClosableFloatingDomNode {

    constructor(
        position: Position,
        mint: DomNode,
        roadmap: DomNode,
        team: DomNode,
        gallary: DomNode,
    ) {
        super(position, ".mobile-menu");
        this.append(
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
        );
        this.onDom("click", () => this.delete());
    }
}

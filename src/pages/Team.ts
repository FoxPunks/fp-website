import { DomNode, el } from "@hanul/skynode";

export default class Team extends DomNode {

    constructor() {
        super("section.team");
        this.append(
            el("h2", "The Team"),
            el(".members",
                el("section",
                    el("h3", "0xDesertFox"),
                    el("img", { src: "https://storage.googleapis.com/fp-pfp/3.png" }),
                    el("p", "Project Manager of FoxPunks. I love cute beings, and cuteness will dominate the world!"),
                ),
                el("section",
                    el("h3", "Wavo"),
                    el("img", { src: "https://storage.googleapis.com/fp-pfp/4.png" }),
                    el("p", "Designer of FoxPunks. I tried to capture the cuteness of a Desert Fox."),
                ),
                el("section",
                    el("h3", "0xMax"),
                    el("img", { src: "https://storage.googleapis.com/fp-pfp/2.png" }),
                    el("p", "Global Communication and Community Manager. Get in a ride on a cute journey!"),
                ),
                el("section",
                    el("h3", "Cion"),
                    el("img", { src: "https://storage.googleapis.com/fp-pfp/5.png" }),
                    el("p", "Support in various aspects, including community Building for the success of FoxPunks."),
                ),
            ),
        );
    }
}

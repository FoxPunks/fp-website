import { DomNode, el } from "@hanul/skynode";

export default class Intro extends DomNode {

    constructor() {
        super("section.intro");
        this.append(
            el("h2", "What are FoxPunks?"),
            el("header",
                el("img", { src: "/images/0.png", height: "200" }),
                el("p", "FoxPunks is a Profile Picture (PFP) project based on Binance Smart Chain. It has 10,000 cute random generative foxes. Each FoxPunk is comprised of a unique body, hat, face and outfit - the possibilities are endless! Our goal is to establish a foxverse by making cute foxes widely known to people. Many foxes are waiting for their owners. Everyone! Please be the owner of the fox.")
            ),
        );
    }
}

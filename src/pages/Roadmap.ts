import { DomNode, el } from "@hanul/skynode";

export default class Roadmap extends DomNode {

    constructor() {
        super("section.roadmap");
        this.append(
            el("h2", "Roadmap"),
            el("section",
                el("h3", "2021 4Q"),
                el("ul",
                    el("li", "FoxPunks Launching"),
                    el("li", "Listing on Pancake NFT"),
                ),
            ),
            el("section",
                el("h3", "2022 1Q"),
                el("ul",
                    el("li", "Tokenomics and PancakeSwap Pool Provision"),
                    el("li", "PFP Character Item Parts System Launching"),
                    el("li", "Clan System Launching"),
                ),
            ),
            el("section",
                el("h3", "2022 2Q"),
                el("ul",
                    el("li", "Foxverse (a.k.a FoxPunks Metaverse) Launching"),
                ),
            ),
        );
    }
}

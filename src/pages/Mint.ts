import { DomNode, el } from "@hanul/skynode";
import SkyUtil from "skyutil";

export default class Mint extends DomNode {

    constructor() {
        super("section.mint");
        let foxes: DomNode;
        this.append(
            el("h2", "Mint a Fox"),
            foxes = el(".foxes"),
            el("a", "Connect Wallet"),
            el(".wallet-address", "0x1234..."),
            el("a", "Mint"),
            el(".progress-bar",
                el(".bar"),
            ),
            el(".progress-text",
                el("h3", "mint progress"),
                el("p", "10000/10000"),
            ),
        );
        SkyUtil.repeat(40, (i) => {
            el("img", { src: `https://storage.googleapis.com/fp-pfp/${i}.png` }).appendTo(foxes);
        });
    }
}

import { DomNode, el } from "@hanul/skynode";
import SkyUtil from "skyutil";

export default class Foxes extends DomNode {

    constructor() {
        super("section.mint");
        let foxes: DomNode;
        this.append(
            el("h2", "Foxes"),
            foxes = el(".foxes"),
        );
        SkyUtil.repeat(32, (i) => {
            el("img", { src: `https://storage.googleapis.com/fp-pfp/${i}.png` }).appendTo(foxes);
        });
    }
}

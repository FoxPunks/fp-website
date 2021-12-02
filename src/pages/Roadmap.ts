import { DomNode, el } from "@hanul/skynode";

export default class Roadmap extends DomNode {

    constructor() {
        super("section.roadmap");
        this.append(
            el("h2", "Roadmap"),
            el("header",
                el("img", { src: "/images/0.png", height: "200" }),
                el("p", "Cool Cats are a collection of programmatically, randomly generated NFTs on the Ethereum blockchain. The 1st generation consists of 10,000 randomly assembled cats from over 300k total options. Cool Cats that have a variety of outfits, faces and colors - all cats are cool, but completed outfit cats are the coolest. Each Cool Cat is comprised of a unique body, hat, face and outfit - the possibilities are endless!")
            ),
        );
    }
}

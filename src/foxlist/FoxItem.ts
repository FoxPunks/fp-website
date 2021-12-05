import { DomNode, el } from "@hanul/skynode";

export default class FoxItem extends DomNode {

    constructor(id: number) {
        super(".fox-item");
        this.style({
            backgroundImage: `url(https://storage.googleapis.com/fp-pfp/${id}.png)`,
        });
        this.append(
            el("span", `#${id}`),
        );
    }
}

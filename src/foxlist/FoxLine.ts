import { ScrollItemDomNode } from "@hanul/skynode";
import FoxItem from "./FoxItem";

export default class FoxLine extends ScrollItemDomNode<number[]> {

    public get nodeData() { return this.ids; }

    constructor(private ids: number[]) {
        super((() => {
            const dom = document.createElement("div");
            dom.className = "fox-line"
            return dom;
        })());
        for (const id of ids) {
            this.append(new FoxItem(id));
        }
    }
}

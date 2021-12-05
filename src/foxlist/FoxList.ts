import { ScrollableDomNode } from "@hanul/skynode";
import SkyUtil from "skyutil";
import FoxLine from "./FoxLine";

export default class FoxList extends ScrollableDomNode<number[]> {

    constructor() {
        super(
            (() => {
                const dom = document.createElement("div");
                dom.className = "fox-list"
                return dom;
            })(),
            { childTag: "div", baseChildHeight: window.innerWidth < 800 ? 64 : 90 },
            (ids) => new FoxLine(ids),
        );
        if (window.innerWidth >= 800) {
            this.style({
                width: 740
            });
        }
    }

    public async load(foxes: number[]) {

        let index = 0;
        const foxIds: number[][] = [];
        SkyUtil.repeat(window.innerWidth < 800 ? Math.ceil(foxes.length / 5) : Math.ceil(foxes.length / 8), () => {
            const ids: number[] = [];
            SkyUtil.repeat(window.innerWidth < 800 ? 5 : 8, () => {
                ids.push(foxes[index]);
                index += 1;
                if (index === foxes.length) {
                    return false;
                }
            });
            foxIds.push(ids);
            if (index === foxes.length) {
                return false;
            }
        });

        this.init(foxIds);
    }
}

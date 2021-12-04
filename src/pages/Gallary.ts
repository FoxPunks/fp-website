import { DomNode, el } from "@hanul/skynode";
import partMap from "./parts.json";

export default class Gallary extends DomNode {

    constructor() {
        super("section.gallary");
        this.append(
            el("h2", "Gallary"),
            el("input", {
                placeholder: "# ID",
                change: (event, input) => {
                    //TODO:
                },
            }),
            ...Object.entries(partMap).map(([key, data]) => {
                const select = el("select",
                    {
                        placeholder: key,
                        change: (event, select) => {
                            //TODO:
                        },
                    },
                    el("option", key, { value: "" }),
                    key === "Face" ? undefined : el("option", "None", { value: "None" }),
                    ...data.parts.map((data) => el("option", data.name, { value: data.name })),
                );
                return select;
            }),
            el("a.reset-button", "필터 초기화", {
                click: () => {
                    //TODO:
                },
            }),
        );
    }
}

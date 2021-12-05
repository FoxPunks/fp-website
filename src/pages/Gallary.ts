import { DomNode, el } from "@hanul/skynode";
import SkyUtil from "skyutil";
import FoxList from "../foxlist/FoxList";
import partMap from "./parts.json";
import results from "./results.json";

export default class Gallary extends DomNode {

    private filter: { [key: string]: string } = {};
    private query: undefined | string;

    private foxList: FoxList;
    private selects: DomNode<HTMLSelectElement>[] = [];

    constructor() {
        super("section.gallary");
        this.append(
            el("h2", "Gallary"),
            el(".filter",
                el("input", {
                    placeholder: "# ID",
                    change: (event, input) => {
                        this.query = (input.domElement as HTMLInputElement).value.trim();
                        if (this.query === "") {
                            this.query = undefined;
                        }
                        this.loadFoxes();
                    },
                }),
                ...Object.entries(partMap).map(([, data]) => {
                    const select = el("select",
                        {
                            placeholder: data.name,
                            change: (event, select) => {
                                const value = (select.domElement as HTMLSelectElement).value;
                                Object.assign(this.filter, { [data.name]: value });
                                if (value === "") {
                                    delete this.filter[data.name];
                                }
                                this.loadFoxes();
                            },
                        },
                        el("option", data.name, { value: "" }),
                        ...data.parts.map((data) => el("option", data.name, { value: data.name })),
                    );
                    this.selects.push(select as DomNode<HTMLSelectElement>);
                    return select;
                }),
                el("a.reset-button", "필터 초기화", {
                    click: () => {
                        this.filter = {};
                        for (const select of this.selects) {
                            select.domElement.value = "";
                        }
                        this.query = undefined;
                        this.loadFoxes();
                    },
                }),
            ),
            this.foxList = new FoxList(),
        );
        setTimeout(() => this.loadFoxes());
    }

    private async loadFoxes() {

        const foxes: number[] = [];

        SkyUtil.repeat(10000, (id) => {
            const token = results[id];
            if (this.query !== undefined) {
                let queryId: number | undefined = parseInt(this.query, 10);
                queryId = isNaN(queryId) === true ? undefined : queryId;
                if (id === queryId) {
                    foxes.push(id);
                }
            } else {
                let pass = true;
                if (Object.keys(this.filter).length > 0) {
                    for (const [key, value] of Object.entries(this.filter)) {
                        for (const attribute of token.attributes) {
                            if (attribute.trait_type === key && attribute.value !== value) {
                                pass = false;
                                break;
                            }
                        }
                    }
                }
                if (pass === true) {
                    foxes.push(id);
                }
            }
        });

        this.foxList.load(foxes);
    }
}

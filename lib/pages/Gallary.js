"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
const FoxList_1 = __importDefault(require("../foxlist/FoxList"));
const parts_json_1 = __importDefault(require("./parts.json"));
const results_json_1 = __importDefault(require("./results.json"));
class Gallary extends skynode_1.DomNode {
    constructor() {
        super("section.gallary");
        this.filter = {};
        this.selects = [];
        this.append((0, skynode_1.el)("h2", "Gallary"), (0, skynode_1.el)(".filter", (0, skynode_1.el)("input", {
            placeholder: "# ID",
            change: (event, input) => {
                this.query = input.domElement.value.trim();
                if (this.query === "") {
                    this.query = undefined;
                }
                this.loadFoxes();
            },
        }), ...Object.entries(parts_json_1.default).map(([, data]) => {
            const select = (0, skynode_1.el)("select", {
                placeholder: data.name,
                change: (event, select) => {
                    const value = select.domElement.value;
                    Object.assign(this.filter, { [data.name]: value });
                    if (value === "") {
                        delete this.filter[data.name];
                    }
                    this.loadFoxes();
                },
            }, (0, skynode_1.el)("option", data.name, { value: "" }), ...data.parts.map((data) => (0, skynode_1.el)("option", data.name, { value: data.name })));
            this.selects.push(select);
            return select;
        }), (0, skynode_1.el)("a.reset-button", "필터 초기화", {
            click: () => {
                this.filter = {};
                for (const select of this.selects) {
                    select.domElement.value = "";
                }
                this.query = undefined;
                this.loadFoxes();
            },
        })), this.foxList = new FoxList_1.default());
        setTimeout(() => this.loadFoxes());
    }
    async loadFoxes() {
        const foxes = [];
        skyutil_1.default.repeat(10000, (id) => {
            const token = results_json_1.default[id];
            if (this.query !== undefined) {
                let queryId = parseInt(this.query, 10);
                queryId = isNaN(queryId) === true ? undefined : queryId;
                if (id === queryId) {
                    foxes.push(id);
                }
            }
            else {
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
exports.default = Gallary;
//# sourceMappingURL=Gallary.js.map
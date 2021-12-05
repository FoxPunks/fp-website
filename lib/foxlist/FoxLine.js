"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const FoxItem_1 = __importDefault(require("./FoxItem"));
class FoxLine extends skynode_1.ScrollItemDomNode {
    constructor(ids) {
        super((() => {
            const dom = document.createElement("div");
            dom.className = "fox-line";
            return dom;
        })());
        this.ids = ids;
        for (const id of ids) {
            this.append(new FoxItem_1.default(id));
        }
    }
    get nodeData() { return this.ids; }
}
exports.default = FoxLine;
//# sourceMappingURL=FoxLine.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
const FoxLine_1 = __importDefault(require("./FoxLine"));
class FoxList extends skynode_1.ScrollableDomNode {
    constructor() {
        super((() => {
            const dom = document.createElement("div");
            dom.className = "fox-list";
            return dom;
        })(), { childTag: "div", baseChildHeight: window.innerWidth < 800 ? 64 : 90 }, (ids) => new FoxLine_1.default(ids));
        if (window.innerWidth >= 800) {
            this.style({
                width: 740
            });
        }
    }
    async load(foxes) {
        let index = 0;
        const foxIds = [];
        skyutil_1.default.repeat(window.innerWidth < 800 ? Math.ceil(foxes.length / 5) : Math.ceil(foxes.length / 8), () => {
            const ids = [];
            skyutil_1.default.repeat(window.innerWidth < 800 ? 5 : 8, () => {
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
exports.default = FoxList;
//# sourceMappingURL=FoxList.js.map
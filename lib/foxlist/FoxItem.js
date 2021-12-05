"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class FoxItem extends skynode_1.DomNode {
    constructor(id) {
        super(".fox-item");
        this.style({
            backgroundImage: `url(https://storage.googleapis.com/fp-pfp/${id}.png)`,
        });
        this.append((0, skynode_1.el)("span", `#${id}`));
    }
}
exports.default = FoxItem;
//# sourceMappingURL=FoxItem.js.map
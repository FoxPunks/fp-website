"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const BSCWallet_1 = __importDefault(require("../bsc/BSCWallet"));
const FoxPunksContract_1 = __importDefault(require("../contracts/FoxPunksContract"));
const FoxList_1 = __importDefault(require("../foxlist/FoxList"));
class YourFoxes extends skynode_1.DomNode {
    constructor() {
        super("section.your-foxes");
        this.append((0, skynode_1.el)("header", (0, skynode_1.el)("h2", "Your Foxes"), (0, skynode_1.el)("a", "Connect Wallet", {
            click: () => BSCWallet_1.default.connect(),
        })), this.foxList = new FoxList_1.default());
        setTimeout(() => this.loadFoxes());
        BSCWallet_1.default.on("connect", () => this.loadFoxes());
    }
    async loadFoxes() {
        const address = await BSCWallet_1.default.loadAddress();
        if (address !== undefined) {
            const balance = await FoxPunksContract_1.default.balanceOf(address);
        }
    }
}
exports.default = YourFoxes;
//# sourceMappingURL=YourFoxes.js.map
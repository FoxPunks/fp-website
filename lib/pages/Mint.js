"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const skyutil_1 = __importDefault(require("skyutil"));
const BSCNetworkProvider_1 = __importDefault(require("../bsc/BSCNetworkProvider"));
const BSCWallet_1 = __importDefault(require("../bsc/BSCWallet"));
const CommonUtil_1 = __importDefault(require("../CommonUtil"));
const FoxPunksMinterContract_1 = __importDefault(require("../contracts/FoxPunksMinterContract"));
class Mint extends skynode_1.DomNode {
    constructor() {
        super("section.mint");
        this.TOTAL_COUNT = 4000;
        let foxes;
        this.append((0, skynode_1.el)("h2", "Mint a Fox"), foxes = (0, skynode_1.el)(".foxes"), this.mintPrice = (0, skynode_1.el)(".mint-price", "Mint Price:"), this.balance = (0, skynode_1.el)(".mint-price", "Your BNB:"), this.connectButton = (0, skynode_1.el)("button.connect", "Connect Wallet", {
            click: async () => {
                if (await BSCWallet_1.default.connected() !== true) {
                    await BSCWallet_1.default.connect();
                }
            }
        }), (0, skynode_1.el)(".input-container", (0, skynode_1.el)(".label", "Address"), this.addressInput = (0, skynode_1.el)("input.address", { placeholder: "0x1234...", readonly: "readonly" })), (0, skynode_1.el)("button.mint", "Mint", {
            click: async () => {
                await FoxPunksMinterContract_1.default.mint();
            }
        }), (0, skynode_1.el)(".progress", this.bar = (0, skynode_1.el)(".progress-bar"), (0, skynode_1.el)(".text-container", (0, skynode_1.el)(".progress-text", "mint progress"), this.progressText = (0, skynode_1.el)(".progress-text"))));
        skyutil_1.default.repeat(32, (i) => {
            (0, skynode_1.el)("img", { src: `https://storage.googleapis.com/fp-pfp/${i}.png` }).appendTo(foxes);
        });
        this.loadPrice();
        BSCWallet_1.default.on("connect", () => this.loadBalance());
        this.progress();
        this.interval = setInterval(() => this.progress(), 1000);
    }
    async loadPrice() {
        const price = await FoxPunksMinterContract_1.default.mintPrice();
        this.mintPrice.empty().appendText(`Mint Price: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(price))} BNB`);
    }
    async loadBalance() {
        const address = await BSCWallet_1.default.loadAddress();
        if (address !== undefined) {
            this.connectButton.style({ display: "none" });
            this.addressInput.domElement.value = address;
            const balance = await BSCNetworkProvider_1.default.getBalance(address);
            this.balance.empty().appendText(`Your BNB: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(balance))} BNB`);
        }
    }
    async progress() {
        const remains = (await FoxPunksMinterContract_1.default.limit()).toNumber();
        const d = this.TOTAL_COUNT - remains > this.TOTAL_COUNT ? this.TOTAL_COUNT : this.TOTAL_COUNT - remains;
        this.bar.style({ width: `${d / this.TOTAL_COUNT * 100}%` });
        this.progressText.empty().appendText(`${d}/${this.TOTAL_COUNT}`);
    }
    delete() {
        clearInterval(this.interval);
        super.delete();
    }
}
exports.default = Mint;
//# sourceMappingURL=Mint.js.map
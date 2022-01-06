import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import SkyUtil from "skyutil";
import BSCNetworkProvider from "../bsc/BSCNetworkProvider";
import BSCWallet from "../bsc/BSCWallet";
import CommonUtil from "../CommonUtil";
import FoxPunksMinterContract from "../contracts/FoxPunksMinterContract";

export default class Mint extends DomNode {

    private TOTAL_COUNT = 4000;
    private interval: any;

    private mintPrice: DomNode;
    private balance: DomNode;
    private connectButton: DomNode;
    private addressInput: DomNode<HTMLInputElement>;
    private bar: DomNode;
    private progressText: DomNode;

    constructor() {
        super("section.mint");
        let foxes: DomNode;
        this.append(
            el("h2", "Mint a Fox"),
            foxes = el(".foxes"),
            this.mintPrice = el(".mint-price", "Mint Price:"),
            this.balance = el(".mint-price", "Your BNB:"),
            this.connectButton = el("button.connect", "Connect Wallet", {
                click: async () => {
                    if (await BSCWallet.connected() !== true) {
                        await BSCWallet.connect();
                    }
                }
            }),
            el(".input-container", el(".label", "Address"), this.addressInput = el("input.address", { placeholder: "0x1234...", readonly: "readonly" })),
            el("button.mint", "Mint", {
                click: async () => {
                    await FoxPunksMinterContract.mint();
                }
            }),
            el(".progress", this.bar = el(".progress-bar"), el(".text-container", el(".progress-text", "mint progress"), this.progressText = el(".progress-text"))),
        );
        SkyUtil.repeat(32, (i) => {
            el("img", { src: `https://storage.googleapis.com/fp-pfp/${i}.png` }).appendTo(foxes);
        });

        this.loadPrice();
        BSCWallet.on("connect", () => this.loadBalance());
        this.progress();
        this.interval = setInterval(() => this.progress(), 1000);
    }

    private async loadPrice() {
        const price = await FoxPunksMinterContract.mintPrice();
        this.mintPrice.empty().appendText(`Mint Price: ${CommonUtil.numberWithCommas(utils.formatEther(price))} BNB`);
    }

    private async loadBalance() {
        const address = await BSCWallet.loadAddress();
        if (address !== undefined) {
            this.connectButton.style({ display: "none" });
            this.addressInput.domElement.value = address;
            const balance = await BSCNetworkProvider.getBalance(address);
            this.balance.empty().appendText(`Your BNB: ${CommonUtil.numberWithCommas(utils.formatEther(balance))} BNB`);
        }
    }

    private async progress() {
        const remains = (await FoxPunksMinterContract.limit()).toNumber();
        const d = this.TOTAL_COUNT - remains > this.TOTAL_COUNT ? this.TOTAL_COUNT : this.TOTAL_COUNT - remains;
        this.bar.style({ width: `${d / this.TOTAL_COUNT * 100}%` });
        this.progressText.empty().appendText(`${d}/${this.TOTAL_COUNT}`);
    }

    public delete(): void {
        clearInterval(this.interval);
        super.delete();
    }
}

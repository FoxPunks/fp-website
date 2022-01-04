import { DomNode, el } from "@hanul/skynode";
import BSCWallet from "../bsc/BSCWallet";
import FoxPunksContract from "../contracts/FoxPunksContract";
import FoxList from "../foxlist/FoxList";

export default class YourFoxes extends DomNode {

    private foxList: FoxList;

    constructor() {
        super("section.your-foxes");
        this.append(
            el("header",
                el("h2", "Your Foxes"),
                el("a", "Connect Wallet", {
                    click: () => BSCWallet.connect(),
                }),
            ),
            this.foxList = new FoxList(),
        );
        setTimeout(() => this.loadFoxes());
        BSCWallet.on("connect", () => this.loadFoxes());
    }

    private async loadFoxes() {
        const address = await BSCWallet.loadAddress();
        if (address !== undefined) {
            const balance = await FoxPunksContract.balanceOf(address);
        }
    }
}

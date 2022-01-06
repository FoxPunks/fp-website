import { BigNumber } from "ethers";
import FoxPunksMinterArtifact from "./abi/artifacts/contracts/FoxPunksMinter.sol/FoxPunksMinter.json";
import { FoxPunksMinter } from "./abi/typechain";
import BSCContract from "./BSCContract";
import FoxPunksContract from "./FoxPunksContract";

class FoxPunksMinterContract extends BSCContract<FoxPunksMinter> {

    constructor() {
        super("0xbD29E62e00a68600817BD072f0F65F918cB724a3", FoxPunksMinterArtifact.abi, []);
    }

    public async mintPrice(): Promise<BigNumber> {
        return await this.contract.mintPrice();
    }

    public async limit(): Promise<BigNumber> {
        return await this.contract.limit();
    }

    public async mint() {

        const contract = await this.connectAndGetWalletContract();
        if (contract !== undefined) {

            const price = await this.mintPrice();

            if ((await this.limit()).eq(0)) {
                alert("End of minting as it reached the maximum mintable amount.");
            } else {
                await contract.mint({ value: price });
            }
        }
    }
}

export default new FoxPunksMinterContract();

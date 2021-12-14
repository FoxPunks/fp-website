import { BigNumber } from "ethers";
import FoxPunksMinterArtifact from "./abi/artifacts/contracts/FoxPunksMinter.sol/FoxPunksMinter.json";
import { FoxPunksMinter } from "./abi/typechain";
import BSCContract from "./BSCContract";
import FoxPunksContract from "./FoxPunksContract";

class FoxPunksMinterContract extends BSCContract<FoxPunksMinter> {

    constructor() {
        super("0x2E0117037615a1c02C9640De5384f939A8192B5E", FoxPunksMinterArtifact.abi, []);
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

            if ((await FoxPunksContract.totalSupply()).gte(await this.limit())) {
                alert("End of minting as it reached the maximum mintable amount.");
            } else {
                await contract.mint({ value: price });
            }
        }
    }
}

export default new FoxPunksMinterContract();

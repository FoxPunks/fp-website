import { BigNumber } from "@ethersproject/bignumber";
import FoxPunksArtifact from "./abi/artifacts/contracts/FoxPunks.sol/FoxPunks.json";
import { FoxPunks } from "./abi/typechain";
import ERC721Contract from "./ethereum-standard/ERC721Contract";

class FoxPunksContract extends ERC721Contract<FoxPunks>{

    constructor() {
        super("0x5D4541Ea6460c39B5d600Fe06d2865637867b122", FoxPunksArtifact.abi, []);
    }

    public async totalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }
}

export default new FoxPunksContract();

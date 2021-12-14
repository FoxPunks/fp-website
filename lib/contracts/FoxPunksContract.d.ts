import { BigNumber } from "@ethersproject/bignumber";
import { FoxPunks } from "./abi/typechain";
import ERC721Contract from "./ethereum-standard/ERC721Contract";
declare class FoxPunksContract extends ERC721Contract<FoxPunks> {
    constructor();
    totalSupply(): Promise<BigNumber>;
}
declare const _default: FoxPunksContract;
export default _default;
//# sourceMappingURL=FoxPunksContract.d.ts.map
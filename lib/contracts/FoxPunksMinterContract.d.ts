import { BigNumber } from "ethers";
import { FoxPunksMinter } from "./abi/typechain";
import BSCContract from "./BSCContract";
declare class FoxPunksMinterContract extends BSCContract<FoxPunksMinter> {
    constructor();
    mintPrice(): Promise<BigNumber>;
    limit(): Promise<BigNumber>;
    mint(): Promise<void>;
}
declare const _default: FoxPunksMinterContract;
export default _default;
//# sourceMappingURL=FoxPunksMinterContract.d.ts.map
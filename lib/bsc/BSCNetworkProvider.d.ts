import { ethers } from "ethers";
import EventContainer from "eventcontainer";
declare class BSCNetworkProvider extends EventContainer {
    provider: ethers.providers.JsonRpcProvider;
    signer: ethers.providers.JsonRpcSigner;
    constructor();
    getBlockNumber(): Promise<number>;
    getBalance(address: string): Promise<ethers.BigNumber>;
}
declare const _default: BSCNetworkProvider;
export default _default;
//# sourceMappingURL=BSCNetworkProvider.d.ts.map
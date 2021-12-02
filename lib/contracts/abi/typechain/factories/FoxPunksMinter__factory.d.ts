import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { FoxPunksMinter } from "../FoxPunksMinter";
export declare class FoxPunksMinter__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_foxPunks: string, _mintPrice: BigNumberish, overrides?: Overrides): Promise<FoxPunksMinter>;
    getDeployTransaction(_foxPunks: string, _mintPrice: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): FoxPunksMinter;
    connect(signer: Signer): FoxPunksMinter__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): FoxPunksMinter;
}
//# sourceMappingURL=FoxPunksMinter__factory.d.ts.map
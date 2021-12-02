import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { FoxPunks } from "../FoxPunks";
export declare class FoxPunks__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_feeReceiver: string, _fee: BigNumberish, overrides?: Overrides): Promise<FoxPunks>;
    getDeployTransaction(_feeReceiver: string, _fee: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): FoxPunks;
    connect(signer: Signer): FoxPunks__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): FoxPunks;
}
//# sourceMappingURL=FoxPunks__factory.d.ts.map
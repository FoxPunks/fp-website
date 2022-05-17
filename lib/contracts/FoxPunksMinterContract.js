"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FoxPunksMinter_json_1 = __importDefault(require("./abi/artifacts/contracts/FoxPunksMinter.sol/FoxPunksMinter.json"));
const BSCContract_1 = __importDefault(require("./BSCContract"));
class FoxPunksMinterContract extends BSCContract_1.default {
    constructor() {
        super("0xbD29E62e00a68600817BD072f0F65F918cB724a3", FoxPunksMinter_json_1.default.abi, []);
    }
    async mintPrice() {
        return await this.contract.mintPrice();
    }
    async limit() {
        return await this.contract.limit();
    }
    async mint() {
        const contract = await this.connectAndGetWalletContract();
        if (contract !== undefined) {
            const price = await this.mintPrice();
            if ((await this.limit()).eq(0)) {
                alert("End of minting as it reached the maximum mintable amount.");
            }
            else {
                await contract.mint({ value: price });
            }
        }
    }
}
exports.default = new FoxPunksMinterContract();
//# sourceMappingURL=FoxPunksMinterContract.js.map
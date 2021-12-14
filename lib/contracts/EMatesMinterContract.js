"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FoxPunksMinter_json_1 = __importDefault(require("./abi/artifacts/contracts/FoxPunksMinter.sol/FoxPunksMinter.json"));
const BSCContract_1 = __importDefault(require("./BSCContract"));
const FoxPunksContract_1 = __importDefault(require("./FoxPunksContract"));
class FoxPunksMinterContract extends BSCContract_1.default {
    constructor() {
        super("0x2E0117037615a1c02C9640De5384f939A8192B5E", FoxPunksMinter_json_1.default.abi, []);
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
            if ((await FoxPunksContract_1.default.totalSupply()).gte(await this.limit())) {
                alert("더 이상 민팅이 불가능합니다.");
            }
            else {
                await contract.mint({ value: price });
            }
        }
    }
}
exports.default = new FoxPunksMinterContract();
//# sourceMappingURL=EMatesMinterContract.js.map
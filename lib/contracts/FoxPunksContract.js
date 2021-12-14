"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FoxPunks_json_1 = __importDefault(require("./abi/artifacts/contracts/FoxPunks.sol/FoxPunks.json"));
const ERC721Contract_1 = __importDefault(require("./ethereum-standard/ERC721Contract"));
class FoxPunksContract extends ERC721Contract_1.default {
    constructor() {
        super("0x5D4541Ea6460c39B5d600Fe06d2865637867b122", FoxPunks_json_1.default.abi, []);
    }
    async totalSupply() {
        return await this.contract.totalSupply();
    }
}
exports.default = new FoxPunksContract();
//# sourceMappingURL=FoxPunksContract.js.map
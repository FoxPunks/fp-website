"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const eventcontainer_1 = __importDefault(require("eventcontainer"));
const BSCNetworkProvider_1 = __importDefault(require("../bsc/BSCNetworkProvider"));
const BSCWallet_1 = __importDefault(require("../bsc/BSCWallet"));
class Contract extends eventcontainer_1.default {
    constructor(address, abi, eventNames) {
        super();
        this.address = address;
        this.abi = abi;
        this.contract = new ethers_1.ethers.Contract(address, abi, BSCNetworkProvider_1.default.provider).connect(BSCNetworkProvider_1.default.signer);
        for (const eventName of eventNames) {
            this.contract.on(eventName, (...args) => {
                this.fireEvent(eventName, ...args);
            });
        }
        BSCWallet_1.default.on("chainChanged", () => this.walletContract = undefined);
    }
    get interface() {
        return this.contract.interface;
    }
    async getWalletContract() {
        if (await BSCWallet_1.default.connected() === true) {
            if (this.walletContract === undefined && BSCWallet_1.default.signer !== undefined) {
                this.walletContract = new ethers_1.ethers.Contract(this.address, this.abi, BSCWallet_1.default.provider).connect(BSCWallet_1.default.signer);
            }
            return this.walletContract;
        }
    }
    async connectAndGetWalletContract() {
        if (await BSCWallet_1.default.loadChainId() !== 1) {
            alert("Wrong Network. Please change to Ethereum.");
            BSCWallet_1.default.disconnectFromWalletConnect();
        }
        else {
            if (await BSCWallet_1.default.connected() !== true) {
                await BSCWallet_1.default.connect();
            }
            if (this.walletContract === undefined && BSCWallet_1.default.signer !== undefined) {
                this.walletContract = new ethers_1.ethers.Contract(this.address, this.abi, BSCWallet_1.default.provider).connect(BSCWallet_1.default.signer);
            }
            return this.walletContract;
        }
    }
}
exports.default = Contract;
//# sourceMappingURL=EthereumContract.js.map
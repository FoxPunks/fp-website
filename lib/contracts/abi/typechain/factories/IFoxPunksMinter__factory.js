"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFoxPunksMinter__factory = void 0;
const ethers_1 = require("ethers");
class IFoxPunksMinter__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IFoxPunksMinter__factory = IFoxPunksMinter__factory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "limit",
                type: "uint256",
            },
        ],
        name: "SetLimit",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "mintPrice",
                type: "uint256",
            },
        ],
        name: "SetMintPrice",
        type: "event",
    },
    {
        inputs: [],
        name: "foxPunks",
        outputs: [
            {
                internalType: "contract IFoxPunks",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "limit",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "mint",
        outputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "mintPrice",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
//# sourceMappingURL=IFoxPunksMinter__factory.js.map
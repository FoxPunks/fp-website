/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IFoxPunksMinterInterface extends ethers.utils.Interface {
  functions: {
    "foxPunks()": FunctionFragment;
    "limit()": FunctionFragment;
    "mint()": FunctionFragment;
    "mintPrice()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "foxPunks", values?: undefined): string;
  encodeFunctionData(functionFragment: "limit", values?: undefined): string;
  encodeFunctionData(functionFragment: "mint", values?: undefined): string;
  encodeFunctionData(functionFragment: "mintPrice", values?: undefined): string;

  decodeFunctionResult(functionFragment: "foxPunks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "limit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintPrice", data: BytesLike): Result;

  events: {
    "SetLimit(uint256)": EventFragment;
    "SetMintPrice(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetLimit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetMintPrice"): EventFragment;
}

export class IFoxPunksMinter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IFoxPunksMinterInterface;

  functions: {
    foxPunks(overrides?: CallOverrides): Promise<[string]>;

    "foxPunks()"(overrides?: CallOverrides): Promise<[string]>;

    limit(overrides?: CallOverrides): Promise<[BigNumber]>;

    "limit()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "mint()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

    mintPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    "mintPrice()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  foxPunks(overrides?: CallOverrides): Promise<string>;

  "foxPunks()"(overrides?: CallOverrides): Promise<string>;

  limit(overrides?: CallOverrides): Promise<BigNumber>;

  "limit()"(overrides?: CallOverrides): Promise<BigNumber>;

  mint(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "mint()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  mintPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "mintPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    foxPunks(overrides?: CallOverrides): Promise<string>;

    "foxPunks()"(overrides?: CallOverrides): Promise<string>;

    limit(overrides?: CallOverrides): Promise<BigNumber>;

    "limit()"(overrides?: CallOverrides): Promise<BigNumber>;

    mint(overrides?: CallOverrides): Promise<BigNumber>;

    "mint()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "mintPrice()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    SetLimit(limit: null): EventFilter;

    SetMintPrice(mintPrice: null): EventFilter;
  };

  estimateGas: {
    foxPunks(overrides?: CallOverrides): Promise<BigNumber>;

    "foxPunks()"(overrides?: CallOverrides): Promise<BigNumber>;

    limit(overrides?: CallOverrides): Promise<BigNumber>;

    "limit()"(overrides?: CallOverrides): Promise<BigNumber>;

    mint(overrides?: PayableOverrides): Promise<BigNumber>;

    "mint()"(overrides?: PayableOverrides): Promise<BigNumber>;

    mintPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "mintPrice()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    foxPunks(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "foxPunks()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    limit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "limit()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "mint()"(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    mintPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "mintPrice()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
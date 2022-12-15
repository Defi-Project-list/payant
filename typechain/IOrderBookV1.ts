/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type StateConfigStruct = {
  sources: BytesLike[];
  constants: BigNumberish[];
};

export type StateConfigStructOutput = [string[], BigNumber[]] & {
  sources: string[];
  constants: BigNumber[];
};

export type IOStruct = {
  token: string;
  decimals: BigNumberish;
  vaultId: BigNumberish;
};

export type IOStructOutput = [string, number, BigNumber] & {
  token: string;
  decimals: number;
  vaultId: BigNumber;
};

export type OrderConfigStruct = {
  expressionDeployer: string;
  interpreter: string;
  interpreterStateConfig: StateConfigStruct;
  validInputs: IOStruct[];
  validOutputs: IOStruct[];
  data: BytesLike;
};

export type OrderConfigStructOutput = [
  string,
  string,
  StateConfigStructOutput,
  IOStructOutput[],
  IOStructOutput[],
  string
] & {
  expressionDeployer: string;
  interpreter: string;
  interpreterStateConfig: StateConfigStructOutput;
  validInputs: IOStructOutput[];
  validOutputs: IOStructOutput[];
  data: string;
};

export type OrderStruct = {
  owner: string;
  interpreter: string;
  dispatch: BigNumberish;
  handleIODispatch: BigNumberish;
  validInputs: IOStruct[];
  validOutputs: IOStruct[];
  data: BytesLike;
};

export type OrderStructOutput = [
  string,
  string,
  BigNumber,
  BigNumber,
  IOStructOutput[],
  IOStructOutput[],
  string
] & {
  owner: string;
  interpreter: string;
  dispatch: BigNumber;
  handleIODispatch: BigNumber;
  validInputs: IOStructOutput[];
  validOutputs: IOStructOutput[];
  data: string;
};

export type ClearConfigStruct = {
  aInputIOIndex: BigNumberish;
  aOutputIOIndex: BigNumberish;
  bInputIOIndex: BigNumberish;
  bOutputIOIndex: BigNumberish;
  aBountyVaultId: BigNumberish;
  bBountyVaultId: BigNumberish;
};

export type ClearConfigStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  aInputIOIndex: BigNumber;
  aOutputIOIndex: BigNumber;
  bInputIOIndex: BigNumber;
  bOutputIOIndex: BigNumber;
  aBountyVaultId: BigNumber;
  bBountyVaultId: BigNumber;
};

export type DepositConfigStruct = {
  token: string;
  vaultId: BigNumberish;
  amount: BigNumberish;
};

export type DepositConfigStructOutput = [string, BigNumber, BigNumber] & {
  token: string;
  vaultId: BigNumber;
  amount: BigNumber;
};

export type TakeOrderConfigStruct = {
  order: OrderStruct;
  inputIOIndex: BigNumberish;
  outputIOIndex: BigNumberish;
};

export type TakeOrderConfigStructOutput = [
  OrderStructOutput,
  BigNumber,
  BigNumber
] & {
  order: OrderStructOutput;
  inputIOIndex: BigNumber;
  outputIOIndex: BigNumber;
};

export type TakeOrdersConfigStruct = {
  output: string;
  input: string;
  minimumInput: BigNumberish;
  maximumInput: BigNumberish;
  maximumIORatio: BigNumberish;
  orders: TakeOrderConfigStruct[];
};

export type TakeOrdersConfigStructOutput = [
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  TakeOrderConfigStructOutput[]
] & {
  output: string;
  input: string;
  minimumInput: BigNumber;
  maximumInput: BigNumber;
  maximumIORatio: BigNumber;
  orders: TakeOrderConfigStructOutput[];
};

export type WithdrawConfigStruct = {
  token: string;
  vaultId: BigNumberish;
  amount: BigNumberish;
};

export type WithdrawConfigStructOutput = [string, BigNumber, BigNumber] & {
  token: string;
  vaultId: BigNumber;
  amount: BigNumber;
};

export interface IOrderBookV1Interface extends utils.Interface {
  functions: {
    "addOrder((address,address,(bytes[],uint256[]),(address,uint8,uint256)[],(address,uint8,uint256)[],bytes))": FunctionFragment;
    "clear((address,address,uint256,uint256,(address,uint8,uint256)[],(address,uint8,uint256)[],bytes),(address,address,uint256,uint256,(address,uint8,uint256)[],(address,uint8,uint256)[],bytes),(uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
    "deposit((address,uint256,uint256))": FunctionFragment;
    "removeOrder((address,address,uint256,uint256,(address,uint8,uint256)[],(address,uint8,uint256)[],bytes))": FunctionFragment;
    "takeOrders((address,address,uint256,uint256,uint256,((address,address,uint256,uint256,(address,uint8,uint256)[],(address,uint8,uint256)[],bytes),uint256,uint256)[]))": FunctionFragment;
    "vaultBalance(address,address,uint256)": FunctionFragment;
    "withdraw((address,uint256,uint256))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addOrder",
    values: [OrderConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "clear",
    values: [OrderStruct, OrderStruct, ClearConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [DepositConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "removeOrder",
    values: [OrderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "takeOrders",
    values: [TakeOrdersConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultBalance",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [WithdrawConfigStruct]
  ): string;

  decodeFunctionResult(functionFragment: "addOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "clear", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "takeOrders", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vaultBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export interface IOrderBookV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOrderBookV1Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addOrder(
      config: OrderConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    clear(
      a: OrderStruct,
      b: OrderStruct,
      clearConfig: ClearConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      config: DepositConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeOrder(
      order: OrderStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    takeOrders(
      takeOrders: TakeOrdersConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vaultBalance(
      owner: string,
      token: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    withdraw(
      config: WithdrawConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addOrder(
    config: OrderConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  clear(
    a: OrderStruct,
    b: OrderStruct,
    clearConfig: ClearConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    config: DepositConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeOrder(
    order: OrderStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  takeOrders(
    takeOrders: TakeOrdersConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vaultBalance(
    owner: string,
    token: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdraw(
    config: WithdrawConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addOrder(
      config: OrderConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    clear(
      a: OrderStruct,
      b: OrderStruct,
      clearConfig: ClearConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      config: DepositConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    removeOrder(order: OrderStruct, overrides?: CallOverrides): Promise<void>;

    takeOrders(
      takeOrders: TakeOrdersConfigStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { totalInput: BigNumber; totalOutput: BigNumber }
    >;

    vaultBalance(
      owner: string,
      token: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      config: WithdrawConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addOrder(
      config: OrderConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    clear(
      a: OrderStruct,
      b: OrderStruct,
      clearConfig: ClearConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      config: DepositConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeOrder(
      order: OrderStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    takeOrders(
      takeOrders: TakeOrdersConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vaultBalance(
      owner: string,
      token: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      config: WithdrawConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addOrder(
      config: OrderConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    clear(
      a: OrderStruct,
      b: OrderStruct,
      clearConfig: ClearConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      config: DepositConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeOrder(
      order: OrderStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    takeOrders(
      takeOrders: TakeOrdersConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vaultBalance(
      owner: string,
      token: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      config: WithdrawConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

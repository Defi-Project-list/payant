/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface ERC3156FlashBorrowerTestInterface extends utils.Interface {
  functions: {
    "onFlashLoan(address,address,uint256,uint256,bytes)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "onFlashLoan"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "onFlashLoan",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "onFlashLoan",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ERC3156FlashBorrowerTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC3156FlashBorrowerTestInterface;

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
    onFlashLoan(
      arg0: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      fee: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  onFlashLoan(
    arg0: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    fee: PromiseOrValue<BigNumberish>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    onFlashLoan(
      arg0: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      fee: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    onFlashLoan(
      arg0: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      fee: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onFlashLoan(
      arg0: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      fee: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

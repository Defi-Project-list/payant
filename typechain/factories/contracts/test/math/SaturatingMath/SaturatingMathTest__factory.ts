/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  SaturatingMathTest,
  SaturatingMathTestInterface,
} from "../../../../../contracts/test/math/SaturatingMath/SaturatingMathTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b_",
        type: "uint256",
      },
    ],
    name: "saturatingAdd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b_",
        type: "uint256",
      },
    ],
    name: "saturatingMul",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b_",
        type: "uint256",
      },
    ],
    name: "saturatingSub",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506101c8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634dc094381461004657806372875c1c1461006b578063cecf7adc1461007e575b600080fd5b610059610054366004610141565b610091565b60405190815260200160405180910390f35b610059610079366004610141565b6100a6565b61005961008c366004610141565b6100b2565b600061009d83836100be565b90505b92915050565b600061009d8383610119565b600061009d838361012f565b6000826000036100d0575060006100a0565b828202828482816100e3576100e3610163565b04036100ef5780610111565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b949350505050565b600081831161012957600061009d565b50900390565b60008282018381106100ef5780610111565b6000806040838503121561015457600080fd5b50508035926020909101359150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea2646970667358221220b8da684896c1005ac7c105506eba5a7baff46eaa8eacb65db2f2b38d39c04eea64736f6c63430008110033";

type SaturatingMathTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SaturatingMathTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SaturatingMathTest__factory extends ContractFactory {
  constructor(...args: SaturatingMathTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SaturatingMathTest> {
    return super.deploy(overrides || {}) as Promise<SaturatingMathTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SaturatingMathTest {
    return super.attach(address) as SaturatingMathTest;
  }
  override connect(signer: Signer): SaturatingMathTest__factory {
    return super.connect(signer) as SaturatingMathTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SaturatingMathTestInterface {
    return new utils.Interface(_abi) as SaturatingMathTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SaturatingMathTest {
    return new Contract(address, _abi, signerOrProvider) as SaturatingMathTest;
  }
}

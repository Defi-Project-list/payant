/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  TierReportTest,
  TierReportTestInterface,
} from "../../../../../../contracts/test/tier/libraries/TierReport/TierReportTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "report_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tier_",
        type: "uint256",
      },
    ],
    name: "reportTimeForTier",
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
        name: "report_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp_",
        type: "uint256",
      },
    ],
    name: "tierAtTimeFromReport",
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
        name: "report_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tier_",
        type: "uint256",
      },
    ],
    name: "truncateTiersAbove",
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
        name: "report_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTier_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTier_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp_",
        type: "uint256",
      },
    ],
    name: "updateReportWithTierAtTime",
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
        name: "report_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tier_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp_",
        type: "uint256",
      },
    ],
    name: "updateTimeAtTier",
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
        name: "report_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTier_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTier_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp_",
        type: "uint256",
      },
    ],
    name: "updateTimesForTierRange",
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
  "0x608060405234801561001057600080fd5b506104ec806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063787752041161005057806378775204146100c2578063c29df246146100d5578063f0ef511b146100e857600080fd5b806318cc4ccb146100775780633907cb421461009c578063696dd6c0146100af575b600080fd5b61008a610085366004610436565b6100fb565b60405190815260200160405180910390f35b61008a6100aa366004610462565b610110565b61008a6100bd366004610494565b610127565b61008a6100d0366004610494565b61013c565b61008a6100e3366004610462565b610148565b61008a6100f6366004610494565b610156565b6000610108848484610162565b949350505050565b600061011e858585856101f1565b95945050505050565b60006101338383610215565b90505b92915050565b6000610133838361023c565b600061011e858585856102e0565b60006101338383610386565b60008260088111156101d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b505060209190910290811b63ffffffff90911b19919091161790565b600083831061020b57610206858585856102e0565b61011e565b61011e858461023c565b60005b600881101561013657818160200284901c63ffffffff161161013657600101610218565b60008160088111156102aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064016101cc565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6020840290811c901b841791505b5092915050565b600082600881111561034e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064016101cc565b6000855b8581101561037a5763ffffffff6020820290811b199890981685891b17979150600101610352565b50959695505050505050565b60008160088111156103f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064016101cc565b8260000361040557600091506102d9565b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016020021c63ffffffff1690565b60008060006060848603121561044b57600080fd5b505081359360208301359350604090920135919050565b6000806000806080858703121561047857600080fd5b5050823594602084013594506040840135936060013592509050565b600080604083850312156104a757600080fd5b5050803592602090910135915056fea264697066735822122051b9b112baf400f1d8fcb9939c1adee254ca7a5a99767778a98317cc5c09379964736f6c63430008110033";

type TierReportTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TierReportTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TierReportTest__factory extends ContractFactory {
  constructor(...args: TierReportTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TierReportTest> {
    return super.deploy(overrides || {}) as Promise<TierReportTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TierReportTest {
    return super.attach(address) as TierReportTest;
  }
  override connect(signer: Signer): TierReportTest__factory {
    return super.connect(signer) as TierReportTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TierReportTestInterface {
    return new utils.Interface(_abi) as TierReportTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TierReportTest {
    return new Contract(address, _abi, signerOrProvider) as TierReportTest;
  }
}
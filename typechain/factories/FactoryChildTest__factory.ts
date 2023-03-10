/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FactoryChildTest,
  FactoryChildTestInterface,
} from "../FactoryChildTest";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "Construct",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Initialize",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value_",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040513381527f9b1dd48b9d6c55ffc4373833c93cb181b33bfc68d1d5cd3e736e0eca3f0e1afc9060200160405180910390a16101db806100536000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063fe4b84df14610030575b600080fd5b61004361003e36600461018c565b610045565b005b600054610100900460ff16158080156100655750600054600160ff909116105b8061007f5750303b15801561007f575060005460ff166001145b6100e65760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6000805460ff191660011790558015610109576000805461ff0019166101001790555b60408051338152602081018490527ffb9d66c34fa43208534a846ef789547e25046760500fdf53af4204cbe4e16c89910160405180910390a18015610188576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b60006020828403121561019e57600080fd5b503591905056fea264697066735822122050feb5d022802c8a8c9fe586eb2f02bc89496882a198724ce24a85358b00ccf164736f6c63430008110033";

type FactoryChildTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FactoryChildTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FactoryChildTest__factory extends ContractFactory {
  constructor(...args: FactoryChildTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FactoryChildTest> {
    return super.deploy(overrides || {}) as Promise<FactoryChildTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FactoryChildTest {
    return super.attach(address) as FactoryChildTest;
  }
  connect(signer: Signer): FactoryChildTest__factory {
    return super.connect(signer) as FactoryChildTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FactoryChildTestInterface {
    return new utils.Interface(_abi) as FactoryChildTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FactoryChildTest {
    return new Contract(address, _abi, signerOrProvider) as FactoryChildTest;
  }
}

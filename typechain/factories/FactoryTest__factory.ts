/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FactoryTest, FactoryTestInterface } from "../FactoryTest";

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
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Implementation",
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
        internalType: "address",
        name: "child",
        type: "address",
      },
    ],
    name: "NewChild",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
    ],
    name: "createChild",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value_",
        type: "uint256",
      },
    ],
    name: "createChildTyped",
    outputs: [
      {
        internalType: "contract FactoryChildTest",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "maybeChild_",
        type: "address",
      },
    ],
    name: "isChild",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50610019610099565b600060405161002790610159565b604051809103906000f080158015610043573d6000803e3d6000fd5b50604080513381526001600160a01b03831660208201529192507f7fac34ecf0b1b374cd9659e3d17db602659d53f1162b1f20142e6c02694aed70910160405180910390a16001600160a01b0316608052610166565b600054610100900460ff16156101055760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161015610157576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b61022e8061064b83390190565b6080516104ca610181600039600061024601526104ca6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632ea72a49146100465780637327791214610076578063fc91a89714610089575b600080fd5b610059610054366004610382565b6100c5565b6040516001600160a01b0390911681526020015b60405180910390f35b610059610084366004610432565b6101f4565b6100b561009736600461044b565b6001600160a01b031660009081526033602052604090205460ff1690565b604051901515815260200161006d565b600060026001540361011e5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b6002600155600061012e83610226565b6001600160a01b03811660009081526033602052604090205490915060ff161561018c5760405162461bcd60e51b815260206004820152600f60248201526e111554131250d0551157d0d2125311608a1b6044820152606401610115565b6001600160a01b038116600081815260336020908152604091829020805460ff191660011790558151338152908101929092527f7da70c4e5387d7038610b79ca7d304caaef815826e51e67cf247135387a79bce910160405180910390a16001805592915050565b60006102208260405160200161020c91815260200190565b6040516020818303038152906040526100c5565b92915050565b6000808280602001905181019061023d919061047b565b9050600061026a7f00000000000000000000000000000000000000000000000000000000000000006102cf565b60405163fe4b84df60e01b8152600481018490529091506001600160a01b0382169063fe4b84df90602401600060405180830381600087803b1580156102af57600080fd5b505af11580156102c3573d6000803e3d6000fd5b50929695505050505050565b6000604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528260601b60148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09150506001600160a01b0381166103675760405162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b6044820152606401610115565b919050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561039457600080fd5b81356001600160401b03808211156103ab57600080fd5b818401915084601f8301126103bf57600080fd5b8135818111156103d1576103d161036c565b604051601f8201601f19908116603f011681019083821181831017156103f9576103f961036c565b8160405282815287602084870101111561041257600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020828403121561044457600080fd5b5035919050565b60006020828403121561045d57600080fd5b81356001600160a01b038116811461047457600080fd5b9392505050565b60006020828403121561048d57600080fd5b505191905056fea2646970667358221220bc5619241bb2322844374b67ca3f88e7ff44634956346d16f3581889bb8bfe4664736f6c63430008110033608060405234801561001057600080fd5b506040513381527f9b1dd48b9d6c55ffc4373833c93cb181b33bfc68d1d5cd3e736e0eca3f0e1afc9060200160405180910390a16101db806100536000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063fe4b84df14610030575b600080fd5b61004361003e36600461018c565b610045565b005b600054610100900460ff16158080156100655750600054600160ff909116105b8061007f5750303b15801561007f575060005460ff166001145b6100e65760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6000805460ff191660011790558015610109576000805461ff0019166101001790555b60408051338152602081018490527ffb9d66c34fa43208534a846ef789547e25046760500fdf53af4204cbe4e16c89910160405180910390a18015610188576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b60006020828403121561019e57600080fd5b503591905056fea264697066735822122050feb5d022802c8a8c9fe586eb2f02bc89496882a198724ce24a85358b00ccf164736f6c63430008110033";

type FactoryTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FactoryTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FactoryTest__factory extends ContractFactory {
  constructor(...args: FactoryTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FactoryTest> {
    return super.deploy(overrides || {}) as Promise<FactoryTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FactoryTest {
    return super.attach(address) as FactoryTest;
  }
  connect(signer: Signer): FactoryTest__factory {
    return super.connect(signer) as FactoryTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FactoryTestInterface {
    return new utils.Interface(_abi) as FactoryTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FactoryTest {
    return new Contract(address, _abi, signerOrProvider) as FactoryTest;
  }
}

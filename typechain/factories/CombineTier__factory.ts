/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CombineTier, CombineTierInterface } from "../CombineTier";

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
        components: [
          {
            internalType: "address",
            name: "expressionDeployer",
            type: "address",
          },
          {
            internalType: "address",
            name: "interpreter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "combinedTiersLength",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "bytes[]",
                name: "sources",
                type: "bytes[]",
              },
              {
                internalType: "uint256[]",
                name: "constants",
                type: "uint256[]",
              },
            ],
            internalType: "struct StateConfig",
            name: "stateConfig",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct CombineTierConfig",
        name: "config",
        type: "tuple",
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
        components: [
          {
            internalType: "address",
            name: "expressionDeployer",
            type: "address",
          },
          {
            internalType: "address",
            name: "interpreter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "combinedTiersLength",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "bytes[]",
                name: "sources",
                type: "bytes[]",
              },
              {
                internalType: "uint256[]",
                name: "constants",
                type: "uint256[]",
              },
            ],
            internalType: "struct StateConfig",
            name: "stateConfig",
            type: "tuple",
          },
        ],
        internalType: "struct CombineTierConfig",
        name: "config_",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "context_",
        type: "uint256[]",
      },
    ],
    name: "report",
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
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tier_",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "context_",
        type: "uint256[]",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId_",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  "0x608060405234801561001057600080fd5b5061001961001e565b6100de565b600054610100900460ff161561008a5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff90811610156100dc576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6113de806100ed6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806301ffc9a71461005157806388d6860414610079578063caa0eb3b1461009a578063e264df5d146100ad575b600080fd5b61006461005f366004610b70565b6100c2565b60405190151581526020015b60405180910390f35b61008c610087366004610ce4565b61015b565b604051908152602001610070565b61008c6100a8366004610d34565b6102f7565b6100c06100bb366004610d8d565b61048e565b005b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f42766d3f00000000000000000000000000000000000000000000000000000000148061015557507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60408051600280825260608201909252600091829190816020015b60608152602001906001900390816101765790505090506101ac8473ffffffffffffffffffffffffffffffffffffffff1661087c565b816000815181106101bf576101bf610dc8565b602002602001018190525082816001815181106101de576101de610dc8565b60209081029190910181019190915260335460345460009273ffffffffffffffffffffffffffffffffffffffff909216916390e7d00b91901b77ffffffffffffffffffffffffffffffffffffffff0000000016600117846040518363ffffffff1660e01b8152600401610252929190610df7565b600060405180830381865afa15801561026f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526102b59190810190610f02565b5080519091506102ee9060209081028301015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015190565b95945050505050565b60408051600280825260608201909252600091829190816020015b60608152602001906001900390816103125790505090506103498573ffffffffffffffffffffffffffffffffffffffff16856108ae565b8160008151811061035c5761035c610dc8565b6020026020010181905250828160018151811061037b5761037b610dc8565b6020908102919091018101919091526033546034546040517f90e7d00b00000000000000000000000000000000000000000000000000000000815260009373ffffffffffffffffffffffffffffffffffffffff909316926390e7d00b9261040a9277ffffffffffffffffffffffffffffffffffffffff000000009190921b166201000117908690600401610df7565b600060405180830381865afa158015610427573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261046d9190810190610f02565b5080519091506104849060209081028301016102c8565b9695505050505050565b600054610100900460ff16158080156104ae5750600054600160ff909116105b806104c85750303b1580156104c8575060005460ff166001145b610559576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084015b60405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905580156105b757600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b6105bf6108e2565b6105cf6040830160208401610f5c565b603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905560006106236020840184610f5c565b73ffffffffffffffffffffffffffffffffffffffff16631ed061d961064b6060860186610f79565b6106566001806108ae565b6040518363ffffffff1660e01b81526004016106739291906111ba565b60408051808303816000875af1158015610691573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b59190611211565b50603480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316179055905060005b83604001358110156107da576107626107176060860186610f79565b61072590602081019061123f565b8381811061073557610735610dc8565b905060200201357f42766d3f00000000000000000000000000000000000000000000000000000000610983565b6107c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4552433136355f544945525632000000000000000000000000000000000000006044820152606401610550565b806107d2816112a7565b9150506106fb565b507fad7ea6ddb5e5e1fe4978dd3efc0dcd8185585afe500bff3f3f903108083646f0338460405161080c929190611306565b60405180910390a150801561087857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b604080516001808252818301909252606091600091906020808301908036833750505060208101939093525090919050565b6040805160028082526060808301845292600092919060208301908036833750505060208101949094525050604082015290565b600054610100900460ff16610979576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610550565b6109816109a6565b565b600061098e83610a3d565b801561099f575061099f8383610aa1565b9392505050565b600054610100900460ff16610981576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610550565b6000610a69827f01ffc9a700000000000000000000000000000000000000000000000000000000610aa1565b80156101555750610a9a827fffffffff00000000000000000000000000000000000000000000000000000000610aa1565b1592915050565b604080517fffffffff000000000000000000000000000000000000000000000000000000008316602480830191909152825180830390910181526044909101909152602080820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f01ffc9a700000000000000000000000000000000000000000000000000000000178152825160009392849283928392918391908a617530fa92503d91506000519050828015610b59575060208210155b8015610b655750600081115b979650505050505050565b600060208284031215610b8257600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461099f57600080fd5b73ffffffffffffffffffffffffffffffffffffffff81168114610bd457600080fd5b50565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610c4d57610c4d610bd7565b604052919050565b600067ffffffffffffffff821115610c6f57610c6f610bd7565b5060051b60200190565b600082601f830112610c8a57600080fd5b81356020610c9f610c9a83610c55565b610c06565b82815260059290921b84018101918181019086841115610cbe57600080fd5b8286015b84811015610cd95780358352918301918301610cc2565b509695505050505050565b60008060408385031215610cf757600080fd5b8235610d0281610bb2565b9150602083013567ffffffffffffffff811115610d1e57600080fd5b610d2a85828601610c79565b9150509250929050565b600080600060608486031215610d4957600080fd5b8335610d5481610bb2565b925060208401359150604084013567ffffffffffffffff811115610d7757600080fd5b610d8386828701610c79565b9150509250925092565b600060208284031215610d9f57600080fd5b813567ffffffffffffffff811115610db657600080fd5b82016080818503121561099f57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060408201848352602060408185015281855180845260608601915060608160051b87010193508287016000805b83811015610e98578887037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0018552825180518089529087019087890190845b81811015610e8257835183529289019291890191600101610e66565b5090985050509385019391850191600101610e26565b50949998505050505050505050565b600082601f830112610eb857600080fd5b81516020610ec8610c9a83610c55565b82815260059290921b84018101918181019086841115610ee757600080fd5b8286015b84811015610cd95780518352918301918301610eeb565b60008060408385031215610f1557600080fd5b825167ffffffffffffffff80821115610f2d57600080fd5b610f3986838701610ea7565b93506020850151915080821115610f4f57600080fd5b50610d2a85828601610ea7565b600060208284031215610f6e57600080fd5b813561099f81610bb2565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1833603018112610fad57600080fd5b9190910192915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610fec57600080fd5b830160208101925035905067ffffffffffffffff81111561100c57600080fd5b8060051b360382131561101e57600080fd5b9250929050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8311156110a057600080fd5b8260051b80836020870137939093016020019392505050565b6000604083016110c98384610fb7565b604086528281845260608701905060608260051b88010193508260005b83811015611195577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa089870301835281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe186360301811261114757600080fd5b8501602081810191359067ffffffffffffffff82111561116657600080fd5b81360383131561117557600080fd5b611180898385611025565b985094850194939093019250506001016110e6565b50505050506111a76020840184610fb7565b858303602087015261048483828461106e565b6040815260006111cd60408301856110b9565b82810360208481019190915284518083528582019282019060005b81811015611204578451835293830193918301916001016111e8565b5090979650505050505050565b6000806040838503121561122457600080fd5b825161122f81610bb2565b6020939093015192949293505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261127457600080fd5b83018035915067ffffffffffffffff82111561128f57600080fd5b6020019150600581901b360382131561101e57600080fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036112ff577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600073ffffffffffffffffffffffffffffffffffffffff808516835260406020840152833561133481610bb2565b81166040840152602084013561134981610bb2565b818116606085015250506040830135608083015260608301357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc184360301811261139257600080fd5b608060a08401526102ee60c084018583016110b956fea2646970667358221220753239052e29b04f3cfb9fe9191228446d8c6c148029873e7af0f34b75d3db8b64736f6c63430008110033";

type CombineTierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CombineTierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CombineTier__factory extends ContractFactory {
  constructor(...args: CombineTierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CombineTier> {
    return super.deploy(overrides || {}) as Promise<CombineTier>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CombineTier {
    return super.attach(address) as CombineTier;
  }
  connect(signer: Signer): CombineTier__factory {
    return super.connect(signer) as CombineTier__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CombineTierInterface {
    return new utils.Interface(_abi) as CombineTierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CombineTier {
    return new Contract(address, _abi, signerOrProvider) as CombineTier;
  }
}

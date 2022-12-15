/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC721Upgradeable,
  ERC721UpgradeableInterface,
} from "../../../../../@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
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
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506117ae806100206000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101d0578063b88d4fde146101e3578063c87b56dd146101f6578063e985e9c51461020957600080fd5b80636352211e1461019457806370a08231146101a757806395d89b41146101c857600080fd5b8063095ea7b3116100bd578063095ea7b31461015957806323b872dd1461016e57806342842e0e1461018157600080fd5b806301ffc9a7146100e457806306fdde031461010c578063081812fc14610121575b600080fd5b6100f76100f2366004611284565b610252565b60405190151581526020015b60405180910390f35b610114610337565b604051610103919061130f565b61013461012f366004611322565b6103c9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610103565b61016c610167366004611364565b6103fd565b005b61016c61017c36600461138e565b6105b9565b61016c61018f36600461138e565b61065a565b6101346101a2366004611322565b610675565b6101ba6101b53660046113ca565b610701565b604051908152602001610103565b6101146107cf565b61016c6101de3660046113e5565b6107de565b61016c6101f1366004611450565b6107ed565b610114610204366004611322565b610895565b6100f761021736600461154a565b73ffffffffffffffffffffffffffffffffffffffff9182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806102e557507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061033157507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6060606580546103469061157d565b80601f01602080910402602001604051908101604052809291908181526020018280546103729061157d565b80156103bf5780601f10610394576101008083540402835291602001916103bf565b820191906000526020600020905b8154815290600101906020018083116103a257829003601f168201915b5050505050905090565b60006103d482610909565b5060009081526069602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600061040882610675565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036104ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216148061051e575073ffffffffffffffffffffffffffffffffffffffff81166000908152606a6020908152604080832033845290915290205460ff165b6105aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c000060648201526084016104c1565b6105b48383610997565b505050565b6105c33382610a37565b61064f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f76656400000000000000000000000000000000000060648201526084016104c1565b6105b4838383610af7565b6105b4838383604051806020016040528060008152506107ed565b60008181526067602052604081205473ffffffffffffffffffffffffffffffffffffffff1680610331576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016104c1565b600073ffffffffffffffffffffffffffffffffffffffff82166107a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e6572000000000000000000000000000000000000000000000060648201526084016104c1565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526068602052604090205490565b6060606680546103469061157d565b6107e9338383610d5e565b5050565b6107f73383610a37565b610883576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f76656400000000000000000000000000000000000060648201526084016104c1565b61088f84848484610e8b565b50505050565b60606108a082610909565b60006108b760408051602081019091526000815290565b905060008151116108d75760405180602001604052806000815250610902565b806108e184610f2e565b6040516020016108f29291906115d0565b6040516020818303038152906040525b9392505050565b60008181526067602052604090205473ffffffffffffffffffffffffffffffffffffffff16610994576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016104c1565b50565b600081815260696020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841690811790915581906109f182610675565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610a4383610675565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610ab1575073ffffffffffffffffffffffffffffffffffffffff8082166000908152606a602090815260408083209388168352929052205460ff165b80610aef57508373ffffffffffffffffffffffffffffffffffffffff16610ad7846103c9565b73ffffffffffffffffffffffffffffffffffffffff16145b949350505050565b8273ffffffffffffffffffffffffffffffffffffffff16610b1782610675565b73ffffffffffffffffffffffffffffffffffffffff1614610bba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016104c1565b73ffffffffffffffffffffffffffffffffffffffff8216610c5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016104c1565b610c67600082610997565b73ffffffffffffffffffffffffffffffffffffffff83166000908152606860205260408120805460019290610c9d90849061162e565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152606860205260408120805460019290610cd8908490611641565b909155505060008181526067602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610df3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104c1565b73ffffffffffffffffffffffffffffffffffffffff8381166000818152606a602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610e96848484610af7565b610ea284848484611063565b61088f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016104c1565b606081600003610f7157505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115610f9b5780610f8581611654565b9150610f949050600a836116bb565b9150610f75565b60008167ffffffffffffffff811115610fb657610fb6611421565b6040519080825280601f01601f191660200182016040528015610fe0576020820181803683370190505b5090505b8415610aef57610ff560018361162e565b9150611002600a866116cf565b61100d906030611641565b60f81b818381518110611022576110226116e3565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535061105c600a866116bb565b9450610fe4565b600073ffffffffffffffffffffffffffffffffffffffff84163b1561124b576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a02906110da903390899088908890600401611712565b6020604051808303816000875af1925050508015611133575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526111309181019061175b565b60015b611200573d808015611161576040519150601f19603f3d011682016040523d82523d6000602084013e611166565b606091505b5080516000036111f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016104c1565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610aef565b506001949350505050565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461099457600080fd5b60006020828403121561129657600080fd5b813561090281611256565b60005b838110156112bc5781810151838201526020016112a4565b50506000910152565b600081518084526112dd8160208601602086016112a1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061090260208301846112c5565b60006020828403121561133457600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461135f57600080fd5b919050565b6000806040838503121561137757600080fd5b6113808361133b565b946020939093013593505050565b6000806000606084860312156113a357600080fd5b6113ac8461133b565b92506113ba6020850161133b565b9150604084013590509250925092565b6000602082840312156113dc57600080fd5b6109028261133b565b600080604083850312156113f857600080fd5b6114018361133b565b91506020830135801515811461141657600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806000806080858703121561146657600080fd5b61146f8561133b565b935061147d6020860161133b565b925060408501359150606085013567ffffffffffffffff808211156114a157600080fd5b818701915087601f8301126114b557600080fd5b8135818111156114c7576114c7611421565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561150d5761150d611421565b816040528281528a602084870101111561152657600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561155d57600080fd5b6115668361133b565b91506115746020840161133b565b90509250929050565b600181811c9082168061159157607f821691505b6020821081036115ca577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600083516115e28184602088016112a1565b8351908301906115f68183602088016112a1565b01949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610331576103316115ff565b80820180821115610331576103316115ff565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611685576116856115ff565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826116ca576116ca61168c565b500490565b6000826116de576116de61168c565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600073ffffffffffffffffffffffffffffffffffffffff80871683528086166020840152508360408301526080606083015261175160808301846112c5565b9695505050505050565b60006020828403121561176d57600080fd5b81516109028161125656fea2646970667358221220c1ac3cce73cea389bfabce71d9e1795865f7fc265ced1fa6fef7764575e2ae3e64736f6c63430008110033";

type ERC721UpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721UpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Upgradeable__factory extends ContractFactory {
  constructor(...args: ERC721UpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC721Upgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721Upgradeable {
    return super.attach(address) as ERC721Upgradeable;
  }
  override connect(signer: Signer): ERC721Upgradeable__factory {
    return super.connect(signer) as ERC721Upgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721UpgradeableInterface {
    return new utils.Interface(_abi) as ERC721UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC721Upgradeable;
  }
}

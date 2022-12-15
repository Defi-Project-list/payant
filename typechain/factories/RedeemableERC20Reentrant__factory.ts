/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RedeemableERC20Reentrant,
  RedeemableERC20ReentrantInterface,
} from "../RedeemableERC20Reentrant";

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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DECIMALS",
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
    name: "TOTAL_SUPPLY",
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
    ],
    name: "addFreezable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract RedeemableERC20",
        name: "redeemableERC20_",
        type: "address",
      },
    ],
    name: "addReentrantTarget",
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
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "freezables",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611916806100206000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c806348ea30da116100cd578063902d55a511610081578063a457c2d711610066578063a457c2d714610331578063a9059cbb14610344578063dd62ed3e1461035757600080fd5b8063902d55a51461032157806395d89b411461032957600080fd5b806370a08231116100b257806370a08231146102d057806379cc6790146103065780638129fc1c1461031957600080fd5b806348ea30da1461021e5780635bb9058b1461027357600080fd5b80632e0f262511610124578063395093511161010957806339509351146101d357806342966c68146101e657806348422faa146101fb57600080fd5b80632e0f2625146101bc578063313ce567146101c457600080fd5b806306fdde0314610156578063095ea7b31461017457806318160ddd1461019757806323b872dd146101a9575b600080fd5b61015e61039d565b60405161016b9190611377565b60405180910390f35b610187610182366004611405565b61042f565b604051901515815260200161016b565b6035545b60405190815260200161016b565b6101876101b7366004611431565b610449565b61019b600681565b6040516006815260200161016b565b6101876101e1366004611405565b61046d565b6101f96101f4366004611472565b6104b9565b005b61018761020936600461148b565b60976020526000908152604090205460ff1681565b6101f961022c36600461148b565b609880547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6101f961028136600461148b565b73ffffffffffffffffffffffffffffffffffffffff16600090815260976020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b61019b6102de36600461148b565b73ffffffffffffffffffffffffffffffffffffffff1660009081526033602052604090205490565b6101f9610314366004611405565b6104c6565b6101f96104df565b61019b610701565b61015e61071b565b61018761033f366004611405565b61072a565b610187610352366004611405565b6107fb565b61019b6103653660046114af565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260346020908152604080832093909416825291909152205490565b6060603680546103ac906114e8565b80601f01602080910402602001604051908101604052809291908181526020018280546103d8906114e8565b80156104255780601f106103fa57610100808354040283529160200191610425565b820191906000526020600020905b81548152906001019060200180831161040857829003601f168201915b5050505050905090565b60003361043d818585610809565b60019150505b92915050565b6000336104578582856109bd565b610462858585610a94565b506001949350505050565b33600081815260346020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919061043d90829086906104b490879061156a565b610809565b6104c33382610d52565b50565b6104d18233836109bd565b6104db8282610d52565b5050565b600054610100900460ff16158080156104ff5750600054600160ff909116105b806105195750303b158015610519575060005460ff166001145b6105aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084015b60405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055801561060857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b61067c6040518060400160405280600b81526020017f55534420436c61737369630000000000000000000000000000000000000000008152506040518060400160405280600581526020017f5553444343000000000000000000000000000000000000000000000000000000815250610f48565b61069c3361068c6006600961156a565b61069790600a61169d565b610fe9565b80156104c357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b61070d6006600961156a565b61071890600a61169d565b81565b6060603780546103ac906114e8565b33600081815260346020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156107ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016105a1565b6104628286868403610809565b60003361043d818585610a94565b73ffffffffffffffffffffffffffffffffffffffff83166108ab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016105a1565b73ffffffffffffffffffffffffffffffffffffffff821661094e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016105a1565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152603460209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610a8e5781811015610a81576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016105a1565b610a8e8484848403610809565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b37576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016105a1565b73ffffffffffffffffffffffffffffffffffffffff8216610bda576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016105a1565b610be5838383611115565b73ffffffffffffffffffffffffffffffffffffffff831660009081526033602052604090205481811015610c9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016105a1565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260336020526040808220858503905591851681529081208054849290610cdf90849061156a565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d4591815260200190565b60405180910390a3610a8e565b73ffffffffffffffffffffffffffffffffffffffff8216610df5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016105a1565b610e0182600083611115565b73ffffffffffffffffffffffffffffffffffffffff821660009081526033602052604090205481811015610eb7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016105a1565b73ffffffffffffffffffffffffffffffffffffffff83166000908152603360205260408120838303905560358054849290610ef39084906116a9565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016109b0565b505050565b600054610100900460ff16610fdf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016105a1565b6104db8282611237565b73ffffffffffffffffffffffffffffffffffffffff8216611066576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016105a1565b61107260008383611115565b8060356000828254611084919061156a565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600090815260336020526040812080548392906110be90849061156a565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6111208383836112e7565b73ffffffffffffffffffffffffffffffffffffffff83161580159061115f575060985473ffffffffffffffffffffffffffffffffffffffff8481169116145b15610f435760408051600180825281830190925260009160208083019080368337019050509050308160008151811061119a5761119a6116eb565b73ffffffffffffffffffffffffffffffffffffffff92831660209182029290920101526098546040517ff677de9600000000000000000000000000000000000000000000000000000000815291169063f677de96906111ff908490869060040161171a565b600060405180830381600087803b15801561121957600080fd5b505af115801561122d573d6000803e3d6000fd5b5050505050505050565b600054610100900460ff166112ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016105a1565b60366112da83826117c6565b506037610f4382826117c6565b73ffffffffffffffffffffffffffffffffffffffff821660009081526097602052604090205460ff1615610f43576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f46524f5a454e000000000000000000000000000000000000000000000000000060448201526064016105a1565b600060208083528351808285015260005b818110156113a457858101830151858201604001528201611388565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b73ffffffffffffffffffffffffffffffffffffffff811681146104c357600080fd5b6000806040838503121561141857600080fd5b8235611423816113e3565b946020939093013593505050565b60008060006060848603121561144657600080fd5b8335611451816113e3565b92506020840135611461816113e3565b929592945050506040919091013590565b60006020828403121561148457600080fd5b5035919050565b60006020828403121561149d57600080fd5b81356114a8816113e3565b9392505050565b600080604083850312156114c257600080fd5b82356114cd816113e3565b915060208301356114dd816113e3565b809150509250929050565b600181811c908216806114fc57607f821691505b602082108103611535577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156104435761044361153b565b600181815b808511156115d657817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156115bc576115bc61153b565b808516156115c957918102915b93841c9390800290611582565b509250929050565b6000826115ed57506001610443565b816115fa57506000610443565b8160018114611610576002811461161a57611636565b6001915050610443565b60ff84111561162b5761162b61153b565b50506001821b610443565b5060208310610133831016604e8410600b8410161715611659575081810a610443565b611663838361157d565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156116955761169561153b565b029392505050565b60006114a883836115de565b818103818111156104435761044361153b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b604080825283519082018190526000906020906060840190828701845b8281101561176957815173ffffffffffffffffffffffffffffffffffffffff1684529284019290840190600101611737565b50505092019290925292915050565b601f821115610f4357600081815260208120601f850160051c8101602086101561179f5750805b601f850160051c820191505b818110156117be578281556001016117ab565b505050505050565b815167ffffffffffffffff8111156117e0576117e06116bc565b6117f4816117ee84546114e8565b84611778565b602080601f83116001811461184757600084156118115750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556117be565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b8281101561189457888601518255948401946001909101908401611875565b50858210156118d057878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b0190555056fea26469706673582212206a032289cbbc48f72e82744ef343d1b2da6e6d4e6042721d419553d5f9b0c06464736f6c63430008110033";

type RedeemableERC20ReentrantConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RedeemableERC20ReentrantConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RedeemableERC20Reentrant__factory extends ContractFactory {
  constructor(...args: RedeemableERC20ReentrantConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RedeemableERC20Reentrant> {
    return super.deploy(overrides || {}) as Promise<RedeemableERC20Reentrant>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RedeemableERC20Reentrant {
    return super.attach(address) as RedeemableERC20Reentrant;
  }
  connect(signer: Signer): RedeemableERC20Reentrant__factory {
    return super.connect(signer) as RedeemableERC20Reentrant__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RedeemableERC20ReentrantInterface {
    return new utils.Interface(_abi) as RedeemableERC20ReentrantInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RedeemableERC20Reentrant {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RedeemableERC20Reentrant;
  }
}
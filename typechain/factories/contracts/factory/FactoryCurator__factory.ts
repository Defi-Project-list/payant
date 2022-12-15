/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FactoryCurator,
  FactoryCuratorInterface,
} from "../../../contracts/factory/FactoryCurator";

const _abi = [
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
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "factory",
            type: "address",
          },
          {
            internalType: "address",
            name: "curator",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct CurationFeeConfig",
            name: "feeConfig",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tierContract",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "minimumTier",
                type: "uint256",
              },
              {
                internalType: "uint256[]",
                name: "context",
                type: "uint256[]",
              },
            ],
            internalType: "struct CurationTierConfig",
            name: "tierConfig",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct CurationConfig",
        name: "config",
        type: "tuple",
      },
    ],
    name: "RegisterCuration",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "factory",
            type: "address",
          },
          {
            internalType: "address",
            name: "curator",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct CurationFeeConfig",
            name: "feeConfig",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tierContract",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "minimumTier",
                type: "uint256",
              },
              {
                internalType: "uint256[]",
                name: "context",
                type: "uint256[]",
              },
            ],
            internalType: "struct CurationTierConfig",
            name: "tierConfig",
            type: "tuple",
          },
        ],
        internalType: "struct CurationConfig",
        name: "config_",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "createChild_",
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
        components: [
          {
            internalType: "address",
            name: "factory",
            type: "address",
          },
          {
            internalType: "address",
            name: "curator",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct CurationFeeConfig",
            name: "feeConfig",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tierContract",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "minimumTier",
                type: "uint256",
              },
              {
                internalType: "uint256[]",
                name: "context",
                type: "uint256[]",
              },
            ],
            internalType: "struct CurationTierConfig",
            name: "tierConfig",
            type: "tuple",
          },
        ],
        internalType: "struct CurationConfig",
        name: "config_",
        type: "tuple",
      },
    ],
    name: "registerConfig",
    outputs: [
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610cf6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806315109c6c1461003b578063aec2e5c214610078575b600080fd5b61004e6100493660046107c4565b610099565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61008b61008636600461085f565b610360565b60405190815260200161006f565b6000836040516020016100ac9190610a42565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181528151602092830120600088815260019093529120541461015b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e4f545f494e5f5245474953545259000000000000000000000000000000000060448201526064015b60405180910390fd5b426101696080860186610a55565b610177906020810190610a93565b73ffffffffffffffffffffffffffffffffffffffff1663caa0eb3b336101a06080890189610a55565b602001356101b160808a018a610a55565b6101bf906040810190610ab0565b6040518563ffffffff1660e01b81526004016101de9493929190610b1f565b602060405180830381865afa1580156101fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021f9190610b5f565b1115610287576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4d494e494d554d5f5449455200000000000000000000000000000000000000006044820152606401610152565b6102cd3361029b6040870160208801610a93565b606087018035906102af9060408a01610a93565b73ffffffffffffffffffffffffffffffffffffffff169291906103fe565b6102da6020850185610a93565b73ffffffffffffffffffffffffffffffffffffffff16632ea72a4984846040518363ffffffff1660e01b8152600401610314929190610b78565b6020604051808303816000875af1158015610333573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103579190610bc5565b95945050505050565b600080546001019081905560405161037c908390602001610a42565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152828252805160209182012060008581526001909252919020557fb6ebb13e9e90787058e30a41317554cb7d3c6e7ab9d2c14b07692398b208a797906103f190339084908690610be2565b60405180910390a1919050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000179052610493908590610499565b50505050565b60006104fb826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166105aa9092919063ffffffff16565b8051909150156105a557808060200190518101906105199190610c17565b6105a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610152565b505050565b60606105b984846000856105c3565b90505b9392505050565b606082471015610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610152565b73ffffffffffffffffffffffffffffffffffffffff85163b6106d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610152565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516106fc9190610c5d565b60006040518083038185875af1925050503d8060008114610739576040519150601f19603f3d011682016040523d82523d6000602084013e61073e565b606091505b509150915061074e828286610759565b979650505050505050565b606083156107685750816105bc565b8251156107785782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101529190610c6f565b600060a082840312156107be57600080fd5b50919050565b600080600080606085870312156107da57600080fd5b84359350602085013567ffffffffffffffff808211156107f957600080fd5b610805888389016107ac565b9450604087013591508082111561081b57600080fd5b818701915087601f83011261082f57600080fd5b81358181111561083e57600080fd5b88602082850101111561085057600080fd5b95989497505060200194505050565b60006020828403121561087157600080fd5b813567ffffffffffffffff81111561088857600080fd5b610894848285016107ac565b949350505050565b73ffffffffffffffffffffffffffffffffffffffff811681146108be57600080fd5b50565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8311156108f357600080fd5b8260051b80836020870137939093016020019392505050565b600081356109198161089c565b73ffffffffffffffffffffffffffffffffffffffff90811684526020830135906109428261089c565b90811660208501526040830135906109598261089c565b808216604086015260608401356060860152608084013591507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa18436030182126109a257600080fd5b60a060808601529083019081356109b88161089c565b1660a0850152602081013560c08501526040810135368290037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe10181126109fe57600080fd5b0160208101903567ffffffffffffffff811115610a1a57600080fd5b8060051b3603821315610a2c57600080fd5b606060e0860152610357610100860182846108c1565b6020815260006105bc602083018461090c565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa1833603018112610a8957600080fd5b9190910192915050565b600060208284031215610aa557600080fd5b81356105bc8161089c565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610ae557600080fd5b83018035915067ffffffffffffffff821115610b0057600080fd5b6020019150600581901b3603821315610b1857600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff85168152836020820152606060408201526000610b556060830184866108c1565b9695505050505050565b600060208284031215610b7157600080fd5b5051919050565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b600060208284031215610bd757600080fd5b81516105bc8161089c565b73ffffffffffffffffffffffffffffffffffffffff84168152826020820152606060408201526000610357606083018461090c565b600060208284031215610c2957600080fd5b815180151581146105bc57600080fd5b60005b83811015610c54578181015183820152602001610c3c565b50506000910152565b60008251610a89818460208701610c39565b6020815260008251806020840152610c8e816040850160208701610c39565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea264697066735822122081be2cfb804cb4f47e40aa18db471220765ef79a2e7b12b7a6fc057b540f688664736f6c63430008110033";

type FactoryCuratorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FactoryCuratorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FactoryCurator__factory extends ContractFactory {
  constructor(...args: FactoryCuratorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FactoryCurator> {
    return super.deploy(overrides || {}) as Promise<FactoryCurator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FactoryCurator {
    return super.attach(address) as FactoryCurator;
  }
  override connect(signer: Signer): FactoryCurator__factory {
    return super.connect(signer) as FactoryCurator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FactoryCuratorInterface {
    return new utils.Interface(_abi) as FactoryCuratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FactoryCurator {
    return new Contract(address, _abi, signerOrProvider) as FactoryCurator;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOrderBookV1,
  IOrderBookV1Interface,
} from "../../../contracts/orderbook/IOrderBookV1";

const _abi = [
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
            name: "interpreterStateConfig",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "vaultId",
                type: "uint256",
              },
            ],
            internalType: "struct IO[]",
            name: "validInputs",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "vaultId",
                type: "uint256",
              },
            ],
            internalType: "struct IO[]",
            name: "validOutputs",
            type: "tuple[]",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct OrderConfig",
        name: "config",
        type: "tuple",
      },
    ],
    name: "addOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "interpreter",
            type: "address",
          },
          {
            internalType: "EncodedDispatch",
            name: "dispatch",
            type: "uint256",
          },
          {
            internalType: "EncodedDispatch",
            name: "handleIODispatch",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "vaultId",
                type: "uint256",
              },
            ],
            internalType: "struct IO[]",
            name: "validInputs",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "vaultId",
                type: "uint256",
              },
            ],
            internalType: "struct IO[]",
            name: "validOutputs",
            type: "tuple[]",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Order",
        name: "a",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "interpreter",
            type: "address",
          },
          {
            internalType: "EncodedDispatch",
            name: "dispatch",
            type: "uint256",
          },
          {
            internalType: "EncodedDispatch",
            name: "handleIODispatch",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "vaultId",
                type: "uint256",
              },
            ],
            internalType: "struct IO[]",
            name: "validInputs",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "vaultId",
                type: "uint256",
              },
            ],
            internalType: "struct IO[]",
            name: "validOutputs",
            type: "tuple[]",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Order",
        name: "b",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "aInputIOIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "aOutputIOIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "bInputIOIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "bOutputIOIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "aBountyVaultId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "bBountyVaultId",
            type: "uint256",
          },
        ],
        internalType: "struct ClearConfig",
        name: "clearConfig",
        type: "tuple",
      },
    ],
    name: "clear",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "vaultId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct DepositConfig",
        name: "config",
        type: "tuple",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "interpreter",
            type: "address",
          },
          {
            internalType: "EncodedDispatch",
            name: "dispatch",
            type: "uint256",
          },
          {
            internalType: "EncodedDispatch",
            name: "handleIODispatch",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "vaultId",
                type: "uint256",
              },
            ],
            internalType: "struct IO[]",
            name: "validInputs",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "vaultId",
                type: "uint256",
              },
            ],
            internalType: "struct IO[]",
            name: "validOutputs",
            type: "tuple[]",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "removeOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "output",
            type: "address",
          },
          {
            internalType: "address",
            name: "input",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minimumInput",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maximumInput",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maximumIORatio",
            type: "uint256",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "owner",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "interpreter",
                    type: "address",
                  },
                  {
                    internalType: "EncodedDispatch",
                    name: "dispatch",
                    type: "uint256",
                  },
                  {
                    internalType: "EncodedDispatch",
                    name: "handleIODispatch",
                    type: "uint256",
                  },
                  {
                    components: [
                      {
                        internalType: "address",
                        name: "token",
                        type: "address",
                      },
                      {
                        internalType: "uint8",
                        name: "decimals",
                        type: "uint8",
                      },
                      {
                        internalType: "uint256",
                        name: "vaultId",
                        type: "uint256",
                      },
                    ],
                    internalType: "struct IO[]",
                    name: "validInputs",
                    type: "tuple[]",
                  },
                  {
                    components: [
                      {
                        internalType: "address",
                        name: "token",
                        type: "address",
                      },
                      {
                        internalType: "uint8",
                        name: "decimals",
                        type: "uint8",
                      },
                      {
                        internalType: "uint256",
                        name: "vaultId",
                        type: "uint256",
                      },
                    ],
                    internalType: "struct IO[]",
                    name: "validOutputs",
                    type: "tuple[]",
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                  },
                ],
                internalType: "struct Order",
                name: "order",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "inputIOIndex",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "outputIOIndex",
                type: "uint256",
              },
            ],
            internalType: "struct TakeOrderConfig[]",
            name: "orders",
            type: "tuple[]",
          },
        ],
        internalType: "struct TakeOrdersConfig",
        name: "takeOrders",
        type: "tuple",
      },
    ],
    name: "takeOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "totalInput",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalOutput",
        type: "uint256",
      },
    ],
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
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "vaultBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "vaultId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct WithdrawConfig",
        name: "config",
        type: "tuple",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IOrderBookV1__factory {
  static readonly abi = _abi;
  static createInterface(): IOrderBookV1Interface {
    return new utils.Interface(_abi) as IOrderBookV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOrderBookV1 {
    return new Contract(address, _abi, signerOrProvider) as IOrderBookV1;
  }
}
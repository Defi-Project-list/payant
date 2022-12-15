/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IExpressionDeployerV1,
  IExpressionDeployerV1Interface,
} from "../../../../contracts/interpreter/deploy/IExpressionDeployerV1";

const _abi = [
  {
    inputs: [
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
        name: "config",
        type: "tuple",
      },
      {
        internalType: "uint256[]",
        name: "minOutputs",
        type: "uint256[]",
      },
    ],
    name: "deployExpression",
    outputs: [
      {
        internalType: "address",
        name: "expressionAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "contextReads",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IExpressionDeployerV1__factory {
  static readonly abi = _abi;
  static createInterface(): IExpressionDeployerV1Interface {
    return new utils.Interface(_abi) as IExpressionDeployerV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IExpressionDeployerV1 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IExpressionDeployerV1;
  }
}
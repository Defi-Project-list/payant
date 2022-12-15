/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  StackHeightTest,
  StackHeightTestInterface,
} from "../../../../../../contracts/test/interpreter/runtime/StandardInterpreter/StackHeightTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "interpreterIntegrity_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WriteError",
    type: "error",
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
        name: "id",
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
        indexed: false,
        internalType: "struct StateConfig",
        name: "config",
        type: "tuple",
      },
    ],
    name: "SaveInterpreterState",
    type: "event",
  },
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
        name: "stateConfig_",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200396f3803806200396f83398101604081905262000034916200004a565b306080526001600160a01b031660a0526200007c565b6000602082840312156200005d57600080fd5b81516001600160a01b03811681146200007557600080fd5b9392505050565b60805160a0516138d16200009e6000396000609e0152600050506138d16000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80634e75d77e14610030575b600080fd5b61004361003e366004612db1565b610045565b005b610062600061005383612f22565b61005d6002610065565b610097565b50565b604080516001808252818301909252606091600091906020808301908036833750505060208101939093525090919050565b60006100c47f00000000000000000000000000000000000000000000000000000000000000008484610161565b90507ff03e0b6388e3e42230b302b8cf0dd48092a1240c0df9b50a01da9f4f6863fec93385856040516100f99392919061311b565b60405180910390a161010a81610233565b60009485526020859052604090942080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90951694909417909355505050565b81516020830151516040517fb697f55b00000000000000000000000000000000000000000000000000000000815260609260009273ffffffffffffffffffffffffffffffffffffffff88169263b697f55b926101c392909188906004016131f9565b6040805180830381865afa1580156101df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102039190613293565b9150506102288161022061021b6102186102be565b90565b6102ce565b86919061035e565b9150505b9392505050565b60008061025e8360405160200161024a91906132b7565b604051602081830303815290604052610482565b90508051602082016000f0915073ffffffffffffffffffffffffffffffffffffffff82166102b8576040517f08d4abb600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50919050565b60606102c9816104ae565b905090565b60606000825160020267ffffffffffffffff8111156102ef576102ef612dec565b6040519080825280601f01601f191660200182016040528015610319576020820181803683370190505b50905061ffff801990506020840160208551028101600284015b818310156103535780518351908516178152602090920191600201610333565b509295945050505050565b602083810151516060910260400160005b8551518110156103ad576103a186600001518281518110610392576103926132dd565b60200260200101515160200190565b9091019060010161036f565b5060008167ffffffffffffffff8111156103c9576103c9612dec565b6040519080825280601f01601f1916602001820160405280156103f3576020820181803683370190505b5090506000610403825b60200190565b905061040f818761070a565b905061042887602001518261071b90919063ffffffff16565b9050606060005b88515181101561047557885180518290811061044d5761044d6132dd565b60200260200101519150610461828861073b565b61046b838361079a565b925060010161042f565b5091979650505050505050565b606081518260405160200161049892919061330c565b6040516020818303038152906040529050919050565b60606000604051806107a001604052806104c6603c90565b67ffffffffffffffff1681526107ba60208201526107c8604082015261081e606082015261087060808201526108f860a082015261091a60c08201526109b360e0820152610a8b610100820152610ac0610120820152610ade610140820152610b66610160820152610b756101808201819052610b836101a0830152610b916101c0830152610b9f6101e0830152610200820152610bad610220820152610bbb610240820152610bc9610260820152610bd8610280820152610be76102a0820152610bf36102c0820152610bff6102e0820152610c0b610300820152610c17610320820152610c9a610340820152610ca9610360820152610cb8610380820152610cc76103a0820152610cd66103c0820152610ce56103e0820152610d30610400820152610d42610420820152610d50610440820152610d87610460820152610d95610480820152610da36104a0820152610db16104c0820152610dc06104e0820152610dcf610500820152610dde610520820152610ded610540820152610dfc610560820152610e0b610580820152610e1a6105a0820152610e296105c0820152610e386105e0820152610e47610600820152610e56610620820152610e64610640820152610e72610660820152610e80610680820152610e8e6106a0820152610e9c6106c0820152610eaa6106e0820152610eb8610700820152610ec7610720820152610ed6610740820152610ee4610760820152610f5861078090910152905060006106f482610f67565b90506107008185610fde565b805b949350505050565b808252602090910190815b92915050565b600061022c8261073584518661070a90919063ffffffff16565b90611014565b815161ffff907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000090840160028481019086015b82811015610791578051858116600202830151861690851617815260040161076e565b50505050505050565b600061022c826107b484518661070a90919063ffffffff16565b9061102c565b60006107028261104e61105a565b8251600090600f84811691600486901c90911690600886901c90602084028603885260006107f78984896110c6565b905061080a6020850282038a518661110f565b508751975250602002909401949350505050565b60006107028460800151600885901c8151811061083d5761083d6132dd565b602002602001015160ff851681518110610859576108596132dd565b60200260200101518361070a90919063ffffffff16565b60008060006108a1847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00180519091565b915091506108ee866080015186815181106108be576108be6132dd565b602002602001015182815181106108d7576108d76132dd565b60200260200101518361113790919063ffffffff16565b5091949350505050565b60008083600381111561090d5761090d6133a3565b90506108ee85848361113b565b600060ff831660018101600481901b851783610958867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00180519091565b90965090505b80156109a75761096f8883886107c8565b955061099d867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00180519091565b909650905061095e565b50939695505050505050565b6000600f83811690600485901c811690600886901c16600c86901c808201855b896080015185815181106109e9576109e96132dd565b602002602001015151811015610a7d5760005b84811015610a5957610a4f8b6080015182880181518110610a1f57610a1f6132dd565b60200260200101518381518110610a3857610a386132dd565b60200260200101518a61070a90919063ffffffff16565b98506001016109fc565b50600886901b600484901b178217610a728b828b6107c8565b9850506001016109d3565b509598975050505050505050565b6000600c83901c610fff8416825b8281101561035357610aac8783876107c8565b945080610ab881613401565b915050610a99565b60018281166020908102949094015192901c83029091015181520190565b6000806000610b0f847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00180519091565b9094509050610b40847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00180519091565b60408801519195509250610b5590838361126f565b604087015250829150509392505050565b6000610702826112c885611317565b60006107028261136461105a565b6000610702826113f961146a565b6000610702826114a9611545565b6000610702826115d761105a565b60006107028261162d61105a565b6000610702826116dc611545565b600061070282611739856117f3565b6000610702826118d2856118dc565b6000610702824361070a565b6000610702823361070a565b6000610702823061070a565b6000610702824261070a565b6000806000610c48847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00180519091565b909250905063ffffffff610c8f83828416602085901c8416604086901c8516606087901c8616608088901c871660a089901c881660c08a901c891660e08b901c6119128b16565b979650505050505050565b60006107028261194885611954565b60006107028261198a856119a0565b600061070282611a02856119a0565b600061070282611a1885611954565b600061070282611a2485611954565b6000602083028203805b83811015610d26576000610d01825190565b90508015610d1d57610d13838261070a565b935050505061022c565b50602001610cef565b5060208101610228565b600061070282611a30600186016117f3565b600061070282611a4061105a565b6000602083028203805b83811015610d26578051600003610d7f57610d7682600061070a565b9250505061022c565b602001610d5a565b600061070282611a4a61105a565b600061070282611a5461146a565b600061070282611a5d61105a565b600061070282611a6785611aa2565b600061070282611ae685611aa2565b600061070282611b1785611aa2565b600061070282611b2d85611aa2565b600061070282611b3985611aa2565b600061070282611b4585611aa2565b600061070282611b5185611aa2565b600061070282611b6785611aa2565b600061070282611b7685611aa2565b600061070282611b8285611aa2565b600061070282611b8e85611aa2565b600061070282611b9a611c5c565b600061070282611d1561146a565b600061070282611d6261146a565b600061070282611def61146a565b600061070282611e7161146a565b600061070282611ebe61146a565b600061070282611f0b611545565b600061070282611f6a85611fc1565b600061070282612048856120eb565b6000610702826121c161105a565b600060ff8316600884901c600316600a85901c8380610f308786602081029091037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00180519181529091565b91509150610f4b610f4384868585612220565b825b9061070a565b9998505050505050505050565b60006107028261236f856119a0565b80518190603c14610fd9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4241445f44594e414d49435f4c454e475448000000000000000000000000000060448201526064015b60405180910390fd5b919050565b604051825182516020808302860101831115610ff957600080fd5b60208102830160405201835261100f8282612387565b505050565b60006110208284612387565b8151602002830161022c565b600061104583835161103e6103fd8690565b919061239b565b8151830161022c565b600061022c8383612417565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0820180517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909301805190936000929091906110bb838363ffffffff8816565b905250929392505050565b60a08301516020838102909101015180516000919081015b808210156108ee57600491909101805190919061ffff601082901c8116911661110688828885565b955050506110de565b8060200283015b80841015611131578351835260209384019390920191611116565b50505050565b9052565b60006003826003811115611151576111516133a3565b036111a45760005b8460a001515181101561119e5761118c8560a00151828151811061117f5761117f6132dd565b60200260200101516125f2565b8061119681613401565b915050611159565b50611267565b60008260038111156111b8576111b86133a3565b036111c75761119e8484612681565b60018260038111156111db576111db6133a3565b0361121d5761121861121361021886602001517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00190565b612691565b611267565b60005b8460800151518110156112655761125385608001518281518110611246576112466132dd565b6020026020010151612691565b8061125d81613401565b915050611220565b505b509092915050565b60008061127c858561274f565b905061ffff8115611292578360208301526112be565b60405191506060820160405284825283602083015280861660408301528160028760101c0160101b1795505b5093949350505050565b6000816040516020016112db9190613439565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012092915050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06020820284030180518282526000916000611356828763ffffffff16565b9050610c8f81610f45858582565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152600091908416906370a08231906024015b602060405180830381865afa1580156113d5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022c919061346f565b60008173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611446573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610715919061346f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08201805160009161149f8263ffffffff8616565b9052509192915050565b6040517f4ee2cd7e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905260009190851690634ee2cd7e906044015b602060405180830381865afa158015611521573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610702919061346f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0820180517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0840180517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09095015190946000939091906115cb84848463ffffffff8a16565b90525093949350505050565b6040517f981b24d00000000000000000000000000000000000000000000000000000000081526004810182905260009073ffffffffffffffffffffffffffffffffffffffff84169063981b24d0906024016113b8565b6040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810182905260009073ffffffffffffffffffffffffffffffffffffffff841690636352211e90602401602060405180830381865afa15801561169b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116bf9190613488565b73ffffffffffffffffffffffffffffffffffffffff169392505050565b6040517efdd58e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152602482018390526000919085169062fdd58e90604401611504565b6040517f4e1273f400000000000000000000000000000000000000000000000000000000815260609073ffffffffffffffffffffffffffffffffffffffff851690634e1273f49061179090869086906004016134be565b600060405180830381865afa1580156117ad573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526107029190810190613521565b600060208202840381611806828561276f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe060208602840301805186825291925060006118478383868b63ffffffff16565b9050868151146118b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4241445f524553554c545f4c454e4754480000000000000000000000000000006044820152606401610fd0565b816118be8282612387565b6020880281019a9950505050505050505050565b8061006257600080fd5b6020810283038060005b85821015611909575080516020909101906119048163ffffffff8716565b6118e6565b50509392505050565b968852602088019590955260408701939093526060860191909152608085015260a084015260c083015260e08201526101000190565b600061022c82846127c7565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0830180516000916110bb848363ffffffff8816565b60006107028261199a85876127c7565b90612847565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0830180517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909401805190946000929091906115cb85848463ffffffff8a16565b600061070282611a1285876127c7565b9061285c565b600061022c8284612871565b600061022c82846128c0565b6060600084116112675781610702565b600081831461022c565b600081831161022c565b60008115610715565b600081831061022c565b6000828201838110611a795780610702565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff949350505050565b60208181028403805191810191829060005b87831015611ada57508151611acd828263ffffffff8a16565b9150602083019250611ab4565b50909152509392505050565b600082600003611af857506000610715565b82820282848281611b0b57611b0b6135a7565b0403611a795780610702565b6000818311611b2757600061022c565b50900390565b600061022c82846135d6565b600061022c82846135e9565b600061022c828461371d565b6000818311611b60578161022c565b5090919050565b6000818310611b60578161022c565b600061022c8284613729565b600061022c828461373d565b600061022c8284613754565b6040517fd97b2e4800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301528381166024830152604482018390526000919086169063d97b2e4890606401602060405180830381865afa158015611c19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c3d919061346f565b73ffffffffffffffffffffffffffffffffffffffff1695945050505050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80820180517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0840180517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090960151919560009491929091611d088585858563ffffffff8c16565b9052509495945050505050565b60008173ffffffffffffffffffffffffffffffffffffffff1663ec14b06e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611446573d6000803e3d6000fd5b60008173ffffffffffffffffffffffffffffffffffffffff1663cd3293de6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611daf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dd39190613488565b73ffffffffffffffffffffffffffffffffffffffff1692915050565b60008173ffffffffffffffffffffffffffffffffffffffff1663f9020e336040518163ffffffff1660e01b8152600401602060405180830381865afa158015611e3c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e609190613767565b6003811115610715576107156133a3565b60008173ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611daf573d6000803e3d6000fd5b60008173ffffffffffffffffffffffffffffffffffffffff166347e4bbb96040518163ffffffff1660e01b8152600401602060405180830381865afa158015611446573d6000803e3d6000fd5b6040517fdb8554fc00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152602482018390526000919085169063db8554fc90604401611504565b6040517f88d6860400000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff8516906388d68604906115049086908690600401613788565b6020810283037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018051828252600091809250600080612023857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00180519091565b9150915061203d6120398286868b63ffffffff16565b8352565b505050509392505050565b6040517fcaa0eb3b00000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff86169063caa0eb3b906120a1908790879087906004016137b7565b602060405180830381865afa1580156120be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120e2919061346f565b95945050505050565b6020810283037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00180518282526000918280612149837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00180519091565b915091506000612179837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015190565b90506121b461218e828488888d63ffffffff16565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0850152565b5090979650505050505050565b60008060015b600881116122185760006121db8683612920565b905060006121e98684612920565b905060006121f78383611b17565b90506122078560018603836129d0565b945050600190920191506121c79050565b509392505050565b805160009081908190819060015b600881116123615760009250828961226757507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61226b565b5060005b60005b8381101561231f5761229989828151811061228b5761228b6132dd565b602002602001015184612920565b95508986116122ea578a6122b8576122b18683611b67565b91506122e1565b60018b036122ca576122b18683612a5a565b60028b1480156122d8575084155b156122e1578591505b60019450612317565b8b612317577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff915061231f565b60010161226e565b508361234857507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b6123568660018403836129d0565b95505060010161222e565b509298975050505050505050565b60006107028385600f16600487901c600f1685612a6a565b600060208301905061100f8183855161110f565b5b602081106123d95782518252602092830192909101907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00161239c565b801561100f577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600882021c80835116811985511617835250505050565b60008060008473ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015612467573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061248b9190613806565b50935050925050600082136124fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4d494e5f424153455f50524943450000000000000000000000000000000000006044820152606401610fd0565b836125078242613754565b1061256e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f5354414c455f50524943450000000000000000000000000000000000000000006044820152606401610fd0565b6120e28573ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156125bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125e09190613856565b60ff166125ec84612b10565b906127c7565b610062816040516024016126069190613879565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f0be77f5600000000000000000000000000000000000000000000000000000000179052612b80565b600061022c836000015183612ba1565b6126cf6040518060400160405280600381526020017f7e7e7e0000000000000000000000000000000000000000000000000000000000815250612bbe565b60005b8151811015612710576126fe818383815181106126f1576126f16132dd565b6020026020010151612c4d565b8061270881613401565b9150506126d2565b506100626040518060400160405280600381526020017f7e7e7e0000000000000000000000000000000000000000000000000000000000815250612bbe565b600061ffff8381165b801561070257805184146107025760400151612758565b606060008267ffffffffffffffff81111561278c5761278c612dec565b6040519080825280602002602001820160405280156127b5578160200160208202803683370190505b5090506020810161221885828661110f565b600080826012036127db5783915050610715565b8260121115612807575060128290036127ff6127f882600a61371d565b8590611ae6565b915050610715565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee820161283681600a61371d565b6127ff90856135e9565b5092915050565b600061022c83670de0b6b3a764000084612ce4565b600061022c8383670de0b6b3a7640000612ce4565b60008160000b600003612885575081610715565b60008260000b13156128ad576128a661289f83600a61388c565b8490611ae6565b9050610715565b60ff60008390031661283681600a61371d565b600080601283036128d45783915050610715565b82601211156128ee5750601282900361283681600a61371d565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee82016127ff6127f882600a61371d565b600081600881111561298e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f544945520000000000000000000000000000000000000000000000006044820152606401610fd0565b8260000361299f5760009150612840565b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016020021c63ffffffff1690565b6000826008811115612a3e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f544945520000000000000000000000000000000000000000000000006044820152606401610fd0565b505060209190910290811b63ffffffff90911b19919091161790565b600081831015611b60578161022c565b6000826008811115612ad8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f544945520000000000000000000000000000000000000000000000006044820152606401610fd0565b6000855b85811015612b045763ffffffff6020820290811b199890981685891b17979150600101612adc565b50959695505050505050565b600080821215612b7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f7369746976656044820152606401610fd0565b5090565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60008060208484030490506112676112136020830285038361276f565b61006281604051602401612bd29190613879565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f41304fac00000000000000000000000000000000000000000000000000000000179052612b80565b6040516024810183905260448101829052612ce090606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ff666715a00000000000000000000000000000000000000000000000000000000179052612b80565b5050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85870985870292508281108382030391505080600003612d3c57838281612d3257612d326135a7565b049250505061022c565b808411612d4857600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b600060208284031215612dc357600080fd5b813567ffffffffffffffff811115612dda57600080fd5b82016040818503121561022c57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715612e3e57612e3e612dec565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612e8b57612e8b612dec565b604052919050565b600067ffffffffffffffff821115612ead57612ead612dec565b5060051b60200190565b600082601f830112612ec857600080fd5b81356020612edd612ed883612e93565b612e44565b82815260059290921b84018101918181019086841115612efc57600080fd5b8286015b84811015612f175780358352918301918301612f00565b509695505050505050565b60006040808336031215612f3557600080fd5b612f3d612e1b565b833567ffffffffffffffff80821115612f5557600080fd5b90850190601f3681840112612f6957600080fd5b82356020612f79612ed883612e93565b82815260059290921b85018101918181019036841115612f9857600080fd5b8287015b8481101561303f57803587811115612fb45760008081fd5b880136603f820112612fc65760008081fd5b8481013588811115612fda57612fda612dec565b613009867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08a84011601612e44565b818152368d83850101111561301e5760008081fd5b818d8401888301376000918101870191909152845250918301918301612f9c565b508752508881013596508387111561305657600080fd5b61306236888b01612eb7565b9086015250929695505050505050565b60005b8381101561308d578181015183820152602001613075565b50506000910152565b600081518084526130ae816020860160208601613072565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600081518084526020808501945080840160005b83811015613110578151875295820195908201906001016130f4565b509495945050505050565b73ffffffffffffffffffffffffffffffffffffffff841681526000602084818401526060604084015260a0830184516040606086015281815180845260c08701915060c08160051b8801019350848301925060005b818110156131bc577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff408886030183526131aa858551613096565b94509285019291850191600101613170565b50505050908401518382037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa001608085015290610c8f81836130e0565b6000606082016060835280865180835260808501915060808160051b8601019250602080890160005b8381101561326e577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8088870301855261325c868351613096565b95509382019390820190600101613222565b505085018790525050828103604084015261328981856130e0565b9695505050505050565b600080604083850312156132a657600080fd5b505080516020909101519092909150565b60008152600082516132d0816001850160208701613072565b9190910160010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f630000000000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008360e01b1660018201527f80600e6000396000f3000000000000000000000000000000000000000000000060058201526000825161339581600e850160208701613072565b91909101600e019392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613432576134326133d2565b5060010190565b815160009082906020808601845b8381101561346357815185529382019390820190600101613447565b50929695505050505050565b60006020828403121561348157600080fd5b5051919050565b60006020828403121561349a57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461022c57600080fd5b604080825283519082018190526000906020906060840190828701845b8281101561350d57815173ffffffffffffffffffffffffffffffffffffffff16845292840192908401906001016134db565b5050508381038285015261328981866130e0565b6000602080838503121561353457600080fd5b825167ffffffffffffffff81111561354b57600080fd5b8301601f8101851361355c57600080fd5b805161356a612ed882612e93565b81815260059190911b8201830190838101908783111561358957600080fd5b928401925b82841015610c8f5783518252928401929084019061358e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b80820180821115610715576107156133d2565b6000826135f8576135f86135a7565b500490565b600181815b8085111561365657817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561363c5761363c6133d2565b8085161561364957918102915b93841c9390800290613602565b509250929050565b60008261366d57506001610715565b8161367a57506000610715565b8160018114613690576002811461369a576136b6565b6001915050610715565b60ff8411156136ab576136ab6133d2565b50506001821b610715565b5060208310610133831016604e8410600b84101617156136d9575081810a610715565b6136e383836135fd565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115613715576137156133d2565b029392505050565b600061022c838361365e565b600082613738576137386135a7565b500690565b8082028115828204841417610715576107156133d2565b81810381811115610715576107156133d2565b60006020828403121561377957600080fd5b81516004811061022c57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600061070260408301846130e0565b73ffffffffffffffffffffffffffffffffffffffff841681528260208201526060604082015260006120e260608301846130e0565b805169ffffffffffffffffffff81168114610fd957600080fd5b600080600080600060a0868803121561381e57600080fd5b613827866137ec565b945060208601519350604086015192506060860151915061384a608087016137ec565b90509295509295909350565b60006020828403121561386857600080fd5b815160ff8116811461022c57600080fd5b60208152600061022c6020830184613096565b600061022c60ff84168361365e56fea26469706673582212204fb3ea860a37d438fba081866a6e4704b41e14afd595e673893c23032e1f724364736f6c63430008110033";

type StackHeightTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StackHeightTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StackHeightTest__factory extends ContractFactory {
  constructor(...args: StackHeightTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    interpreterIntegrity_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StackHeightTest> {
    return super.deploy(
      interpreterIntegrity_,
      overrides || {}
    ) as Promise<StackHeightTest>;
  }
  override getDeployTransaction(
    interpreterIntegrity_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(interpreterIntegrity_, overrides || {});
  }
  override attach(address: string): StackHeightTest {
    return super.attach(address) as StackHeightTest;
  }
  override connect(signer: Signer): StackHeightTest__factory {
    return super.connect(signer) as StackHeightTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StackHeightTestInterface {
    return new utils.Interface(_abi) as StackHeightTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StackHeightTest {
    return new Contract(address, _abi, signerOrProvider) as StackHeightTest;
  }
}

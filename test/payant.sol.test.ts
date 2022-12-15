import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { arrayify, concat, solidityKeccak256 } from "ethers/lib/utils";
import { ethers } from "hardhat";
import { FlowFactory, ReserveToken18 } from "../typechain";
import { Flow, FlowInitializedEvent, FlowTransferStruct, SignedContextStruct } from "../typechain/contracts/flow/basic/Flow";
import { basicDeploy, eighteenZeros, getEvents, memoryOperand, MemoryType, ONE, op, Opcode } from "../utils";
import { RAIN_FLOW_SENTINEL } from "../utils/constants/sentinel";
import { flowDeploy } from "../utils/deploy/flow/basic/deploy";
import { flowFactoryDeploy } from "../utils/deploy/flow/basic/flowFactory/deploy";
import { FlowConfig } from "../utils/types/flow";
import { base32 } from "cid-tool";
import { toHex} from  "web3-utils";
import { assert, expect } from "chai";
describe("Payant test", () => {
  let flowFactory: FlowFactory;
  let signers: SignerWithAddress[];
  let deployer: SignerWithAddress;
  let depositor: SignerWithAddress; // caller
  let withdrawer: SignerWithAddress; // caller
  let goodSigner: SignerWithAddress;
  let flowContract: Flow
  let dispatchDeposit;
  const ME = () => op(Opcode.CALLER);
  const YOU = () => op(Opcode.CONTEXT, 0x0000);

  let erc20: ReserveToken18;

  before(async () => {
    flowFactory = await flowFactoryDeploy();
    signers = await ethers.getSigners();
    deployer = signers[0];
    depositor = signers[1];
    withdrawer = signers[2];
    goodSigner = signers[3];

    erc20 = (await basicDeploy("ReserveToken18", {})) as ReserveToken18;
    await erc20.initialize();

    const flowStructDeposit: FlowTransferStruct = {
      native: [],
      erc20: [
        {
          from: depositor.address,
          to: "", // Contract address
          token: erc20.address,
          amount: ethers.BigNumber.from(10 + eighteenZeros),
        },
      ],
      erc721: [],
      erc1155: [],
    };

    const flowStructWithdraw: FlowTransferStruct = {
      native: [],
      erc20: [
        {
          from: "", // Contract address
          to: "", 
          token: erc20.address,
          amount: ethers.BigNumber.from(10 + eighteenZeros),
        },
      ],
      erc721: [],
      erc1155: [],
    };

    const constants = [
        RAIN_FLOW_SENTINEL,
        1,
        flowStructDeposit.erc20[0].token,
        flowStructDeposit.erc20[0].amount,
    ];

    const SENTINEL = () =>
      op(Opcode.READ_MEMORY, memoryOperand(MemoryType.Constant, 0));
    const FLOWTRANSFER_ERC20_TOKEN = () =>
      op(Opcode.READ_MEMORY, memoryOperand(MemoryType.Constant, 2));
    const FLOWTRANSFER_ERC20_AMOUNT = () =>
      op(Opcode.READ_MEMORY, memoryOperand(MemoryType.Constant, 3));

    const CONTEXT_FLOW_ID = () => op(Opcode.CONTEXT, 0x0001);

    const SIGNED_CONTEXT_FILE_HASH = () => op(Opcode.CONTEXT, 0x0100);
    const SIGNED_CONTEXT_WITHDRAWER = () => op(Opcode.CONTEXT, 0x0101)
    const SIGNED_CONTEXT_AMOUNT = () => op(Opcode.CONTEXT, 0x0102)

    const sourceFlowIODeposit = concat([
      SENTINEL(), // ERC1155 SKIP
      SENTINEL(), // ERC721 SKIP
      SENTINEL(), // ERC20 END
      FLOWTRANSFER_ERC20_TOKEN(), // token address
      YOU(), // Caller
      ME(), // FLowContract
      SIGNED_CONTEXT_AMOUNT(), // amount
      SIGNED_CONTEXT_FILE_HASH(), // key
      SIGNED_CONTEXT_WITHDRAWER(), // value
      op(Opcode.SET),
      SIGNED_CONTEXT_FILE_HASH(),
      SIGNED_CONTEXT_WITHDRAWER(),
      op(Opcode.HASH, 2),
      SIGNED_CONTEXT_AMOUNT(),
      op(Opcode.SET),
    ]);

    const sources = [];

    const flowConfigStruct: FlowConfig = {
      stateConfig: { sources, constants},
      flows: [
        {
          sources: [sourceFlowIODeposit],
          constants: constants
        }
      ]
    }

    const { flow } =  await flowDeploy(deployer, flowFactory, flowConfigStruct);
    flowContract = flow;
    const flowInitialized = (await getEvents(
      flow.deployTransaction,
      "FlowInitialized",
      flow
    )) as FlowInitializedEvent["args"][];
    dispatchDeposit = flowInitialized[0].dispatch;
  });

  it("Should deploy flow Contract",async () => {
    expect(flowContract.address).to.not.null;
    expect(dispatchDeposit).to.not.null;
  });

  it("Should deposit amount in flow Contract",async () => {
    await erc20.transfer(depositor.address, ONE);
    await erc20.connect(depositor).approve(flowContract.address, ONE);

    const file = "QmXyewyJGuUs1wxRwVJm3uBiJiaB3ofjfj3nGYQWQD7XrB";
    const fileHash = ethers.BigNumber.from(toHex(base32(file)));

    const context = [1, withdrawer.address, ONE];
    const contextHash = solidityKeccak256(["uint256[]"], [context]);
    const signature = goodSigner.signMessage(arrayify(contextHash));

    const signedContext: SignedContextStruct[] = [
      {
        signature: signature,
        signer: goodSigner.address,
        context: context
      }
    ]

    // await flowContract.callStatic.flow(dispatchDeposit, 1, signedContext);
    
  });
});

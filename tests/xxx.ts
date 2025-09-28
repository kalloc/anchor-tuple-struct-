import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Xxx } from "../target/types/xxx";

describe("xxx", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.xxx as Program<Xxx>;

  it("Is initialized!", async () => {
    // Add your test here.
    const inst = await program.methods.initialize({trackVolume: {0: false}}).instruction();
    console.log("Track volume is false = ", inst.data.toString('hex'));
    const inst2 = await program.methods.initialize({trackVolume: {0: true}}).instruction();
    console.log("Track volume is true = ", inst2.data.toString('hex'));
  });
});

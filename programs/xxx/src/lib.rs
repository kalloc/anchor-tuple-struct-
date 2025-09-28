use anchor_lang::prelude::*;

declare_id!("6hJjKJP3gxGQnCk7bY4Yn47mMpuiwvt3mYErGsayFsad");

#[program]
pub mod xxx {
    use super::*;


    pub fn initialize(ctx: Context<Initialize>, args: InitializeArgs) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
    
#[derive(AnchorDeserialize, AnchorSerialize)]
pub struct OptionBool(bool);

#[derive(AnchorDeserialize, AnchorSerialize)]
pub struct InitializeArgs {
    pub track_volume: OptionBool 
}

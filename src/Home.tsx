import * as anchor from "@project-serum/anchor";

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  txTimeout: number;
  rpcHost: string;
}

const Home = (props: HomeProps) => {
  return (
      <main className="main__container">
        <div className="navbar">
          <div className="navbar__title">AQUAHEADS</div>
          <div className="navbar__status">MINT</div>
        </div>
        <div className="main">
          <div className="main__title">MINT</div>
          <div className="main__description">
            Welcome to the Official AquaHeads Mint Celebration! <br/>
            To mint, please connect your wallet. <br/>
            After minting, you will see your AquaHead's in your solana wallet.
          </div>
          <div className="main__button__container">
            <div className="main__button">
              <div className="main__button__title">MAX PER WALLET</div>
              <div className="main__button__subtitle">8</div>
            </div>
            <div className="main__button">
              <div className="main__button__title">MINT PRICE</div>
              <div className="main__button__subtitle">2 SOL (200$)</div>
            </div>
          </div>
          <div className="main__description">
            AQUAHEADS Special: Mint 1 get 1! <br/>
            Available until sold out (3333 units). <br/>
            Holding a AQUAHEAD at SOLD OUT moment? Receive an additional one per AQUAHEAD in your wallet.
          </div>
        </div>
        <div className="faq">
          <div className="faq__title">HOW TO MINT</div>
          <div className="faq__block">
            <div className="faq__subtitle">Connect your wallet.</div>
            <div className="faq__description">Click "Connect Wallet" and authorize connection in your wallet.</div>
          </div>
          <div className="faq__block">
            <div className="faq__subtitle">Confirm in your wallet.</div>
            <div className="faq__description">You need to have enough SOL in your wallet to cover 'gas fees 0.5-1$' + mint cost.</div>
          </div>
          <div className="faq__block">
            <div className="faq__subtitle">Problem appears, what to do?</div>
            <div className="faq__description">
              If you have any questions during MINT, contact us in the discord, <br/>
              create a ticket and you will get the answer within 5 minutes <br/>
              <a href="https://discord.gg/CmsjZcXzjB" target="_blank" rel="noopener noreferrer">https://discord.gg/CmsjZcXzjB</a>
            </div>
          </div>
        </div>
      </main>
  );
};

export default Home;

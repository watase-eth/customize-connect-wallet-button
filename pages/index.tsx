import { ConnectWallet, MediaRenderer, darkTheme, useActiveClaimCondition, useContract } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import buttonStyles from "../styles/ConnectWallet.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  const cutomTheme = darkTheme({
    colors: {
      modalBg: "#FFFFFF",
      primaryText: "#333333",
      walletSelectorButtonHoverBg: "#EEEEEE",
      separatorLine: "#FFFFFF",
      borderColor: "#EEEEEE",
    }
  });

  const {
    contract
  } = useContract("0xF627A2EA6701D9aFeaEDB3dB6e356fC01c83a154");

  const {
    data: claimCondition,
  } = useActiveClaimCondition(contract, 0);
  console.log(claimCondition?.availableSupply);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <ConnectWallet
          className={buttonStyles.connectButton}
          btnTitle="Connect"

          modalTitle="Select Wallet"
          modalTitleIconUrl=""

          theme={cutomTheme}

          // // Simple welcome screen
          // welcomeScreen={{
          //   title: "Jacket NFT",
          //   subtitle: "Connect your wallet to claim!",
          //   img: {
          //     src: "/jacketImg.png",
          //     height: 300,
          //     width: 300,
          //   }
          // }}

          // Image welcome screen
          // welcomeScreen={() => {
          //   return (
          //     <div style={{ height: "100%", width: "100%"}}>
          //       <MediaRenderer
          //         src={"https://3323f062efc9dd990230b2329a0dd753.ipfscdn.io/ipfs/bafybeiaxtc2vocl2jydvofzzqy4gh5rhzl55ewloe7poljuvs3p5qijjha/demoImg.png"}
          //         width="100%"
          //         height="auto"
          //       />
          //     </div>
          //   )
          // }}
          
          //Image with gradient welcome screen
          // welcomeScreen={() => {
          //   return (
          //     <div style={{ height: "100%", width: "100%"}}>
          //       <MediaRenderer
          //         src={"https://3323f062efc9dd990230b2329a0dd753.ipfscdn.io/ipfs/bafybeieptxnjydjon2levm7npbetr46taojdxjqrwenecvskhru66fbaby/Untitled%20design%20(27).png"}
          //         width="100%"
          //         height="auto"
          //       />
          //     </div>
          //   )
          // }}

          // Custom welcome screen
          welcomeScreen={() => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                }}
              >
                <h2>Jacket NFT</h2>
                <MediaRenderer
                  src={"https://3323f062efc9dd990230b2329a0dd753.ipfscdn.io/ipfs/bafybeicbhroiwbbclxncbbq3nfydge7l4qbwrcpiepwklj2zdgxgfho46u/AdobeStock_472097134.mp4"}
                  width="175%"
                />
                <p>Connect your wallet to claim!</p>
                <h3>Only <span style={{fontSize: "2rem"}}>{claimCondition?.availableSupply}</span> left!</h3>
              </div>
            )
          }}
        />
      </div>
    </main>
  );
};

export default Home;

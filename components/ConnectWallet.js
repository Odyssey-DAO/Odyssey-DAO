import { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { AppContext } from "../pages";
import { useWeb3Modal } from "../hooks/web3";

const truncateAddress = (address) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

const ConnectWallet = () => {
    const [isWaiting, setWaiting] = useState(false)

    const { connectWallet, disconnectWallet, modalProvider, modalSigner, modalSignerAddress, modalNetworkId, modalError } = useWeb3Modal();
    const { 
        provider,
        setProvider,
        signer,
        setSigner,
        signerAddress,
        setSignerAddress,
        networkId,
        setNetworkId } = useContext(AppContext);

    useEffect(() => {
        setProvider(modalProvider)
        setSigner(modalSigner)
        setSignerAddress(modalSignerAddress)
        setNetworkId(modalNetworkId)
      }, [modalNetworkId])

    const handleClickConnect = async () => {
        setWaiting(true);
        await connectWallet();
        setWaiting(false);
    };

    const handleClickAddress = () => {
        disconnectWallet();
    };

    return (
        <button
        onClick={modalSignerAddress ? handleClickAddress : handleClickConnect}>
        <div>
            {modalSignerAddress ? truncateAddress(modalSignerAddress) : "Connect Wallet"}
        </div>
        </button>
    );
}

export default ConnectWallet;
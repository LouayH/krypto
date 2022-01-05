import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext({});

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;
}

export const TransactionProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState(null);
  
  const connectWallet = async () => {
    try {
      if(!ethereum) return alert("Please install MetaMask!");

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setConnectedAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new error("No ethereum object");
    }
  }
  
  const isWalletConnected = async () => {
    try {
      if(!ethereum) return alert("Please install MetaMask!");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if(accounts.length) {
        setConnectedAccount(accounts[0]);
      } else {
        console.log("No accounts found!");
      }
    } catch (error) {
      console.log(error);

      throw new error("No ethereum object");
    }
  }

  useEffect(() => {
    isWalletConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectedAccount, connectWallet }}>
      { children }
    </TransactionContext.Provider>
  )
}
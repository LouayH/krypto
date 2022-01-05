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
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ addressTo: "", amount: "", message: "" });

  const updateFormData = (e, input) => {
    setFormData((prev) => ({ ...prev, [input]: e.target.value }))
  }
  
  const connectWallet = async () => {
    try {
      if(!ethereum) return alert("Please install MetaMask!");

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setConnectedAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
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

      throw new Error("No ethereum object");
    }
  }

  const sendTransaction = async () => {
    try {
      setIsLoading(true);
      if(!ethereum) return alert("Please install MetaMask!");

      const { addressTo, amount, message } = formData;
      const parsedAmount = ethers.utils.parseEther(amount);
      const contract = getEthereumContract();

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [{
          from: connectedAccount,
          to: addressTo,
          gas: "0x5208", // 21000 GWEI in decimal
          value: parsedAmount._hex
        }]
      });

      const trasnaction = await contract.send(addressTo, parsedAmount, message);
      console.log(`Loading - ${trasnaction.hash}`);
      await trasnaction.wait();
      setIsLoading(false);
      console.log(`Success - ${trasnaction.hash}`);
    } catch (error) {
      setIsLoading(false);
      console.log(error);

      throw new Error("No ethereum object");
    }
  }

  useEffect(() => {
    isWalletConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectedAccount, connectWallet, formData, updateFormData, isLoading, setIsLoading, sendTransaction }}>
      { children }
    </TransactionContext.Provider>
  )
}
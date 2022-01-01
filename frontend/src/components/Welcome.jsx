import { useState } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from "./";

const InputField = ({ type, name, placeholder, value, handleChange }) => (
  <input type={type} placeholder={placeholder} step="0.0001" value={value} onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white text-sm border-none white-glassmorphism"
  />
);

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false);

  const gridItemStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-dashed border-gray-400 font-light text-white";
  
  const connectWallet = () => {

  }

  const handleSubmit = () => {
    setIsLoading(true);
  }

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col ml:flex-row items-start justify-between py-12 px-4 md:p-20">
        <div className="flex-1 flex flex-col justify-start ml:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send crypto<br />across the world!
          </h1>
          <p className="text-left mt-5 text-white font-light w-11/12 md:w-9/12 text-base">
            Explore crypto world! Buy and sell crypto currencies easily on Krypto.
          </p>
          <button type="button" onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952E3] p-3 rounded-full cursor-pointer hover:bg-[#2546BD]">
            <p className="text-base text-white font-semibold">Connect Wallet</p>
          </button>
          <div className="overflow-hidden grid grid-cols-2 sm:grid-cols-3 w-full mt-10 rounded-2xl gap-1">
            <div className={gridItemStyles}>
              Reliability
            </div>
            <div className={gridItemStyles}>
              Security
            </div>
            <div className={gridItemStyles}>
              Ethereum
            </div>
            <div className={gridItemStyles}>
              Web 3.0
            </div>
            <div className={gridItemStyles}>
              Low Fees
            </div>
            <div className={gridItemStyles}>
              Blockchain
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-start w-full ml:mt-0 mt-10">
          <div className="flex-col justify-end items-start rounded-xl h-48 w-full sm:w-96 my-5 p-3 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-white">
                  <SiEthereum fontSize={20} color="white" />
                </div>
                <BsInfoCircle fontSize={16} color="white" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  0x1234567890
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center w-full sm:w-96 p-5 blue-glassmorphism">
            <InputField type="text" name="addressTo" placeholder="Address To" handleChange={() => {}} />
            <InputField type="number" name="amount" placeholder="Amount (ETH)" handleChange={() => {}} />
            <InputField type="text" name="message" placeholder="Enter message" handleChange={() => {}} />

            {isLoading ? (
              <Loader />
            ) : (
              <button type="button" onClick={handleSubmit}
                className="w-full text-white mt-2 border-[1px] p-2 border-[#3D4F7C] rounded-full cursor-pointer">
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
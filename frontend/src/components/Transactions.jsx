import { useContext } from "react";
import { TransactionContext } from "../context/tranactions";
import { shortenAddress } from "../utils/helpers";

const Transactions = () => {
  const { connectedAccount, transactions } = useContext(TransactionContext);

  const TransactionCard = ({ addressFrom, addressTo, amount, message, timestamp }) => (
    <div className="flex-1 flex flex-col m-4 bg-[#181918] p-3
      sm:min-w-[270px] sm:max-w-[300px]
      2xl:min-w-[450px] 2xl:max-w-[500px]
      rounded-md hover:shadow-2xl
    ">
      <div className="flex flex-col items-center w-full mt-3">
        <div className="w-full p-2">
          <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
            <p className="text-white text-base">
              From: {shortenAddress(addressFrom)}
            </p>
          </a>
          <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
            <p className="text-white text-base">
              To: {shortenAddress(addressTo)}
            </p>
          </a>
          <p className="text-white text-base">
            Amount: {amount} ETH
          </p>
          {message && (
            <p className="text-white text-base mt-2">
              {message}
            </p>
          )}
          <div className="bg-black py-1 px-3 w-max rounded-3xl mt-5 shadow-2xl">
            <p className="text-[#37C7DA]">
              {timestamp}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 transactions-section">
      <div className="flex flex-col md:p-12 py-12 px-4">
      {connectedAccount ? (
        <h3 className="text-white text-3xl text-center my-2">
          Latest Transactions
        </h3>
      ) : (
        <h3 className="text-white text-3xl text-center my-2">
          Connect your wallet to get the latest transactions
        </h3>
      )}

        <div className="flex flex-wrap justify-center items-center mt-10">
        {transactions.reverse().map((transaction, i) => <TransactionCard key={i} {...transaction} />)}
        </div>
      </div>
    </div>
  );
}

export default Transactions;
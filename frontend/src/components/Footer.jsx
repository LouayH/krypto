const Footer = () => {
  return (
    <div className="flex flex-col w-full md:justify-center justify-between items-center footer">
      <div className="flex sm:flex-row flex-col w-full justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <h1 className="logo text-white text-4xl">KRYPTO</h1>
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap w-full sm:mt-0 mt-5">
          <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Wallet</p>
        </div>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="flex sm:w-[90%] w-full justify-between items-center my-5">
        <p className="text-white text-sm text-center">&copy; krypto 2022</p>
        <p className="text-white text-sm text-center">Contact us: info@krypto.com</p>
      </div>
    </div>
  );
}

export default Footer;
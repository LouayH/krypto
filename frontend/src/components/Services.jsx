import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const Card = ({ title, subtitle, color, icon }) => (
  <div className="flex justify-start items-center white-glassmorphism p-3 m-3 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex-1 flex flex-col">
      <h2 className="text-white text-lg">{title}</h2>
      <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
)

const Services = () => {
  return (
    <div className="flex flex-col ml:flex-row justify-center items-center w-full services-section">
      <div className="flex ml:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center">
        <Card title="Security Guaranteed" subtitle="Security is guaranteed. We always maintain privacy and the quality of our products."
          color="bg-[#2952E3]" icon={<BsShieldFillCheck fontSize={20} className="text-white" />} />
        <Card title="Best Exchange Rates" subtitle="Security is guaranteed. We always maintain privacy and the quality of our products."
          color="bg-[#8945F8]" icon={<BiSearchAlt fontSize={20} className="text-white" />} />
        <Card title="Fastest Transactions" subtitle="Security is guaranteed. We always maintain privacy and the quality of our products."
          color="bg-[#F84550]" icon={<RiHeart2Fill fontSize={20} className="text-white" />} />
      </div>
    </div>
  );
}

export default Services;
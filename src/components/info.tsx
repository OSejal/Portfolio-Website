import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  // {
  //   icon: <FaPhoneAlt />,
  //   title: "Phone",
  //   description: "+91 8862889547",
  // },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sejal.1109.sinha@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Kolkata, West Bengal",
  },
];


export default function Info() {
    return <div className="w-full xl:w-1/2 flex justify-center mt-20">
    <ul className="flex flex-col gap-10">
      {info.map((item, index) => (
        <li key={index} className="flex items-center gap-6">
          <div className="w-[39px] h-[39px] xl:w-[72px] xl:h-[72px] bg-slate-200 text-black rounded-full shadow-md shadow-slate-700 flex items-center justify-center">
            <div>{item.icon}</div>
          </div>
          <div className="flex-1">
            <p className="text-slate-600">{item.title}</p>
            <h3 className="text-xl">{item.description}</h3>
          </div>
        </li>
      ))}
    </ul>
  </div>
}
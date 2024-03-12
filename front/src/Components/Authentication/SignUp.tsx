import Image from "next/image";
import { CustomInput } from "./CustomInput";

const loginSelect = [
  { logo: "/google.png", text: "Google-ээр нэвтрэх" },
  { logo: "/microsoft.png", text: "Microsoft-оор нэвтрэх" },
  { logo: "/apple.png", text: "Apple-аар нэвтрэх" },
];

export const SignUp = () => {
  return (
    <div className="flex flex-col w-full border border-[#ECEDF0] rounded-xl p-10 gap-6 bg-white">
      <h2 className="text-[32px] font-bold width-full text-[#121316] text-center">
        Бүртгүүлэх
      </h2>
      <div className="flex flex-col gap-4  ">
        <CustomInput label="Таны имэйл" placeholder="Имэйл" type="text" />
        <CustomInput label="Таны нэр" placeholder="Нэр" type="text" />

        <button className="px-5 py-4 bg-gray-200 flex text-lg text-white font-normal justify-between items-center rounded-lg">
          <p className="text-transparent">N</p>
          <p className="px-1 text-[#fff]">Дараах</p>
          <Image
            src={"/svg/arrow.svg"}
            alt="arrow right"
            width={24}
            height={24}
          />
        </button>
        <div className="Social flex flex-col gap-4">
          <div className="Line py-5 ">
            <div className="bg-[#ECEDF0] h-px"></div>
          </div>
          {loginSelect.map((item, index) => (
            <div
              key={index}
              className="flex rounded-md bg-[#1C20240A] py-3 px-4 gap-1 text-center justify-center items-center cursor-pointer"
            >
              <Image src={item.logo} alt="google logo" width={24} height={24} />
              <p className="py-0.5 px-1">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="Line py-5 ">
            <div className="bg-[#ECEDF0] h-px"></div>
          </div>
          <div className="flex text-sm font-normal py-2 gap-1 items-center justify-center">
            <p className="text-[#525252]">Бүртгэлтэй юу?</p>
            <span className="underline underline-offset-4 cursor-pointer ">
              Нэвтрэх
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

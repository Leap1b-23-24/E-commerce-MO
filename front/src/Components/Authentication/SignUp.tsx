import Image from "next/image";
import { CustomInput } from "./CustomInput";
import { NextBtn } from "../NextBtn";

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

        <NextBtn px="5" py="4" bgcolor="#121316" color="#1C20243D" />
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

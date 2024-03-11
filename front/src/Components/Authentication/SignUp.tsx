import Image from "next/image";

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
        <div className="flex flex-col gap-2">
          <p>Таны имэйл</p>
          <input
            className="px-2 py-4 border border-[#D6D8DB] rounded-lg bg-[#F7F7F8]"
            placeholder="Имэйл"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Таны нэр</p>
          <input
            className="px-2 py-4 border border-[#D6D8DB] rounded-lg bg-[#F7F7F8]"
            placeholder="Нэр"
            type="text"
          />
        </div>
        <button className="px-5 py-4 bg-[#121316] flex text-white text-lg font-normal justify-between items-center rounded-lg">
          <p className="text-transparent">N</p>
          <p className="px-1 ">Дараах</p>
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

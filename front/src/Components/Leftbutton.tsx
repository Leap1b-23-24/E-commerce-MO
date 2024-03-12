import Image from "next/image";

export const LeftButton = () => {
  return (
    <button className="w-[48px] h-[48px] bg-[#1C20240A] rounded-[100px] flex justify-center items-center">
      <Image src="/left-arrow.svg" alt="left-arrow" width={16} height={16} />
    </button>
  );
};

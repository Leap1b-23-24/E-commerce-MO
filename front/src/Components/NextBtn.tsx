import Image from "next/image";
type NextBtnProps = {
  textpos?: string;
  px: string;
  py: string;
  color: string;
  bgcolor: string;
};
export const NextBtn = (props: NextBtnProps) => {
  return (
    <button
      style={{ backgroundColor: props.bgcolor, color: props.color }}
      className={`relative flex px-${props.px} py-${props.py} gap-0.5 justify-end flex text-lg text-white font-normal items-center rounded-lg`}
    >
      <p
        className={`absolute ${props.textpos} right-1/2 translate-x-1/2 px-1 text-white`}
      >
        Дараах
      </p>
      <Image
        className=""
        src={"/svg/arrow.svg"}
        alt="arrow right"
        width={24}
        height={24}
      />
    </button>
  );
};

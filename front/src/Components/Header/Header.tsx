import Image from "next/image";

export const Header = () => {
  return (
    <div className="bg-teal-500 w-full">
      <div className="flex w-full justify-center items-center gap-12">
        <div className="flex gap-3 p-4">
          <Image alt="" src="/pinelogo.png" width={28} height={28} />
          <h1 className="text-white text-2xl">Ecommerce</h1>
        </div>
        <div className="">
          {/* <Image alt="" src="/search.png" width={24} height={24} /> */}
          <input className="rounded-lg p-2" type="text" placeholder="Хайлт" />
        </div>
        <div className="flex">
          <Image alt="" src="/heart.png" width={50} height={50} />
          <Image alt="" src="/shop.png" width={50} height={50} />
          <Image alt="" src="/Profile.png" width={50} height={50} />
        </div>
      </div>
    </div >
  );
};

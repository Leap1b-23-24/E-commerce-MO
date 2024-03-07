import Image from "next/image";

export const Header = () => {
  return (
    <div className="bg-teal-500 w-full">
      <div className="flex w-full flex justify-center items-center">
        <div className="flex gap-3 p-4">
          <Image alt="" src="/pinelogo.png" width={28} height={28} />
          <h1 className="text-white">Ecommerce</h1>
        </div>
        <div>
          <input className="rounded" type="Search" alt="" src="/search.png" width={24} height={24} />
          {/* <Image alt="" src="/search.png" width={24} height={24} /> */}
          <p className="text-slate-200">Хайлт</p>
        </div>
        <div></div>
      </div>
    </div >
  );
};

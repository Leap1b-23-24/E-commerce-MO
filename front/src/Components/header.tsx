import Image from "next/image";

export const Header1 = () => {
  return (
    <div className="w-full bg-gray-200">
      <div className="flex flex-row justify-between px-6">
        <Image src="/Plogo.svg" alt="pinecone logo" width={32} height={24} />
        <div className="flex flex-row gap-[16px] items-center">
          <Image src="/Bell.svg" alt="bell" width={36} height={36} />
          <div className="flex flex-row gap-[8px] items-center">
            <Image src="service.svg" alt="service" width={36} height={36} />
            <p className="text-sm text-white">Username</p>
          </div>
        </div>
      </div>
    </div>
  );
};

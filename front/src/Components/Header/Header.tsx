import Image from "next/image";

export const Header = () => {
  return (
    <div className="bg-teal-500 w-full">
      <div className="flex w-full justify-around items-center">
        <div className="flex gap-3 p-4">
          <Image alt="" src="/pinelogo.png" width={38} height={28} />
          <h1 className="text-white text-2xl">Ecommerce</h1>
        </div>
        <div className="flex relative w-[500px] h-[48px] group justify-center items-center z-1001 bg-white rounded-lg">
          <span className="flex absolute left-3 bg-transparent rounded text-base text-gray-600">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.459 18.9505H19.4375L19.0754 18.6013C20.3427 17.1272 21.1056 15.2134 21.1056 13.1315C21.1056 8.48925 17.3427 4.72632 12.7004 4.72632C8.05817 4.72632 4.29524 8.48925 4.29524 13.1315C4.29524 17.7737 8.05817 21.5367 12.7004 21.5367C14.7823 21.5367 16.6961 20.7737 18.1702 19.5065L18.5194 19.8686V20.8901L24.9849 27.3427L26.9116 25.416L20.459 18.9505ZM12.7004 18.9505C9.48059 18.9505 6.88145 16.3513 6.88145 13.1315C6.88145 9.91166 9.48059 7.31253 12.7004 7.31253C15.9202 7.31253 18.5194 9.91166 18.5194 13.1315C18.5194 16.3513 15.9202 18.9505 12.7004 18.9505Z" fill="#121316" />
            </svg>
          </span>
          <input className="w-4/5 p-2 rounded-none" type="text" placeholder="Хайлт" />
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

import { SignUp } from "@/Components/Authentication/SignUp";
import Image from "next/image";

export default function Signup() {
  return (
    <div className="flex relative items-center justify-center h-screen">
      <figure className="absolute top-[44px] left-[44px] z-[-1]">
        <Image alt="logo" src="/pinecone.png" width={194} height={32} />
      </figure>
      <div className="min-w-[440px]">
        <SignUp />
      </div>
      <p className="absolute bottom-[14px] right-[50] z-[-1] text-[#1C20243D] text-xs font-normal">
        © 2023 Pinecone
      </p>
    </div>
  );
}

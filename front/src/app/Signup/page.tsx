import { SignUp } from "@/Components/Authentication/SignUp";
import Image from "next/image";

export default function Signup() {
  return (
    <div className="flex relative items-center justify-center h-screen">
      <figure className="absolute top-[44px] left-[44px] z-[-1]">
        <Image alt="logo" src="/pinecone.png" width={194} height={32} />
        <p></p>
      </figure>
      <div className="min-w-[440px]">
        <SignUp />
      </div>
    </div>
  );
}

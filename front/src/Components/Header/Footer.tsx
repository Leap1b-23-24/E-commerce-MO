import Image from "next/image";

const footerMenu = [
  "Холбоо барих",
  "Үйлчилгээний нөхцөл",
  "Хүргэлтийн бүс",
  "Нууцлалын бодлого",
];

const socialImg = ["/facebook.png", "/instagram.png", "/twitter.png"];

export const Footer = () => {
  return (
    <footer className="w-screen  bg-[#12A795]">
      <main className="flex flex-col  py-[50px] max-w-[1200px] w-fit m-auto  justify-center items-center gap-12 color-[#FFFFFF]">
        <div className="flex items-center  justify-center gap-2">
          <Image alt="footer logo" src="/logo.png" width={41} height={41} />
          <p>Ecommerce</p>
        </div>
        <div className="flex flex-col  gap-6 ">
          <ul className="flex min-w-[792px] m-auto justify-between">
            {footerMenu.map((item, index) => (
              <li className="cursor-pointer" key={item}>
                {item}
              </li>
            ))}
          </ul>
          <div className="logo flex justify-center p-[5px] gap-[18px] cursor-pointer">
            {socialImg.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="social image"
                height={46}
                width={40}
              />
            ))}
          </div>
          <div className="flex justify-center h-0.5 w-full bg-[#FFFFFF33] "></div>
          <div className="flex-col gap-4 items-center justify-center text-center">
            <p>© 2024 Pinecone Ecommerse LLC </p>
            <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </main>
    </footer>
  );
};

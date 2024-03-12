import Image from "next/image";

export const Table = () => {
  return (
    <table className="w-full text-left rtl:text-right">
      <thead className="text-xs font-semibold text-gray-100 bg-[#ECEDF0]">
        <tr>
          <th scope="col" className="px-6 py-3">
            №
          </th>
          <th scope="col" className="px-6 py-3">
            Бүтээгдэхүүн
          </th>
          <th scope="col" className="px-6 py-3">
            Зарагдсан
          </th>
          <th scope="col" className="px-6 py-3">
            Үнэ
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-sm text-gray-200 px-6 py-4">1</td>
          <th scope="row" className="flex items-center px-6 py-4">
            <Image
              src="/shoes.svg"
              alt="shoes"
              height={40}
              width={40}
              className="rounded-full"
            />
            <div className="ps-3">
              <p className="font-semibold text-sm">WOMEN'S HORSEBIT MULE</p>
              <p className="text-sm font-normal text-gray-100">#12345678</p>
            </div>
          </th>
          <td className=" px-6 py-4 text-sm text-gray-200">200</td>
          <td className=" px-6 py-4 text-sm text-gray-200">12,000₮</td>
        </tr>
      </tbody>
    </table>
  );
};

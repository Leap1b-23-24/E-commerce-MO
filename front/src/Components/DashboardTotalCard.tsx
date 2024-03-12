import { AttachMoney } from "@mui/icons-material";

export const DashboardTotalCard = () => {
  return (
    <div className="w-full bg-white rounded-xl px-6 py-4 flex flex-col gap-3 border">
      <div className="flex flex-row gap-[8px]">
        <AttachMoney />
        <p className="text-[#121316] text-[16px] font-semibold"> Орлого</p>
      </div>

      <p className="text-[#121316] text-[32px] font-bold ">235,000₮</p>

      <p className="text-[#5E6166] text-[14px]">Өнөөдөр</p>
    </div>
  );
};

import { Stack } from "@mui/material";
import { DashboardTotalCard } from "./DashboardTotalCard";

export const MerchantDashbaordMain = () => {
  const dashboardTotalItem = [
    { text: "Орлого" },
    { text: "Захиалга" },
    { text: "Хэрэглэгч" },
  ];
  const incomeCount = 400000;
  const orderCount = 1450;
  const userCount = 2460;
  return (
    <Stack>
      <Stack flexDirection={"row"} gap={3}>
        {dashboardTotalItem.map((item, index) => (
          <DashboardTotalCard
            key={index}
            text={item.text}
            incomeCount={incomeCount}
            orderCount={orderCount}
            userCount={userCount}
          />
        ))}
      </Stack>
    </Stack>
  );
};

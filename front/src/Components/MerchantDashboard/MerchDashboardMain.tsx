"use client";
import { Stack } from "@mui/material";
import { DashboardTotalCard } from "./DashboardTotalCard";
import { useData } from "../Providers/DataProvider";

export const MerchantDashbaordMain = () => {
  const dashboardTotalItem = [
    { text: "Орлого" },
    { text: "Захиалга" },
    { text: "Хэрэглэгч" },
  ];
  const { merchOrders } = useData();
  const incomeCount = 400000;
  const orderCount = 1450;
  const userCount = 2460;
  // const newOrders = merchOrders.map((item) => item.);
  // const sumCart = merchOrders..reduce((sum, currentValue) => {
  //   return sum + currentValue.productPrice * currentValue.orderQty;
  // }, 0);

  return (
    <Stack>
      <Stack
        onClick={() => {
          console.log("sss", merchOrders);
        }}
        flexDirection={"row"}
        gap={3}
      >
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

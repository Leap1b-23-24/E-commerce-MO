"use client";
import { LoadingPage } from "@/Components/LoadingPage";
import { MerchantDashbaordMain } from "@/Components/MerchantDashboard/MerchDashboardMain";
import { MerchantDashbaordChart1 } from "@/Components/MerchantDashboard/MerchantDashboardChart1";
import { MerchantDashbaordChart2 } from "@/Components/MerchantDashboard/MerchantDashboardChart2";
import { MerchantDashboardHeader } from "@/Components/MerchantDashboard/MerchantDashboardHeader";
import { MerchantDashboardLeft } from "@/Components/MerchantDashboard/MerchantDashboardLeft";
import { MerchantDashbaordTop } from "@/Components/MerchantDashboard/MerchantDashboardTop";
import { useAuth } from "@/Components/Providers/AuthProvider";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { api } from "../common/axios";
import { useEffect, useState } from "react";
import { string } from "yup";
type cartProduct = {
  productId: string;
  merchId: string;
  productName: string;
  productPrice: number;
  productImage: string[];
  productColor: string[];
  orderQty: Number;
};

type MerchOrdersType = {
  userId: string;
  status: string;
  deliveryAddress: {
    phone: string;
    firstName: string;
    latName: string;
    address: string;
    extra: string;
  };
  cartProduct: cartProduct[];
  sumCart: number;
  paymentType: string;
  createdAt: Date;
  updatedAt: Date;
};

export default function MerchantDashbaord() {
  const { isLogged } = useAuth();
  const [merchOrders, setMerchOrders] = useState([]);
  const getMerchOrders = async () => {
    try {
      const { data } = await api.get("order/getMerchOrders", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setMerchOrders(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const router = useRouter();
  if (!isLogged) {
    router.push("/MerchantSignin");
    return <LoadingPage />;
  }
  useEffect(() => {
    getMerchOrders();
  }, []);
  // console.log(merchOrders);
  return (
    <Stack>
      <MerchantDashboardHeader />
      <Stack flexDirection={"row"}>
        <Box minWidth={"222px"}>
          <MerchantDashboardLeft />
        </Box>
        <Stack
          pt={"34px"}
          pb={"66px"}
          gap={"34px"}
          px={3}
          width={1}
          bgcolor={"#F7F7F8"}
        >
          <MerchantDashbaordMain merchOrders={merchOrders} />
          <Stack flexDirection={"row"} gap={3}>
            <MerchantDashbaordTop />
            <Stack width={0.5} gap={3}>
              <MerchantDashbaordChart1 />
              <MerchantDashbaordChart2 />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

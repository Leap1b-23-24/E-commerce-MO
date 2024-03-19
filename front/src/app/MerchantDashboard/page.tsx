"use client";
import { LoadingPage } from "@/Components/LoadingPage";
import { MerchantDashbaordMain } from "@/Components/MerchDashboardMain";
import { MerchantDashbaordChart1 } from "@/Components/MerchantDashboardChart1";
import { MerchantDashbaordChart2 } from "@/Components/MerchantDashboardChart2";
import { MerchantDashboardHeader } from "@/Components/MerchantDashboardHeader";
import { MerchantDashboardLeft } from "@/Components/MerchantDashboardLeft";
import { MerchantDashbaordTop } from "@/Components/MerchantDashboardTop";
import { useAuth } from "@/Components/Providers/AuthProvider";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function MerchantDashbaord() {
  const { isLogged } = useAuth();

  const router = useRouter();
  if (!isLogged) {
    router.push("/Signin");
    return <LoadingPage />;
  }
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
          <MerchantDashbaordMain />
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

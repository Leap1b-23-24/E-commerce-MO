import { AddProducts } from "@/Components/AddProducts";
import { MerchantDashboardHeader } from "@/Components/MerchantDashboardHeader";
import { MerchantDashboardLeft } from "@/Components/MerchantDashboardLeft";
import { Box, Stack } from "@mui/material";

export default function AddProduct() {
  return (
    <Stack>
      <MerchantDashboardHeader />
      <Stack flexDirection={"row"}>
        <Box minWidth={"222px"}>
          <MerchantDashboardLeft />
        </Box>
        <Stack width={1} height={1}>
          <AddProducts />
        </Stack>
      </Stack>
    </Stack>
  );
}

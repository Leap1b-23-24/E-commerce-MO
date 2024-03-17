import { MerchantDashboardHeader } from "@/Components/MerchantDashboardHeader";
import { MerchantDashboardLeft } from "@/Components/MerchantDashboardLeft";
import { Box, Grid, Stack, Typography } from "@mui/material";

export default function Settings() {
  return (
    <Stack>
      <MerchantDashboardHeader />
      <Stack flexDirection={"row"}>
        <Box minWidth={"222px"}>
          <MerchantDashboardLeft />
        </Box>
      </Stack>
    </Stack>
  );
}

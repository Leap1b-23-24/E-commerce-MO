"use client";
import { AddProducts } from "@/Components/AddProducts";
import { MerchantDashboardHeader } from "@/Components/MerchantDashboardHeader";
import { MerchantDashboardLeft } from "@/Components/MerchantDashboardLeft";
import { ProductList } from "@/Components/ProductList";
import { Box, Stack } from "@mui/material";
import { useState } from "react";

export default function Product() {
  const [add, setAdd] = useState(false);
  return (
    <Stack>
      <MerchantDashboardHeader />
      <Stack flexDirection={"row"}>
        <Box minWidth={"222px"}>
          <MerchantDashboardLeft />
        </Box>
        <Stack width={1} height={1}>
          {!add && <ProductList setAdd={setAdd} />}
          {add && <AddProducts setAdd={setAdd} />}
        </Stack>
      </Stack>
    </Stack>
  );
}

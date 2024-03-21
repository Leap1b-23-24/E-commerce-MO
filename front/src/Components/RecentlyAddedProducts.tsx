"use client";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { CardMain } from "./CardMain";
import { useData } from "./Providers/DataProvider";

export const RecentlyAddedProducts = () => {
  const { allProducts } = useData();
  return (
    <Container maxWidth="lg">
      <Stack alignItems={"center"} mb={"119px"}>
        <Typography
          color={"#151875"}
          fontSize={42}
          fontWeight={800}
          mb={"53px"}
        >
          Шинээр нэмэгдсэн
        </Typography>
        <Grid container columnSpacing={"53px"} rowSpacing={"62px"}>
          {allProducts.map((item, index) => (
            <Grid item xs={3} key={index}>
              <Stack width={270}>
                <CardMain
                  productImage={item.productImage[0]}
                  productName={item.productName}
                  productPrice={item.productPrice}
                  productColor={item.productColor}
                />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

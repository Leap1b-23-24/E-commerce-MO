import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import Image from "next/image";

export const ShopCardShoes = () => {
  return (
    <Stack
      width={0.5}
      borderRadius={"12px"}
      flexDirection={"row"}
      overflow={"hidden"}
      boxShadow={1}
    >
      <Image src={"/shoes.png"} width={180} height={156} alt="card img" />
      <Stack bgcolor={"#e9ecef"} width={1} gap={"20px"} py={2} px={3}>
        <Stack gap={1}>
          <Typography fontSize={20} fontWeight={700} gutterBottom>
            WOMEN'S HORSEBIT MULE
          </Typography>
          <Stack fontSize={14} fontWeight={400} color={"secondary.light"}>
            <Typography>2024-01-20</Typography>
            <Typography>Бүтээгдэхүүний ID: 30349049903</Typography>
          </Stack>
        </Stack>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={0.5}
        >
          <Typography fontSize={16} fontWeight={400} color={"secondary.light"}>
            Тоо ширхэг: 3 * ₮125,700
          </Typography>
          <Typography fontSize={18} fontWeight={600} color={"secondary.dark"}>
            125,700 ₮
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

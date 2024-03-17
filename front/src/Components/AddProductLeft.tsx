"use client";
import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CustomInput } from "./Authentication/CustomInput";
import { Add, ImageOutlined } from "@mui/icons-material";
import { useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
export const AddProductLeft = () => {
  const [imageUrl, setImageUrl] = useState(["1", "2", "3", "4"]);
  return (
    <Stack gap={3} width={1}>
      <Stack bgcolor={"common.white"} p={3} borderRadius={1.5} gap={2}>
        <CustomInput
          label="Бүтээгдэхүүний нэр"
          type="text"
          placeholder="Нэр"
          labelWeight={600}
        />{" "}
        <CustomInput
          label="Нэмэлт мэдээлэл"
          type="textfield"
          placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
          labelWeight={600}
        />{" "}
        <CustomInput
          label="Барааны код"
          type="text"
          placeholder="#12345678"
          labelWeight={600}
        />
      </Stack>
      <Stack bgcolor={"common.white"} p={3} borderRadius={1.5} gap={2}>
        <Typography fontSize={18} fontWeight={600} color={"secondary.dark"}>
          Бүтээгдэхүүний зураг
        </Typography>
        <Grid container spacing={1} width={1} bgcolor={"green"}>
          {imageUrl.map((item, index) => (
            <Grid
              key={index}
              item
              xs={3}
              border={1}
              borderRadius={2}
              borderColor={"#D6D8DB"}
              style={{
                borderStyle: "dashed",
                aspectRatio: 1 / 1,
              }}
              bgcolor={"orange"}
              fontSize={"medium"}
              alignItems="center"
              justifyContent="center"
            >
              <ImageOutlined fontSize="inherit" />
            </Grid>
          ))}
          <IconButton component="label" sx={{ backgroundColor: "red" }}>
            <Add />
            <VisuallyHiddenInput sx={{ backgroundColor: "red" }} type="file" />
          </IconButton>
        </Grid>
      </Stack>
      <Stack
        flexDirection={"row"}
        bgcolor={"common.white"}
        p={3}
        borderRadius={1.5}
        gap={2}
        width={1}
      >
        <Stack width={0.5}>
          <CustomInput
            label="Үндсэн үнэ"
            type="text"
            placeholder="Үндсэн үнэ"
            labelWeight={600}
          />
        </Stack>
        <Stack width={0.5}>
          <CustomInput
            label="Үлдэгдэл тоо ширхэг"
            type="text"
            placeholder="Үлдэгдэл тоо ширхэг"
            labelWeight={600}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

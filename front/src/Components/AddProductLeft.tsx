"use client";
import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CustomInput } from "./Authentication/CustomInput";
import { Add, ImageOutlined } from "@mui/icons-material";
import { ChangeEventHandler, useState } from "react";

type AddProductLeftProps = {
  productName: string;
  productCode: string;
  productAdditional: string;
  productPrice?: undefined;
  productStocks?: undefined;
  handleChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  handleBlur?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
};

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
export const AddProductLeft = (props: AddProductLeftProps) => {
  const [imageUrl, setImageUrl] = useState([""]);
  const {
    productName,
    productCode,
    productAdditional,
    productPrice,
    productStocks,
    handleBlur,
    handleChange,
  } = props;
  return (
    <Stack gap={3} width={1}>
      <Stack bgcolor={"common.white"} p={3} borderRadius={1.5} gap={2}>
        <CustomInput
          label="Бүтээгдэхүүний нэр"
          type="text"
          placeholder="Нэр"
          labelWeight={600}
          name="productName"
          value={productName}
          onBlur={handleBlur}
          onChange={handleChange}
        />{" "}
        <CustomInput
          label="Нэмэлт мэдээлэл"
          type="textfield"
          placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
          labelWeight={600}
          name="productAdditional"
          value={productAdditional}
          onBlur={handleBlur}
          onChange={handleChange}
        />{" "}
        <CustomInput
          label="Барааны код"
          type="text"
          placeholder="#12345678"
          labelWeight={600}
          name="productCode"
          value={productCode}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Stack>
      <Stack bgcolor={"common.white"} p={3} borderRadius={1.5} gap={2}>
        <Typography fontSize={18} fontWeight={600} color={"secondary.dark"}>
          Бүтээгдэхүүний зураг
        </Typography>
        <Stack flexDirection={"row"} gap={1} flexWrap={"wrap"}>
          {imageUrl.map((item, index) => (
            <Stack
              border={1}
              borderRadius={2}
              borderColor={"#D6D8DB"}
              width={1 / 4}
              style={{
                borderStyle: "dashed",
                aspectRatio: 1 / 1,
              }}
              fontSize={"medium"}
              alignItems="center"
              justifyContent="center"
            >
              <ImageOutlined fontSize="inherit" />
            </Stack>
          ))}
          <Stack
            border={1}
            borderRadius={2}
            borderColor={"#D6D8DB"}
            width={1 / 4}
            style={{
              borderStyle: "dashed",
              aspectRatio: 1 / 1,
            }}
            fontSize={"medium"}
            alignItems="center"
            justifyContent="center"
          >
            <IconButton component="label" sx={{ backgroundColor: "#D6D8DB" }}>
              <Add />
              <VisuallyHiddenInput
                sx={{ backgroundColor: "red" }}
                type="file"
              />
            </IconButton>
          </Stack>
        </Stack>
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
            name="productPrice"
            value={productPrice}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Stack>
        <Stack width={0.5}>
          <CustomInput
            label="Үлдэгдэл тоо ширхэг"
            type="text"
            placeholder="Үлдэгдэл тоо ширхэг"
            labelWeight={600}
            name="productStocks"
            value={productStocks}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

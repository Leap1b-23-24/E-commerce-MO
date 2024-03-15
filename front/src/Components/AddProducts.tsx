"use client";
import {
  Add,
  ArrowBackIos,
  VerticalAlignTopRounded,
} from "@mui/icons-material";
import { Stack, TextField, Typography } from "@mui/material";
import { CustomInput } from "./Authentication/CustomInput";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";

export const AddProducts = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/drik9j46w/upload?upload_preset=uhxxcxye",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        setImageUrl(data.secure_url);
        toast.success("Image uploaded");
      } catch (error) {
        toast.error("Image upload error:");
      }
    }
  };
  return (
    <Stack bgcolor={"#F7F7F8"} width={"100%"} height={"100vh"}>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        fontSize={"16px"}
        width={1}
        p={2}
        bgcolor={"common.white"}
      >
        <ArrowBackIos fontSize="inherit" />
        <Typography
          fontSize={16}
          ml={"18px"}
          fontWeight={400}
          color={"secondary.dark"}
        >
          Бүтээгдэхүүн нэмэх
        </Typography>
      </Stack>
      <Stack flexDirection={"row"} padding={"34px 24px 21px 32px"}>
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
              type="text"
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
            <Stack flexDirection={"row"} width={1} gap={1}>
              <Stack
                border={1}
                borderRadius={2}
                borderColor={"#D6D8DB"}
                width={"125px"}
                height={"125px"}
                style={{
                  borderStyle: "dashed",
                }}
                overflow={"hidden"}
                position={"relative"}
              >
                <Image src={imageUrl} alt="productImg" fill />
              </Stack>
              <Stack
                width={"125px"}
                height={"125px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Stack
                  width={32}
                  height={32}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgcolor={"#ECEDF0"}
                  borderRadius={"50%"}
                  onClick={handleImageUpload}
                  overflow={"hidden"}
                >
                  <Stack
                    sx={{ backgroundImage: `url(${imageUrl})` }}
                    position={"absolute"}
                  >
                    <Add />
                  </Stack>
                  <TextField
                    sx={{ opacity: 0 }}
                    type="file"
                    onChange={handleImageChange}
                    variant="outlined"
                  ></TextField>
                </Stack>
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
        <Stack gap={3} width={1}></Stack>
      </Stack>
    </Stack>
  );
};

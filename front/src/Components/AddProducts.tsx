"use client";
import { ArrowBackIos } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import { AddProductLeft } from "./AddProductLeft";
import { AddProductRight } from "./AddProductRight";

type AddProductsProps = {
  setAdd: Dispatch<SetStateAction<boolean>>;
};
export const AddProducts = (props: AddProductsProps) => {
  const { setAdd } = props;
  const [imageUrl, setImageUrl] = useState(["1", "2", "3", "4"]);
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
          "https://api.cloudinary.com/v1_1/drik9j46w/upload?upload_preset=wco4x3yn",
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
    <Stack bgcolor={"#F7F7F8"} width={1} height={"100%"}>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        fontSize={"16px"}
        width={1}
        p={2}
        bgcolor={"common.white"}
      >
        <Stack
          onClick={() => {
            setAdd((prev) => !prev);
          }}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"secondary.dark"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          <ArrowBackIos fontSize="inherit" />
          <Typography fontSize={16} ml={"18px"} fontWeight={400}>
            Бүтээгдэхүүн нэмэх
          </Typography>
        </Stack>
      </Stack>
      <Stack
        flexDirection={"row"}
        height={1}
        gap={3}
        padding={"34px 24px 21px 32px"}
      >
        <AddProductLeft />
        <AddProductRight />
      </Stack>
      <Stack
        flexDirection={"row"}
        gap={3}
        pt={"21px"}
        pr={3}
        pb={"106px"}
        justifyContent={"end"}
      >
        <Button variant="outlined" color="secondary">
          <Typography color={"secondary.dark"}>Ноорог</Typography>
        </Button>
        <Button variant="contained" color="secondary">
          <Typography>Нийтлэх</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

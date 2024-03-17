"use client";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { CustomInput } from "./Authentication/CustomInput";
import { Add, ImageOutlined } from "@mui/icons-material";
import { useState } from "react";
import { AddBtn } from "./AddBtn";

export const AddProductRight = () => {
  const [imageUrl, setImageUrl] = useState(["1", "2", "3", "4"]);
  const productColor = ["#1D1F24", "#DCDDE0", "#8D887D"];
  const productSize = ["Xs", "S", "M"];
  return (
    <Stack gap={3} width={1}>
      <Stack bgcolor={"common.white"} p={3} borderRadius={1.5} gap={2}>
        <CustomInput
          label="Ерөнхий ангилал"
          type="text"
          placeholder="Сонгох"
          labelWeight={600}
        />
        <CustomInput
          label="Дэд ангилал"
          type="text"
          placeholder="Cонгох"
          labelWeight={600}
        />
      </Stack>
      <Stack bgcolor={"common.white"} p={3} borderRadius={1.5} gap={2}>
        <Typography fontSize={18} fontWeight={600} color={"secondary.dark"}>
          Төрөл
        </Typography>
        <Stack fontSize={14} fontWeight={400} color={"secondary.dark"} gap={1}>
          <Stack flexDirection={"row"} gap={3} alignItems={"center"}>
            <Typography>Өнгө</Typography>
            {productColor.map((item, index) => (
              <Stack
                key={index}
                bgcolor={item}
                p={2}
                borderRadius={"50%"}
                sx={{ aspectRatio: 1 / 1 }}
              ></Stack>
            ))}
            <AddBtn />
          </Stack>
          <Stack flexDirection={"row"} gap={3} alignItems={"center"}>
            <Typography>Хэмжээ</Typography>
            {productSize.map((item, index) => (
              <Stack
                key={index}
                bgcolor={"#ECEDF0"}
                width={"32px"}
                height={"32px"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Typography>{item}</Typography>
              </Stack>
            ))}
            <AddBtn />
          </Stack>
        </Stack>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ width: "fit-content" }}
        >
          <Typography color={"secondary.dark"}>Төрөл нэмэх</Typography>
        </Button>
      </Stack>
      <Stack
        flexDirection={"row"}
        bgcolor={"common.white"}
        p={3}
        borderRadius={1.5}
        gap={2}
        width={1}
      >
        <Stack width={1}>
          <CustomInput
            label="Таг"
            type="text"
            placeholder="Таг нэмэх..."
            labelWeight={600}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

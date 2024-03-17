"use client";
import { Add, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { IconNameDropdown } from "./IconNameDropdown";
import { CustomInput } from "./Authentication/CustomInput";
import { Dispatch, SetStateAction } from "react";

type ProductTabProps = {
  setAdd: Dispatch<SetStateAction<boolean>>;
};
const dropDown = [
  { icon: "category", name: "Ангилал" },
  { icon: "money", name: "Үнэ" },
  { icon: "calendar", name: "Сараар" },
];

export const ProductTab = (props: ProductTabProps) => {
  const { setAdd } = props;
  return (
    <Stack width={1} height={"100vh"} p={3}>
      <Button
        onClick={() => {
          setAdd((prev) => !prev);
        }}
        variant="contained"
        color="secondary"
        style={{
          width: "fit-content",
          padding: "12px 16px",
        }}
      >
        <Stack flexDirection={"row"} px={"29px"} gap={0.5}>
          <Add />
          <Typography fontSize={16} fontWeight={600}>
            Бүтээгдэхүүн нэмэх
          </Typography>
        </Stack>
      </Button>
      <Stack
        mt={3}
        display={"flex"}
        justifyContent={"space-between"}
        justifyItems={"stretch"}
        alignItems={"center"}
        flexDirection={"row"}
      >
        <Stack flexDirection={"row"} gap={"13px"}>
          {dropDown.map((item, index) => (
            <IconNameDropdown key={index} icon={item.icon} name={item.name} />
          ))}
        </Stack>
        <TextField
          placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
          type="search"
          color="secondary"
          inputProps={{
            style: {
              padding: "8px",
            },
          }}
          InputProps={{
            style: {
              width: "419px",
              backgroundColor: "#F7F7F8",
              padding: "0px",
            },
            startAdornment: (
              <InputAdornment position="start">
                <IconButton
                  sx={{
                    width: "6px",
                    height: "6px",
                    padding: "16px 24px",
                  }}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

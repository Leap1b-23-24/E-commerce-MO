"use client";
import { CheckBox, Star } from "@mui/icons-material";
import { Checkbox, Stack, Typography } from "@mui/material";
import { useData } from "../Providers/DataProvider";
const ratingList = [5, 4, 3, 2, 1];
export const FilterRating = () => {
  const { allProducts } = useData();
  return (
    <Stack gap={"5px"}>
      <Stack>
        <Typography
          color={"#151875"}
          fontSize={20}
          fontWeight={800}
          borderBottom={1}
          borderColor={"common.black"}
          sx={{ width: "fit-content" }}
        >
          Үнэлгээ
        </Typography>
      </Stack>
      {ratingList.map((item, index) => (
        <Stack
          key={index}
          flexDirection={"row"}
          alignItems={"center"}
          color={"#FFC107"}
        >
          <Checkbox
            defaultChecked
            sx={{
              color: "#FFC107",
              "&.Mui-checked": {
                color: "#FFC107",
              },
            }}
          />
          {ratingList.map((i, ind) => (
            <Star
              key={i}
              style={{ opacity: `${item < ind + 1 ? 0.2 : 1}` }}
              color={item < ind + 1 ? "secondary" : "inherit"}
            />
          ))}
          <Typography
            color={"common.black"}
            fontSize={12}
            fontWeight={800}
            ml={0.5}
          >
            {"342"}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

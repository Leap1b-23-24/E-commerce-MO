import { Stack, Typography } from "@mui/material";
import { CustomInput } from "./Authentication/CustomInput";
import { LeftButton } from "./Leftbutton";
import { NextBtn } from "./NextBtn";
import { Dispatch, SetStateAction } from "react";
type RegionInfoProps = {
  setStep: Dispatch<SetStateAction<number>>;
};
export const RegionInfo = (props: RegionInfoProps) => {
  const { setStep } = props;
  return (
    <Stack
      position={"absolute"}
      sx={{ transform: "translate(-50%,-50%)" }}
      top={"50%"}
      left={"50%"}
      maxWidth={"452px"}
      borderRadius={4}
      p={"24px"}
      gap={2}
      bgcolor={"common.white"}
    >
      <Typography fontSize={32} fontWeight={700} minWidth={"404px"}>
        Бүс нутгийн мэдээлэл
      </Typography>
      <Stack gap={"56px"}>
        <Stack gap={1}>
          <CustomInput label="Хот/Аймаг" placeholder="Сонгох" type="text" />
          <CustomInput
            label="Сум/Дүүрэг"
            placeholder="Сум/Дүүрэг"
            type="text"
          />
          <CustomInput label="Хороо" placeholder="Хороо" type="text" />
        </Stack>

        <Stack justifyContent={"space-between"} flexDirection={"row"}>
          <Stack
            onClick={() => {
              setStep(0);
            }}
          >
            <LeftButton />
          </Stack>
          <Stack
            onClick={() => {
              setStep(2);
            }}
          >
            <NextBtn />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

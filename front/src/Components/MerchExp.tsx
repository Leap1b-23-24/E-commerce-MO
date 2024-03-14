import { Stack, Typography } from "@mui/material";
import { CustomInput } from "./Authentication/CustomInput";
import { LeftButton } from "./Leftbutton";
import { NextBtn } from "./NextBtn";
import { Dispatch, SetStateAction } from "react";
type MerchExpProps = {
  setStep: Dispatch<SetStateAction<number>>;
};
export const MerchExp = (props: MerchExpProps) => {
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
      color={"secondary.dark"}
    >
      <Typography fontSize={32} fontWeight={700} minWidth={"404px"}>
        Жоохон танилцья
      </Typography>
      <Typography fontSize={16} fontWeight={400}>
        Энэ мэдээллийг дэлгүүрийн тохиргоонд туслах зорилгоор ашиглана.
      </Typography>
      <Stack gap={"56px"}>
        <Stack gap={1}>
          <CustomInput
            label="Та борлуулалт хийж байсан туршлагатай юу?"
            placeholder="Сонгох"
            type="text"
          />
          <CustomInput
            label="Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?"
            placeholder="Сонгох"
            type="text"
          />
        </Stack>

        <Stack justifyContent={"space-between"} flexDirection={"row"}>
          <Stack
            onClick={() => {
              setStep(1);
            }}
          >
            <LeftButton />
          </Stack>
          <Stack
            onClick={() => {
              setStep(-1);
            }}
          >
            <NextBtn />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

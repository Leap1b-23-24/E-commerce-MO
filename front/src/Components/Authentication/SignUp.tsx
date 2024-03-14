import Image from "next/image";
import { CustomInput } from "./CustomInput";
import { NextBtn } from "../NextBtn";
import { Container, Divider, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { SetFlag } from "yup";
type SignUpProps = {
  setStep: Dispatch<SetStateAction<number>>;
};
const loginSelect = [
  { logo: "/google.png", text: "Google-ээр нэвтрэх" },
  { logo: "/microsoft.png", text: "Microsoft-оор нэвтрэх" },
  { logo: "/apple.png", text: "Apple-аар нэвтрэх" },
];

export const SignUp = (props: SignUpProps) => {
  const { setStep } = props;
  return (
    <Stack
      minWidth="440px"
      bgcolor={"common.white"}
      border={1}
      borderRadius={2}
      borderColor={"#ECEDF0"}
      p={5}
      gap={3}
    >
      <Typography
        textAlign={"center"}
        fontSize={32}
        fontWeight={700}
        color={"secondary.main"}
      >
        Бүртгүүлэх
      </Typography>
      <Stack gap={2}>
        <CustomInput label="Таны имэйл" placeholder="Имэйл" type="text" />
        <CustomInput label="Таны нэр" placeholder="Нэр" type="text" />
        <CustomInput
          label="Нууц үг"
          placeholder="Нууц үг оруулах"
          type="text"
        />
        <CustomInput
          label="Нууц үг давтах"
          placeholder="Нууц үг давтах"
          type="text"
        />

        <Stack
          onClick={() => {
            setStep(0);
          }}
        >
          <NextBtn />
        </Stack>
        <Divider sx={{ marginY: "16px" }} />
        <Stack gap={2}>
          {loginSelect.map((item, index) => (
            <Stack
              key={index}
              flexDirection={"row"}
              borderRadius={1}
              bgcolor={"#1C20240A"}
              py={1.5}
              px={2}
              gap={0.5}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
            >
              <Stack position={"relative"} width={24} height={24}>
                <Image src={item.logo} alt="google logo" fill sizes="small" />
              </Stack>
              <Typography py={0.25} px={0.5}>
                {item.text}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Divider sx={{ marginY: "16px" }} />
        <Stack
          flexDirection={"row"}
          fontSize={14}
          fontWeight={400}
          py={1}
          gap={0.5}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography color={"#525252"}>Бүртгэлтэй юу?</Typography>
          <Typography
            sx={{ cursor: "pointer" }}
            className="underline underline-offset-4 cursor-pointer "
          >
            Нэвтрэх
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

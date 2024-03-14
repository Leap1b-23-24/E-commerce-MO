"use client";
import { SignUp } from "@/Components/Authentication/SignUp";
import { Steps } from "@/Components/Authentication/Steps";
import { MerchantName } from "@/Components/MerchantName";
import { RegionInfo } from "@/Components/RegionInfo";
import { MerchExp } from "@/Components/MerchExp";
import { Stack, StepConnector, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  userName: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
  password: yup.string().required(),
  repassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Нууц үг адил биш байна!")
    .required(),
});

export default function Signup() {
  const [step, setStep] = useState(-1);
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      merchName: "",
      city: "",
      district: "",
      khoroo: "",
      experience: "",
      password: "",
      repassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values.userName);
    },
  });
  return (
    <Stack
      sx={{ height: "100vh" }}
      justifyContent={step < 0 ? "space-between" : "start"}
    >
      <Stack mt={"44px"} ml={"44px"}>
        <Image alt="logo" src="/pinecone.png" width={194} height={32} />
      </Stack>

      {Boolean(step >= 0) && (
        <Stack width={1} alignItems={"center"}>
          <Stack mt={"41px"} minWidth={"792px"}>
            <Steps step={step} />
          </Stack>
        </Stack>
      )}

      {Boolean(step < 0) && (
        <Stack alignItems={"center"} width={1} mt={"58px"}>
          <SignUp setStep={setStep} />
        </Stack>
      )}

      {Boolean(step == 0) && <MerchantName setStep={setStep} />}
      {Boolean(step == 1) && <RegionInfo setStep={setStep} />}
      {Boolean(step == 2) && <MerchExp setStep={setStep} />}

      {Boolean(step < 0) && (
        <Typography
          textAlign={"center"}
          fontSize={12}
          fontWeight={400}
          color={"#1C20243D"}
          mb={"14px"}
        >
          © 2023 Pinecone
        </Typography>
      )}
    </Stack>
  );
}

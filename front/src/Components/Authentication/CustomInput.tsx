import { Stack, TextField, Typography } from "@mui/material";

type CustomInputProps = {
  label: string;
  type: string;
  placeholder: string;
};
export const CustomInput = (props: CustomInputProps) => {
  return (
    <Stack gap={1}>
      <Typography fontSize={16} fontWeight={600} color={"secondary.dark"}>
        {props.label}
      </Typography>
      <TextField
        sx={{
          px: "2px",
          py: "2px",
          backgroundColor: "#[#F7F7F8]",
        }}
        placeholder={props.placeholder}
        type={props.type}
      />
    </Stack>
  );
};

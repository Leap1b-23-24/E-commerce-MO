import { ArrowForward } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
type NextBtnProps = {
  disabled?: boolean;
};

export const NextBtn = (props: NextBtnProps) => {
  const { disabled } = props;
  return (
    <Button
      variant="contained"
      color="secondary"
      disableElevation={false}
      endIcon={<ArrowForward />}
      sx={{ py: "16px", px: "20px" }}
      disabled={disabled}
    >
      <Typography width={1}>Дараах</Typography>
    </Button>
  );
};

import { Button, Rating, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useData } from "./Providers/DataProvider";
import { useState } from "react";
const validationSchema = yup.object({
  comment: yup.string(),
});
type ProductRatingProps = {
  productId?: string;
};

export const ProductRating = (props: ProductRatingProps) => {
  const { productId } = props;
  const { addReview } = useData();
  const [star, setStar] = useState(0);
  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      addReview(productId || "", star, values.comment);
    },
  });
  return (
    <Stack>
      <Stack gap={3}>
        <Typography gap={3} color={"#1D3178"} fontSize={18} fontWeight={800}>
          Үнэлгээ нэмэх
        </Typography>
        <Stack
          width={1}
          py={6}
          px={3}
          gap={"41px"}
          borderRadius={"8px"}
          bgcolor={"common.white"}
        >
          <Stack width={1} borderBottom={2} borderColor={"#BFC6E0"}>
            <Rating
              name="rating"
              value={star}
              onChange={(event, newValue) => {
                setStar(newValue || 0);
              }}
            />
          </Stack>
          <Stack width={1} borderBottom={2} borderColor={"#BFC6E0"}>
            <TextField
              type="text"
              placeholder="Сэтгэгдэл бичих"
              name="comment"
              value={formik.values.comment}
              onChange={formik.handleChange}
              sx={{
                "& fieldset": { border: "none" },
              }}
            />
          </Stack>
          <Stack width={1} alignItems={"end"}>
            <Button
              onClick={() => {
                formik.handleSubmit();
              }}
              color="success"
              variant="contained"
              sx={{ width: "fit-content" }}
            >
              <Typography>Үнэлэх</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

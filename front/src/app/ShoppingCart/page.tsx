import { Cart } from "@/Components/Cart";
import { Container, Stack } from "@mui/material";

export default function ShoppingCart() {
  return (
    <Stack>
      <Container maxWidth="lg">
        <Cart />
      </Container>
    </Stack>
  );
}

"use client";
import { AllProducts } from "@/Components/AllProducts";
import { Footer } from "@/Components/Header/Footer";
import { Header } from "@/Components/Header/Header";
import { Navbar } from "@/Components/Header/Navbar";
import { ListProducts } from "@/Components/ListProducts";
import { ViewList, Window } from "@mui/icons-material";
import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Category() {
  const [listView, setListView] = useState(false);
  return (
    <Stack minHeight={"100vh"}>
      <Header />
      <Stack width={1} flex={1} bgcolor="#F7F7F8">
        <Navbar />
        <Container maxWidth="lg">
          <Stack flexDirection={"row"} justifyContent={"space-between"} mt={3}>
            <Stack gap={"3px"}>
              <Typography fontSize={22} fontWeight={800} color={"#151875"}>
                Ecommerce Acceories & Fashion item{" "}
              </Typography>
              <Typography color="#8A8FB9" fontSize={12} fontWeight={400}>
                About 9,620 results (0.62 seconds)
              </Typography>
            </Stack>
            <Stack flexDirection={"row"} gap={3} alignItems={"center"}>
              <Stack flexDirection={"row"} alignItems={"center"} gap={"9.83px"}>
                <Typography color={"3F509E"} fontSize={16} fontWeight={400}>
                  Per page:
                </Typography>
                <TextField
                  type="number"
                  inputProps={{
                    style: {
                      padding: "2px",
                      width: "56px",
                    },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: "#F7F7F8",
                    },
                  }}
                />
              </Stack>
              <Stack
                onClick={() => {
                  setListView((prev) => !prev);
                }}
                flexDirection={"row"}
                alignItems={"center"}
                gap={"9.83px"}
              >
                <Typography color={"3F509E"} fontSize={16} fontWeight={400}>
                  Sort By:
                </Typography>
                {/* <TextField
                  type="select"
                  select
                  inputProps={{
                    style: {
                      padding: "2px",
                    },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: "#F7F7F8",
                    },
                  }}
                /> */}
              </Stack>
              <Stack
                mr={3}
                flexDirection={"row"}
                alignItems={"center"}
                gap={"9.83px"}
              >
                <Typography color={"3F509E"} fontSize={16} fontWeight={400}>
                  View:
                </Typography>
                <Stack
                  fontSize={"20px"}
                  color={"#151875"}
                  flexDirection={"row"}
                  minHeight={1}
                  width={1}
                  height={3}
                  alignItems={"center"}
                  gap={"5.12px"}
                  sx={{ cursor: "move" }}
                >
                  <Stack
                    onClick={() => {
                      setListView(true);
                    }}
                    sx={{ cursor: "pointer" }}
                  >
                    <Window fontSize="inherit" color="inherit" />
                  </Stack>
                  <Stack
                    onClick={() => {
                      setListView(false);
                    }}
                    sx={{ cursor: "pointer" }}
                  >
                    <ViewList fontSize="medium" color="inherit" />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Box display={"flex"} flexDirection={"row"} width={1}>
            <Stack width={"30%"} overflow={"scroll"}>
              fefasdfghjhgkjhkjhfhgkgkgkjgkhkjhkjhggkjgkhgkjhkjgjhghgjhgjhjfj
            </Stack>
            <Stack alignItems={"center"} justifyContent={"center"}>
              {listView ? <AllProducts column={4} /> : <ListProducts />}
            </Stack>
          </Box>
        </Container>
      </Stack>
      <Footer />
    </Stack>
  );
}

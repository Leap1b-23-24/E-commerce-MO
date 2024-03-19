"use client";
import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Stack } from "@mui/material";
import { useData } from "./Providers/DataProvider";

const columns: GridColDef[] = [
  {
    field: "productName",
    headerName: "Бүтээгдэхүүн",
    type: "string",
    minWidth: 120,
  },
  {
    field: "productCategory",
    headerName: "Ангилал",
    type: "string",
    minWidth: 120,
  },
  { field: "productPrice", headerName: "Үнэ", type: "number", width: 80 },
  {
    field: "productStocks",
    headerName: "Үлдэгдэл",
    type: "number",
    minWidth: 120,
  },
  {
    field: "productSoldQty",
    headerName: "Зарагдсан",
    type: "number",
    minWidth: 120,
  },
  {
    field: `updatedAt`,
    headerName: "Нэмсэн огноо",
    type: "number",
    minWidth: 120,
  },
];

export const ProducListTable = () => {
  const { products } = useData();
  console.log(products);
  return (
    <Stack mt={2} overflow={"scroll"}>
      <DataGrid
        getRowId={() => products[0]?._id}
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 20 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Stack>
  );
};

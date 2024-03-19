"use client";
import { api } from "@/app/common/axios";
import { AxiosError } from "axios";
import {
  useContext,
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { toast } from "react-toastify";

type DataContextType = {
  addProduct: (
    productName: string,
    productAdditional: string,
    productCode: string,
    productImage: string[],
    productPrice: number,
    productStocks: number,
    productCategory: string,
    productSubCategory: string,
    productColor: string[],
    productSize: string[],
    productTag: string[]
  ) => void;
};
const DataContext = createContext<DataContextType>({} as DataContextType);

//Add product function
const addProduct = async (
  productName: string,
  productAdditional: string,
  productCode: string,
  productImage: string[],
  productPrice: number,
  productStocks: number,
  productCategory: string,
  productSubCategory: string,
  productColor: string[],
  productSize: string[],
  productTag: string[]
) => {
  try {
    const { data } = await api.post(
      "product/addProduct",
      {
        productName,
        productAdditional,
        productCode,
        productImage,
        productPrice,
        productStocks,
        productCategory,
        productSubCategory,
        productColor,
        productSize,
        productTag,
      },
      { headers: { Authorization: localStorage.getItem("token") } }
    );
    toast.success(data.message, {
      position: "top-center",
      hideProgressBar: true,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.message ?? error.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    }
    console.log(error), "FFF";
  }
};

export const DataProvider = ({ children }: PropsWithChildren) => {
  return (
    <DataContext.Provider
      value={{
        addProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);

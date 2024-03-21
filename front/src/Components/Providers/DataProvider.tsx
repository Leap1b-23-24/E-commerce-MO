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
import { useAuth } from "./AuthProvider";
type ProductType = {
  _id: string;
  merchId: string;
  productName: string;
  productAdditional: string;
  productCode: string;
  productImage: string[];
  productPrice: number;
  productStocks: number;
  productCategory: string;
  productSubCategory: string;
  productColor: string[];
  productSize: string[];
  productTag: string[];
  productSoldQty: number;
  updatedAt: string;
  createdAt: string;
  __v: number;
};

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
    productTag: string[],
    editId: string
  ) => void;
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
  getProducts: () => void;
  deleteProduct: (productId: string) => void;
  numberFormatter: Intl.NumberFormat;
  add: boolean;
  setAdd: Dispatch<SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};
const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [add, setAdd] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { isLogged, refresh, setRefresh } = useAuth();

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

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
    productTag: string[],
    editId: string
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
          editId,
        },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      setRefresh((prev) => prev + 1);
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

  const getProducts = async () => {
    try {
      const { data } = await api.get("product/getProducts", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      setProducts(data);

      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const deleteProduct = async (productId: string) => {
    try {
      const { data } = await api.post(
        "product/deleteProduct",
        { productId },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );

      setRefresh((prev) => prev + 1);

      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  useEffect(() => {
    getProducts();
  }, [isLogged, refresh]);
  return (
    <DataContext.Provider
      value={{
        addProduct,
        products,
        setProducts,
        getProducts,
        numberFormatter,
        deleteProduct,
        add,
        setAdd,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);

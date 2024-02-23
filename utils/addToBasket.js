import axios from "axios";
import { Server } from "../config";
import { toast } from "react-toastify";

export const addToBasket = async (productId) => {
  try {
    await axios.post(
      `${Server.URL}/basket/add`,
      { productId },
      {
        withCredentials: true,
      }
    );
    toast.success("به سبد خرید اضافه شد.", { theme: "light" });
    // fetchBasket();
  } catch (error) {
    console.error("Error adding to basket:", error);
    toast.error(error?.response?.data?.message,{ theme: "dark" });
  }
};

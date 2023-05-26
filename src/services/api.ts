import axios from "axios";

const BASE_URL = "https://voodoo-sandbox.myshopify.com/products.json?limit=12";

export const fetchData = async () => {
  //@ts-ignore
  const { data } = await axios.get(BASE_URL);

  return data;
};

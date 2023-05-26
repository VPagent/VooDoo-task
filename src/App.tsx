import { FC, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import useItemsContext from "./context/ItemsContext";
import { fetchData } from "./services/api";

const App: FC = () => {
  const { items, changeItems } = useItemsContext();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();

      changeItems(data.products);
    };
    try {
      getData();
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  return (
    <div className="App flex flex-col grow">
      <HomePage />
    </div>
  );
};

export default App;

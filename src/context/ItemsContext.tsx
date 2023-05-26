import { FC, ReactNode, createContext, useContext, useState } from "react";
import _ from "lodash";

const ItemsContext = createContext({
  items: [],
  changeItems: _.noop,
});

type Props = {
  children: ReactNode;
};

export const ItemsProvider: FC<Props> = ({ children }) => {
  const [items, setItems] = useState(null);

  const changeItems = (value: any) => {
    setItems(value);
  };

  return (
    //@ts-ignore
    <ItemsContext.Provider value={{ items, changeItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

const useItemsContext = () => {
  return useContext(ItemsContext);
};

export default useItemsContext;

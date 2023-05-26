import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  return (
    <div className=" container flex flex-col px-[6px] mx-auto mobile:w-[320px] tablet:w-[768px] desktop:w-[1100px]">
      {children}
    </div>
  );
};

export default Container;

import { FC } from "react";
import Container from "../Container/Container";
import { ReactComponent as Logo } from "../../images/icons/logo.svg";

const Header: FC = () => {
  return (
    <header className="p-[24px] border-b-[1px] border-solid border-[#000000]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-start ">
            <span className=" flex flex-row justify-center items-center w-[23px] h-[23px] border-[2px] border-[#000000] rounded-[25px] font-bold">
              V
            </span>
            <Logo className="ml-[4px]" />
          </div>
          <div className="flex flex-row font-[600] text-[14px] leading-[18px]">
            <button className="flex flex-row justify-start items-center px-[12px] py-[8px]  pl-[0px]">
              About us
            </button>
            <button className="flex flex-row justify-center items-center rounded-[4px] px-[12px] py-[8px] bg-[black] text-[white] ">
              Sign-up
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

import { ChangeEvent, FC, useState } from "react";
import Container from "../Container/Container";
import useItemsContext from "../../context/ItemsContext";
import ListItem from "../ListItem/ListItem";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as Chevron } from "../../images/icons/chevronDown.svg";

const Main: FC = () => {
  const { items, changeItems } = useItemsContext();
  const [userEmail, setUserEmail] = useState("");

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <section className="pt-[24px] pb-[130px]">
      <Container>
        <div className="flex flex-row items-center p-[20px] bg-[black] rounded-[4px] text-[white]">
          <p className="flex flex-row  justify-between items-center font-[700] text-[16px]">
            <span className="flex flex-row items-center justify-center w-[24px] h-[24px] border-[2px] border-[white] rounded-[20px] mr-[4px]">
              !
            </span>
            ALPHA
          </p>
          <p className="font-[500] text-[14px] ml-[24px] ">
            important info{" "}
            {isTablet && <span className="">regarding our service</span>}
          </p>
          <Chevron className="fill-[white] w-[24px] h-[auto] ml-[auto]" />
        </div>
        <div
          className="tablet:flex tablet:flex-row tablet:flex-wrap  tablet:justify-center tablet:[&>*:nth-child(1n)]:mr-[20px]
        desktop:[&>*:nth-child(4n)]:mr-[0px]"
        >
          {items &&
            items.map((item: any) => <ListItem key={item.id} item={item} />)}
        </div>
        <div className="mt-[98px]">
          <p className="font-[400] text-[14px]">
            Be the first one to know when we launch our beta!
          </p>
          <div className="flex flex-row items-center mt-[24px] font-[600] text-[16px] desktop:px-[320px]">
            <input
              className="h-[42px]  w-[auto] mr-[12px] rounded-[4px] pl-[16px] placeholder:text-[black] tablet:grow"
              onChange={handleChangeInput}
              type="text"
              placeholder="E-mail"
              value={userEmail}
            />
            <button
              className="flex flex-row  px-[10px] py-[8px] h-[42px] bg-[#ED5E21] text-[black] rounded-[4px] "
              type="button"
            >
              Sign-up
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Main;

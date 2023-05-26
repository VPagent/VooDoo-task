import { FC } from "react";
import { ReactComponent as CloseCircle } from "../../images/icons/closeCircle.svg";
import { ReactComponent as OkCircle } from "../../images/icons/ok.svg";

type Props = {
  variant: any;
};

const SingleVariant: FC<Props> = ({ variant }) => {
  return (
    <div className="flex flex-row justify-between bg-[#BFBFBE] rounded-[10px] p-[6px] mt-[10px] desktop:p-[10px]">
      <div className="flex flex-col">
        <p className="font-bold">{variant.title}</p>
        <p className="font-bold">{variant.price}$</p>
      </div>
      <div className="flex flex-col">
        <p className="flex flex-row items-center justify-between text-[15px] ">
          Available:
          <span>
            {variant.available ? (
              <OkCircle className="w-[20px] h-[20px] fill-[#62F24E]" />
            ) : (
              <CloseCircle className="w-[20px] h-[20px] fill-[red]" />
            )}
          </span>
        </p>
        <p className="flex flex-row items-center justify-between text-[15px]">
          Req shipping:
          <span>
            {variant.requires_shipping ? (
              <OkCircle className="w-[20px] h-[20px] fill-[#62F24E]" />
            ) : (
              <CloseCircle className="w-[20px] h-[20px] fill-[red]" />
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SingleVariant;

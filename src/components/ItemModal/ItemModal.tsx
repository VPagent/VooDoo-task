import { FC } from "react";
import Modal from "../Modal/Modal";
import SingleVariant from "../SingleVariant/SingleVariant";

type Props = {
  item: any;
  onClose: () => void;
};
const ItemModal: FC<Props> = ({ item, onClose }) => {
  const { images, title, options, variants } = item;
  return (
    <Modal onClose={onClose}>
      <div className=" flex flex-col w-[100%] h-[100%] rounded-[10px] tablet:flex-row overflow-hidden pb-[20px]">
        <div className="tablet:w-[50%]">
          <div className="relative flex flex-col">
            <img className="" src={images[0].src} alt={images[0].id} />
            <div className=" absolute bottom-0 left-0 flex flex-row justify-center h-[30px] w-[100%]">
              <p className=" font-bold">{title}</p>
            </div>
          </div>
          <div className="textPart flex flex-col bg-[white] w-[100%] px-[20px] rounded-b-[10px]">
            {options?.[0]?.values && (
              <div className="sizes part flex flex-row justify-between items-center mt-[6px]  ">
                <p className="font-medium max-w-[30%] ">Sizes:</p>
                <div className="flex max-w-[70%] ">
                  {options?.[0]?.values.map((size: string, index: number) => (
                    <p
                      className="flex justify-center items-center py-[2px] px-[4px] bg-[#F26B4E]  ml-[4px] first:ml-0 rounded-[4px]"
                      key={`${size + index}`}
                    >
                      {size}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {options?.[1]?.values && (
              <div className="colors part flex flex-row justify-between items-center mt-[6px]">
                <p className="font-medium max-w-[30%]">Colors:</p>
                <div className="flex max-w-[70%]">
                  {options?.[1]?.values.map((color: string, index: number) => (
                    <p
                      className="flex justify-center items-center py-[2px] px-[4px] bg-[#F26B4E] ml-[4px] first:ml-0 rounded-[4px]"
                      key={`${color + index}`}
                    >
                      {color}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {options?.[2]?.values && (
              <div className="elements part flex flex-row justify-between items-center mt-[6px]">
                <p className="font-medium max-w-[30%]">Elements:</p>
                <div className="flex max-w-[70%]">
                  {options?.[2]?.values.map(
                    (element: string, index: number) => (
                      <p
                        className="flex justify-center items-center py-[2px] px-[4px] bg-[#F26B4E] ml-[4px] first:ml-0 rounded-[4px]"
                        key={`${element + index}`}
                      >
                        {element}
                      </p>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="px-[20px]  tablet:w-[50%] tablet:pt-[20px] ">
          {!!variants?.length && (
            <div className="">
              <p className="font-medium max-w-[30%] text-start">Variants:</p>
              <div className="h-[200px] overflow-y-scroll rounded-[4px] tablet:h-[400px] desktop:h-[600px]">
                {variants.map((variant: any) => (
                  <SingleVariant key={variant.id} variant={variant} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ItemModal;

import { FC, useState } from "react";
import Modal from "../Modal/Modal";
import ItemModal from "../ItemModal/ItemModal";

type Props = {
  item: any;
};
const ListItem: FC<Props> = ({ item }) => {
  const { title, images, product_type, content } = item;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  console.log(item);
  return (
    <>
      <div className="card relative flex flex-col items-center mt-[48px] tablet:w-[320px] tablet:first:mr-[20px] desktop:w-[256px]">
        <div className="imagePart border-[1px] border-solid border-[#000000] rounded-[4px]">
          <button
            className="p-[8px] bg-[#000000] text-[#ffffff] rounded-[4px] absolute top-[12px] left-[12px]"
            onClick={handleOpenModal}
          >
            Used
          </button>
          <img src={images[0].src} alt={images[0].id} />
        </div>
        <div className="textInfoBox flex justify-between tablet:grow py-[12px] w-[100%] text-sm">
          <div className="flex flex-col items-start max-w-[60%]">
            <p className="font-bold ">Product name:</p>
            <p className="font-bold text-start">{title}</p>
          </div>

          <div className="flex flex-col items-end max-w-[40%]">
            <p className="font-medium text-end">Product type:</p>
            <p className="font-normal text-end">
              {product_type ? product_type : "no type"}
            </p>
          </div>
        </div>
        <button className=" flex justify-center items-center w-[100%] py-[16px] text-[#ffffff] bg-[#000000] rounded-[4px]">
          PICK-UP IN 2200
        </button>
      </div>
      {isModalOpen && (
        <ItemModal onClose={handleCloseModal} item={item}></ItemModal>
      )}
    </>
  );
};

export default ListItem;

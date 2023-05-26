import { FC, ReactNode, useEffect } from "react";
import { ReactComponent as Close } from "../../images/icons/close.svg";

const portal = document.getElementById("portal")!;

type Props = {
  children: ReactNode;
  onClose: () => void;
};

const Modal: FC<Props> = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [onClose]);

  const handleBackDropClick = (event: any) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="opacityBcg fixed  top-0 left-0 w-[100vw] h-[100vh] z-[1]"
      onClick={handleBackDropClick}
    >
      <div
        className="modal absolute top-[50%] left-[50%] z-[1] flex translate-y-[-50%] translate-x-[-50%] mobile:w-[300px] tablet:w-[700px] h-[auto] bg-white rounded-[10px]
      desktop:w-[900px] desktop:h-[auto]"
      >
        <button
          type="button"
          className="absolute top-[5px] right-[5px] z-[2] flex justify-center items-center w-[30px] h-[30px] p-[4px]"
          onClick={onClose}
        >
          <Close />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

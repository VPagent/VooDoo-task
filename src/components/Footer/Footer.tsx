import { FC } from "react";
import Container from "../Container/Container";
import { ReactComponent as BigLogo } from "../../images/icons/bigLogo.svg";

const Footer: FC = () => {
  return (
    <footer className="bg-[white] mt-[auto]">
      <Container>
        <div className="px-[40px] py-[48px] font-[700] text-[14px] desktop:flex desktop:flex-row-reverse desktop:items-center desktop:px-[0px]">
          <div className="tablet:flex tablet:flex-row tablet:justify-between tablet:items-start desktop:grow desktop:justify-between">
            <div className="flex flex-col items-start desktop:w-[256px] desktop:mr-[20px]">
              <a className="" href="">
                FAQ
              </a>
              <a className="mt-[16px]" href="">
                RETURNS
              </a>
              <a className="mt-[16px]" href="">
                CONTACT
              </a>
            </div>
            <div className="flex flex-col items-start mt-[48px] tablet:mt-[0px] desktop:w-[256px] desktop:mr-[20px]">
              <a href="">TERMS & CONDITIONS</a>
              <a className="mt-[16px]" href="">
                PRIVACY POLICY
              </a>
              <a className="mt-[16px]" href="">
                COOKIE POLICY
              </a>
              <a className="mt-[16px]" href="">
                COOKIE SETTINGS
              </a>
            </div>
            <div className="flex flex-col items-start mt-[48px] tablet:mt-[0px] desktop:w-[256px]">
              <a href="">ABOUT VOODOO</a>
              <a className="mt-[16px]" href="">
                CAREER
              </a>
              <a className="mt-[16px]" href="">
                FACEBOOK
              </a>
              <a className="mt-[16px]" href="">
                INSTAGRAM
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center mt-[48px] desktop:mr-[auto] desktop:w-[256px] desktop:mt-[0px] desktop:mr-[20px]">
            <BigLogo />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

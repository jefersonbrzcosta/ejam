import { MoreInfoCard } from "./MoreInfoCard";
import { RejectionLinkButton } from "./RejectionLinkButton";
import ButtonArrow from "../assets/icons/button-arrow.svg?react";

export const GetDiscountButton = () => {
  return (
    <div className="w-full flex flex-col">
      <button className="rounded-[50px] max-[721px]:text-[14px] bg-[#59AE43] font-bold py-[16px] px-[64px] text-[20px] text-white flex max-[721px]:gap-4 gap-[19.76px] w-full justify-center max-[721px]:justify-center uppercase cursor-pointer">
        <p className="max-[721px]:max-w-[207px] max-[721px]:w-Screen whitespace-nowrap">
          Yes - Claim my discount
        </p>
        <ButtonArrow className="mt-[6px] p-0 max-[721px]:mt-[3px] max-[721px]:min-w-[12px]" />
      </button>
      <MoreInfoCard />
      <RejectionLinkButton />
    </div>
  );
};

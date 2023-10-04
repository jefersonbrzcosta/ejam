import Lock from "../assets/icons/lock.svg?react";
import CreditCards from "../assets/icons/credit-cards.svg?react";
import { useMediaQuery } from "../hooks/useMediaQuery";

export const MoreInfoCard = () => {
  const { isPhone } = useMediaQuery();
  return (
    <div className="border border-[#CFCFCF] px-4 justify-between rounded flex py-2 mt-3 max-[721px]:flex-wrap">
      <div className="max-[721px]:p-0 flex-grow px-4 min-[721px]:pt-1 max-[721px]:pt-3 max-[721px]:w-auto max-[720px]:mx-auto max-[721px]:max-h-3 h-[12px] flex justify-center ">
        <p className="text-[#4D5254] whitespace-nowrap text-xs capitalize h-[12px] p-0 max-[721px]:-mt-[9px] -mt-[3px]">
          Free shipping
        </p>
      </div>
      <div className="w-[1px] mx-2 min-[722px]:mx-0 min-[722px]:mx-auto h-[14px] bg-[#CFCFCF] mt-1" />
      <div className="max-[721px]:mt-[7px] min-[722px]:px-5 flex-grow min-[721px]:pt-2 max-[721px]:w-auto flex items-center justify-center max-[721px]:gap-2 gap-[10px] h-[12px]">
        <Lock className="max-[721px]:min-w-[12px] max-[721px]:min-h-[12px]" />
        <p className="text-[#4D5254] text-xs whitespace-nowrap capitalize">
          Secure 256-bit SSL encryption.
        </p>
      </div>
      {!isPhone && (
        <div className="w-[1px] min-[722px]:mx-0 mx-2 h-[14px] bg-[#CFCFCF] mt-1" />
      )}
      <div className="pl-4 flex justify-center max-[721px]:border-t max-[721px]:mt-3 max-[721px]:pt-3 max-[721px]:w-full max-[721px]:mb-4 h-[12px]">
        <CreditCards />
      </div>
    </div>
  );
};

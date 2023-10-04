import McAfee from "../assets/icons/mcafee-logo.svg?react";
import Norton from "../assets/icons/norton-antivirus-logo.svg?react";
import Clarifion from "../assets/images/clarifion-logo.png";

export const LogoHeader = () => {
  return (
    <div className="flex items-center max-[721px]:w-4/5 max-[721px]:w-[90%] justify-between w-4/5 max-w-[1245px] my-[30px]">
      <div className="w-[29%] max-w-[192px]">
        <img src={Clarifion} alt="logo" />
      </div>
      <div className="flex justify-center min-[722px]:justify-end gap-8 max-[721px]:w-1/3">
        <McAfee className="max-w-[88px] min-[722px]:w-[88px] min-w-[44px] w-1/6" />
        <Norton className="max-w-[88px] min-[722px]:w-[88px] min-w-[44px] w-1/6" />
      </div>
    </div>
  );
};

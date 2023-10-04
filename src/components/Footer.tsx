import WhiteLock from "../assets/icons/white-lock.svg?react";
export const Footer = () => {
  return (
    <div className="bg-[#252F3D] w-full flex justify-center mt-8 ">
      <div className="min-[722px]:max-w-[1245px] w-full p-5 flex justify-center min-[722px]:justify-between flex-wrap">
        <div className="flex gap-x-4 max-[721px]:gap-x-3">
          <p className="text-white py-2 text-xs">Copyright (c) 2023</p>
          <div className="w-[1px] h-[14px] bg-white mt-2" />
          <p className="text-white  py-2 text-xs">
            Clarifionsupport@clarifion.com
          </p>
        </div>
        <div className="flex gap-4 w-full min-[722px]:w-auto  justify-center min-[722px]:mt-2 mt-4">
          <WhiteLock className="max-[721px]:min-w-[13px] max-[721px]:min-h-[13px] min-h-[16px] min-w-[16px] stroke-white" />
          <p className="text-white text-xs -mt-[2px]">
            Secure 256-bit SSL encryption.
          </p>
        </div>
      </div>
    </div>
  );
};

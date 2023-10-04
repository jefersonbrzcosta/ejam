import Percentage from "../assets/icons/percentage.svg?react";

export const OfferDescription = () => {
  return (
    <div className="flex gap-4 justify-start bg-[#EDF3FD] rounded-[10px] px-4 py-3 max-[721px]:items-center leading-loose">
      <Percentage className="max-[721px]:min-w-6 max-[721px]:min-h-6" />
      <p className="max-[721px]:text-sm">
        Save <span className="text-[#2C7EF8]">53%</span> and get{" "}
        <span className="text-[#2C7EF8]">6 extra Clarifision</span> for only{" "}
        <span className="text-[#2C7EF8]">$14 Each</span>.
      </p>
    </div>
  );
};

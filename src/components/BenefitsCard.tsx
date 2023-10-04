import { ReactNode } from "react";

import TickCircle from "../assets/icons/tick-circle.svg?react";
import { useMediaQuery } from "../hooks/useMediaQuery";

export const BenefitsItem = ({ title }: { title: ReactNode }) => {
  return (
    <div className="flex gap-3 h-[22px] max-[721px]:h-4 max-[721px]:w-full">
      <TickCircle className="max-[721px]:h-4" />
      {title}
    </div>
  );
};

export const BenefitsCard = () => {
  const { isPhone } = useMediaQuery();
  return (
    <div className="flex flex-col gap-4 max-[721px]:w-full">
      <BenefitsItem
        title={
          <p
            style={{ fontSize: isPhone ? "12px" : "16px" }}
            className="text-[#4D5254]"
          >
            Negative Ion Technology may{" "}
            <span className="font-bold">help with allergens</span>
          </p>
        }
      />
      <BenefitsItem
        title={
          <p
            style={{ fontSize: isPhone ? "12px" : "16px" }}
            className="text-[#4D5254]"
          >
            Designed for <span className="font-bold">air rejuvenation</span>
          </p>
        }
      />
      <BenefitsItem
        title={
          <p
            style={{ fontSize: isPhone ? "12px" : "16px" }}
            className="text-[#4D5254]"
          >
            <span className="font-bold">Perfect for every room</span> in all
            types of places.
          </p>
        }
      />
    </div>
  );
};

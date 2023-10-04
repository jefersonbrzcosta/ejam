import Checked from "../assets/icons/status-checked.svg?react";
import CurrentStep from "../assets/icons/current-step.svg?react";
import FutureStep from "../assets/icons/future-step.svg?react";
import { Options } from "./Options";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useMemo } from "react";

export const ProcessSteps = () => {
  const { isPhone } = useMediaQuery();
  const steps = useMemo(
    () => [
      {
        key: 1,
        title: "Step 1 : Cart Review",
        icon: <Checked width={isPhone ? 20 : 40} height={isPhone ? 20 : 40} />,
      },
      {
        key: 2,
        title: "Step 2 : Checkout",
        icon: <Checked width={isPhone ? 20 : 40} height={isPhone ? 20 : 40} />,
      },
      {
        key: 3,
        title: "Step 3 : Special Offer",
        current: true,
        icon: (
          <CurrentStep width={isPhone ? 20 : 40} height={isPhone ? 20 : 40} />
        ),
      },
      {
        key: 4,
        title: "Step 4 : Confirmation",
        icon: (
          <FutureStep width={isPhone ? 20 : 40} height={isPhone ? 20 : 40} />
        ),
      },
    ],
    [isPhone]
  );
  return (
    <div className="flex justify-center items-center max-[721px]:mt-6 my-0 w-full max-[721px]:w-full flex-col mt-[60px]">
      <Options options={steps} />
    </div>
  );
};

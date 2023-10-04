import Checkbox from "../assets/icons/checkmark-starburst.svg?react";
import Truck from "../assets/icons/truck-light.svg?react";
import Heart from "../assets/icons/heart-outline.svg?react";
import ArrowVector from "../assets/icons/fluent_arrow.svg?react";
import { Options } from "./Options";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Left from "../assets/icons/left.svg?react";
import Right from "../assets/icons/right.svg?react";

const headerOptions = [
  {
    key: 1,
    title: "30-DAY SATISFACTION GUARANTEE",
    icon: <Checkbox />,
  },
  {
    key: 2,
    title: "FREE DELIVERY ON ORDERS OVER $40.00",
    icon: <Truck />,
  },
  {
    key: 3,
    title: "+50.000 HAPPY CUSTOMERS",
    icon: <Heart />,
  },
  {
    key: 4,
    title: "100% MONEY BACK GUARANTEE",
    icon: <ArrowVector />,
  },
];

export const MainFrame = ({ children }: any) => {
  const { screenWidth, isPhone } = useMediaQuery();
  const [currentVisible, setCurrentVisible] = useState(0);
  const [currentTimeout, setCurrentTimeout] = useState(0);

  const cardWidth = useMemo(() => screenWidth, [screenWidth]);

  const cardsPerScreen = useMemo(
    () => Math.floor(window?.innerWidth / cardWidth),
    [cardWidth]
  );

  const availableScreens = useMemo(() => 4, []);
  const carrouselRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = useCallback(
    (page: number) => {
      let toPage = 0;
      if (availableScreens > page) {
        toPage = page;
      }
      carrouselRef?.current?.scrollTo({
        top: 0,
        left: toPage * (cardsPerScreen * cardWidth),
        behavior: "smooth",
      });
      setCurrentVisible(toPage);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cardsPerScreen]
  );

  useEffect(() => {
    clearInterval(currentTimeout);
    if (availableScreens - 1 === currentVisible) {
      setCurrentTimeout(setTimeout(() => handleScrollTo(0), 5000));
    } else {
      setCurrentTimeout(
        setTimeout(() => handleScrollTo(currentVisible + 1), 5000)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableScreens, currentVisible, handleScrollTo]);

  return (
    <div className="w-full">
      <div
        ref={carrouselRef}
        style={{
          justifyContent: isPhone ? "start" : undefined,
        }}
        className="w-full bg-[#252F3D] h-[50px] overflow-hidden flex justify-center"
      >
        {isPhone && (
          <>
            <button
              onClick={() => handleScrollTo(currentVisible - 1)}
              className="absolute left-0 w-8 h-[50px] items-center bg-[#252F3D] flex justify-end cursor-pointer z-50"
            >
              <Left width={20} height={20} />
            </button>
            <button
              onClick={() => handleScrollTo(currentVisible + 1)}
              className="absolute right-0 w-8 h-[50px] items-center bg-[#252F3D] flex justify-start cursor-pointer z-50"
            >
              <Right width={20} height={20} />
            </button>
          </>
        )}
        <Options header options={headerOptions} />
      </div>
      {children}
    </div>
  );
};

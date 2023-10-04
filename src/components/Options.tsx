import { ReactNode } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

interface OptionsProps {
  header?: boolean;

  options: {
    key: number;
    title: string;
    icon: ReactNode;
    current?: boolean;
  }[];
}

export const Options = ({ options, header }: OptionsProps) => {
  const { isPhone, screenWidth } = useMediaQuery();

  return (
    <div
      style={{
        width: isPhone && header ? screenWidth * 4 : isPhone ? "90%" : "80%",
        maxWidth:
          isPhone && header ? screenWidth * 4 : isPhone ? "90%" : "1245px",
        // minWidth: isPhone && header ? screenWidth * 4 : "1245px",
      }}
      className="min-[722px]:max-w-[1245px] min-[722px]:min-w-[1024px] flex justify-between relative"
    >
      {options.map(({ key, title, icon, current }) => (
        <div
          style={{
            width: isPhone && header ? screenWidth : "auto",
          }}
          key={key}
          className={`flex gap-2 items-center ${
            !header
              ? "max-[721px]:flex-col h-6 max-[721px]:h-auto max-[721px]:max-w-[74px]"
              : "justify-center"
          }`}
        >
          {icon}
          <p
            className={`font-medium ${
              !header ? "max-[721px]:text-xs max-[721px]:text-center" : ""
            } ${header ? "text-white text-xs" : "text-black text-xl"} ${
              current ? "font-bold" : ""
            }`}
          >
            {title}
          </p>
        </div>
      ))}
    </div>
  );
};

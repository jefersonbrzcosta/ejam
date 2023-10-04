import { useMediaQuery } from "../hooks/useMediaQuery";

export const ProductCall = () => {
  const { isPhone } = useMediaQuery();
  return (
    <div className="p-0 -mt-2 h-[113px] max-[721px]:h-[113px]">
      <h2
        style={{
          lineHeight: "140%",
          fontSize: isPhone ? "24px" : "32px",
          alignSelf: "stretch",
        }}
      >
        <span className="text-[#2C7EF8]">ONE TIME ONLY</span> special price for
        6 extra Clarifion for only{" "}
        <span className="text-[#2C7EF8]">$14 each</span> ($84.00 total!)
      </h2>
    </div>
  );
};

import SatisfactionBadge from "../assets/images/satisfaction-badge.png";

export const SatisfactionCard = () => {
  return (
    <div className="w-full gap-4 flex h-[88px]">
      <div className="w-1/6">
        <img
          width={88}
          height={88}
          src={SatisfactionBadge}
          alt="satisfaction"
        />
      </div>
      <div className="w-5/6">
        <p
          style={{ lineHeight: "140%" }}
          className="text-[#4D5254] max-[721px]:text-xs text-base"
        >
          If you are not completely thrilled with your Clarifion - We have a{" "}
          <span className="font-bold">30 day satisfaction guarantee</span>.
          Please refer to our return policy at the bottom of the page for more
          details. Happy Shopping!
        </p>
      </div>
    </div>
  );
};

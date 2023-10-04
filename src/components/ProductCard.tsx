import ProductThumbnail from "../assets/images/product-thumbnail.png";
import StarsBigger from "../assets/icons/start-bigger.svg?react";
import TinnyBall from "../assets/icons/tinny-ball.svg?react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const ProductDescription = () => {
  return (
    <div>
      <p className="text-[#4D5254] font-normal max-[721px]:text-xs max-[721px]:mt-4 max-[721px]:text-center">
        Simply plug a Clarifion into any standard outlet and replace bulky,
        expensive air purifiers with a simple.
      </p>
    </div>
  );
};

export const ProductCard = () => {
  const { isPhone } = useMediaQuery();

  return (
    <div className="w-full max-[721px]:mt-0">
      <div className="flex max-[721px]:gap-4 gap-6">
        <div className="rounded-[10px] max-[721px]:min-w-fit min-w-[134px] w-[134px] h-[134px] bg-[#2C7EF8] max-[721px]:w-20 max-[721px]:h-20">
          <img
            className="max-[721px]:w-20 max-[721px]:h-20"
            src={ProductThumbnail}
            alt="product-thumbnail"
          />
        </div>
        <div className="flex-col justify-start gap-[15px] max-[721px]:gap-[12px] max-[721px]:flex-grow">
          <div className="flex justify-between self-stretch w-full">
            <div className="text-xl max-[721px]:text-[14px] capitalize">
              Clarifion Air Ionizer
            </div>
            <div className="flex gap-[10px]">
              <p className="text-[#969696] font-semibold text-base mt-1 max-[721px]:mt-[2px] max-[721px]:text-[10px]">
                $180
              </p>
              <p className="text-[#2C7EF8] font-semibold text-[22px] max-[721px]:mt-[2px] max-[721px]:text-[14px]">
                $84
              </p>
            </div>
          </div>
          <div>
            <StarsBigger />
          </div>
          <div className="flex gap-4">
            <TinnyBall className="mt-1" />
            <p className="text-[#37465A]">12 left in Stock</p>
          </div>
          {!isPhone && <ProductDescription />}
        </div>
      </div>
      {isPhone && <ProductDescription />}
    </div>
  );
};

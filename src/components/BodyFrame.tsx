import productImage from "../assets/images/product-image.png";
import { BenefitsCard } from "./BenefitsCard";
import { ProductCard } from "./ProductCard";
import { Testimonial } from "./Testimonial";
import { ProductCall } from "./ProductCall";
import { OfferDescription } from "./OfferDescription";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { SatisfactionCard } from "./SatisfactionCard";
import { GetDiscountButton } from "./GetDiscountButton";
import { Footer } from "./Footer";

export const BodyFrame = () => {
  const { isPhone } = useMediaQuery();
  return (
    <>
      <div className="flex gap-10 justify-around max-[721px]:w-full w-4/5 max-w-[1245px] max-[721px]:bg-transparent bg-[#FAFAFA] mt-10 max-[721px]:flex-col-reverse">
        {!isPhone && (
          <div className="w-1/2 pl-10 pt-10 pb-[38px] max-[721px]:w-full">
            <>
              <img
                className="min-w-[575px] h-auto"
                src={productImage}
                alt="product-img"
              />
              <Testimonial />
            </>
          </div>
        )}
        <div className="w-1/2 max-[721px]:w-full max-[721px]:p-0 max-[721px]:px-5 pr-10 pt-10 pb-[38px] flex flex-col max-[721px]:gap-6 gap-8">
          <ProductCall />
          <ProductCard />
          {isPhone && (
            <div className="w-full flex justify-center">
              <img
                className="max-w-[575px] w-full h-auto"
                src={productImage}
                alt="product-img"
              />
            </div>
          )}
          <BenefitsCard />
          <OfferDescription />
          <GetDiscountButton />
          <SatisfactionCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

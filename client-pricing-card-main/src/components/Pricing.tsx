import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Foreigner from "./Foreigner";
import MobileForeigner from "./MobileForeigner";
import Native from "./Native";
import { State } from "../interface/interface";
import { setPlanType } from "../store/PricingCardSlice";

function Pricing() {
  const dispatch = useDispatch();
  const planType = useSelector((state: State) => state.pricingCard.plan);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="overflow-hidden lg:px-[5rem] pt-[2rem] pb-[3rem] md:pt-[3.5rem]">
        <h1 className=" px-[3.5rem] font-[800] text-[3rem] text-center leading-[3.5rem]">
          Transparent pricing
        </h1>
        <p className=" px-[3.5rem] hidden md:block text-[#262626] mt-[1rem] text-[1.3rem] text-center">
          On the “Regular” plan you will get the maximum savings,
          <br /> on "Plus" there will be an opportunity to reschedule and cancel
          lessons,
          <br /> and on "Flexi" you will be accompanied by a mentor.
        </p>
        <p className=" px-[3.5rem] md:hidden text-[#262626] mt-[1rem] text-[1.3rem] text-center">
          “Regular” plan will get savings.
          <br /> On "Plus" you can reschedule and cancel lessons.
          <br /> On "Flexi" you will be accompanied by a mentor.
        </p>

        <div className={`lg:hidden flex justify-center mt-[2rem] text-center`}>
          <div
            onClick={() => {
              dispatch(setPlanType("foreigner"));
            }}
            className={`cursor-pointer border-[3px] w-[10rem] py-[0.5rem] rounded-l-full ${
              planType === "foreigner"
                ? "border-[#CE4A37]"
                : "border-[#909090] opacity-50"
            }`}
          >
            Foreigner
          </div>
          <div
            onClick={() => {
              dispatch(setPlanType("native"));
            }}
            className={`cursor-pointer border-[3px] w-[10rem] py-[0.5rem] rounded-r-full ${
              planType === "native"
                ? "border-[#CE4A37]"
                : "border-[#909090] opacity-50"
            }`}
          >
            Native
          </div>
        </div>
        {planType === "foreigner" && (
          <section>
            {screenSize >= 1024 ? <Foreigner /> : <MobileForeigner />}
          </section>
        )}
        {planType === "native" && <Native />}
      </section>
    </>
  );
}

export default Pricing;

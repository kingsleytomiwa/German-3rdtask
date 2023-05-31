import drop from "../assets/dropdown-arrow-svgrepo-com.svg";
import { useDispatch, useSelector } from "react-redux";
import { setPlanType } from "../store/PricingCardSlice";
import { State } from "../interface/interface";
import { useState, ChangeEvent } from "react";
import {
  setNativePrice5,
  setNativePrice10,
  setNativePrice20,
  setNativePrice40,
} from "../store/PricingCardSlice";

const Native = () => {
  const dispatch = useDispatch();
  const [duration, setDuration] = useState(250);
  const planType = useSelector((state: State) => state.pricingCard.plan);

  const native5Price = useSelector((state: State) => state.pricingCard.native5);
  const native10Price = useSelector(
    (state: State) => state.pricingCard.native10
  );
  const native20Price = useSelector(
    (state: State) => state.pricingCard.native20
  );
  const native40Price = useSelector(
    (state: State) => state.pricingCard.native40
  );

  const handleDurationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newDuration = parseInt(event.target.value);
    setDuration(newDuration);
    dispatch(setNativePrice5({ numClasses: 5, duration: newDuration }));
    dispatch(setNativePrice10({ numClasses: 10, duration: newDuration }));
    dispatch(setNativePrice20({ numClasses: 20, duration: newDuration }));
    dispatch(setNativePrice40({ numClasses: 40, duration: newDuration }));
  };

  const pricePerClass = (price: number, numClasses: number) => {
    return (price / numClasses).toFixed(2);
  };

  const oldPrice = (price: number, numClasses: number) => {
    const pricePerClassValue = parseFloat(pricePerClass(price, numClasses));
    return ((pricePerClassValue * 40) / 100 + pricePerClassValue).toFixed(2);
  };
  const oldTotalPrice = (price: number) => {
    return ((price * 40) / 100 + price).toFixed(2);
  };
  return (
    <section className="lg:flex gap-[2rem] justify-center lg:mt-[3rem]">
      <div>
        <div className={`hidden lg:flex text-center`}>
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
        </div>{" "}
        <p className="hidden lg:inline-block  text-sm pb-[1rem] mt-[1rem] text-[#9F9F9F]">
          Class duration
        </p>
        <div className="flex gap-[0.5rem] mt-[1.5rem] lg:mt-0 mx-auto lg:mx-0 relative w-[10rem] lg:w-full">
          <select
            value={duration}
            onChange={handleDurationChange}
            className="flex outline-none appearance-none bg-white justify-center lg:justify-between rounded-xl shadow-input-shadow px-[1.5rem] py-[0.8rem] items-center w-[20rem] lg:w-full gap-[0.5rem]"
          >
            <option value={25}>25 minutes</option>
            <option value={45}>45 minutes</option>
            <option value={60}>60 minutes</option>
            <option value={90}>90 minutes</option>
          </select>
          <img
            src={drop}
            alt="drop"
            className="h-[1.5rem] w-[1.5rem] absolute top-[0.9rem] right-[1.5rem]"
          />
        </div>
      </div>
      <div className="overflow-x-auto lg:overflow-visible lg:overflow-x-scroll">
        <div className="mt-[1rem] pl-[2.5rem] w-[83rem]">
          <div className="flex gap-[1rem] px-[1rem] py-[1rem]">
            <div className="bg-white w-[20rem] text-center pt-[2rem] pb-[2rem] rounded-xl shadow-input-shadow">
              <h1 className="font-[700] text-[2.1rem]">5 Classes</h1>
              <hr className="border-dashed border-[#CE4A37] w-[9rem] mx-auto" />
              <div className="flex justify-center mt-[2.5rem] gap-[1rem] items-center">
                <p className="line-through text-gray-500">
                  {oldPrice(native5Price, 5)} ¥{" "}
                </p>
                <p className="border-2 rounded-full px-[0.5rem] border-black">
                  -40%
                </p>
              </div>
              <h1 className="text-[#ce4a37] font-[800] text-[3.5rem] pt-[0.5rem]">
                {pricePerClass(native5Price, 5)} ¥
              </h1>
              <p>per class</p>

              <div className="bg-[#f3f3f3] py-[1rem] font-medium mt-[1.5rem]">
                <div className="flex justify-center gap-[0.5rem]">
                  <p className="text-[#b9b9b9] line-through ">
                    {oldTotalPrice(native5Price)} ¥
                  </p>
                  <p>{native5Price.toFixed(2)} ¥</p>
                </div>
              </div>
              <button className="bg-[#FFAC01] mt-[2rem] font-semibold text-[1.3rem] px-[4rem] py-[0.8rem] rounded-full">
                Proceed
              </button>
            </div>

            <div className="bg-white w-[20rem] text-center pt-[2rem] pb-[2rem] rounded-xl shadow-input-shadow">
              <h1 className="font-[700] text-[2.1rem]">10 Classes</h1>
              <hr className="border-dashed border-[#CE4A37] w-[9rem] mx-auto" />
              <div className="flex justify-center mt-[2.5rem] gap-[1rem] items-center">
                <p className="line-through text-gray-500">
                  {" "}
                  {oldPrice(native10Price, 10)} ¥{" "}
                </p>
                <p className="border-2 rounded-full px-[0.5rem] border-black">
                  -40%
                </p>
              </div>
              <h1 className="text-[#ce4a37] font-[800] text-[3.5rem] pt-[0.5rem]">
                {pricePerClass(native10Price, 10)} ¥
              </h1>
              <p>per class</p>

              <div className="bg-[#f3f3f3] py-[1rem] font-medium mt-[1.5rem]">
                <div className="flex justify-center gap-[0.5rem]">
                  <p className="text-[#b9b9b9] line-through ">
                    {oldTotalPrice(native10Price)} ¥
                  </p>
                  <p>{native10Price.toFixed(2)} ¥</p>
                </div>
              </div>
              <button className="bg-[#FFAC01] mt-[2rem] font-semibold text-[1.3rem] px-[4rem] py-[0.8rem] rounded-full">
                Proceed
              </button>
            </div>

            <div className="bg-white w-[20rem] text-center pt-[2rem] pb-[2rem] rounded-xl shadow-input-shadow">
              <h1 className="font-[700] text-[2.1rem]">20 Classes</h1>
              <hr className="border-dashed border-[#CE4A37] w-[9rem] mx-auto" />
              <div className="flex justify-center mt-[2.5rem] gap-[1rem] items-center">
                <p className="line-through text-gray-500">
                  {" "}
                  {oldPrice(native20Price, 20)} ¥{" "}
                </p>
                <p className="border-2 rounded-full px-[0.5rem] border-black">
                  -40%
                </p>
              </div>
              <h1 className="text-[#ce4a37] font-[800] text-[3.5rem] pt-[0.5rem]">
                {pricePerClass(native20Price, 20)} ¥
              </h1>
              <p>per class</p>

              <div className="bg-[#f3f3f3] py-[1rem] font-medium mt-[1.5rem]">
                <div className="flex justify-center gap-[0.5rem]">
                  <p className="text-[#b9b9b9] line-through ">
                    {oldTotalPrice(native20Price)} ¥
                  </p>
                  <p>{native20Price.toFixed(2)} ¥</p>
                </div>
              </div>
              <button className="bg-[#FFAC01] mt-[2rem] font-semibold text-[1.3rem] px-[4rem] py-[0.8rem] rounded-full">
                Proceed
              </button>
            </div>

            <div className="bg-white w-[20rem] text-center pt-[2rem] pb-[2rem] rounded-xl shadow-input-shadow">
              <h1 className="font-[700] text-[2.1rem]">40 Classes</h1>
              <hr className="border-dashed border-[#CE4A37] w-[9rem] mx-auto" />
              <div className="flex justify-center mt-[2.5rem] gap-[1rem] items-center">
                <p className="line-through text-gray-500">
                  {oldPrice(native40Price, 40)} ¥{" "}
                </p>
                <p className="border-2 rounded-full px-[0.5rem] border-black">
                  -40%
                </p>
              </div>
              <h1 className="text-[#ce4a37] font-[800] text-[3.5rem] pt-[0.5rem]">
                {pricePerClass(native40Price, 40)} ¥
              </h1>
              <p>per class</p>

              <div className="bg-[#f3f3f3] py-[1rem] font-medium mt-[1.5rem]">
                <div className="flex justify-center gap-[0.5rem]">
                  <p className="text-[#b9b9b9] line-through ">
                    {oldTotalPrice(native40Price)} ¥
                  </p>
                  <p>{native40Price.toFixed(2)} ¥</p>
                </div>
              </div>
              <button className="bg-[#FFAC01] mt-[2rem] font-semibold text-[1.3rem] px-[4rem] py-[0.8rem] rounded-full">
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Native;

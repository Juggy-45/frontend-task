import React from "react";
import Order from "../../assets/order.jpeg";
import Time from "../../assets/time.jpeg";
import Tick from "../../assets/tick.jpeg";
import Delivery from "../../assets/delivery.jpeg";
import Award from "../../assets/award.png";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import "./index.css";

function insights() {
  return (
    <section>
      <div className="flex mt-[25px] gap-12">
        <div className="boxes">
          {/** Order Acceptance */}
          <img className="mx-auto mt-6" src={Order} alt="order img" width={150} />
          <h3>Order Acceptance</h3>
          <div className="flex justify-center">
            <h3 >85 %</h3>
            <BsArrowDownShort className="my-auto text-[#FF134A] ml-6" />
            <h2 className="my-auto text-[#FF134A] text-[16px]">
              8%
            </h2>
          </div>
          <div className="flex justify-center mt-6">
          <button className="phase1">Phase 1 Goal</button>
          </div>
        </div>

        <div className="boxes">
          {/** Order Acceptance */}
          <img className="mx-auto mt-6" src={Time} alt="order" width={110} />
          <h3>Order Acceptance</h3>
          <div className="flex justify-center">
            <h3 >85 %</h3>
            <BsArrowUpShort className="my-auto text-[#4CCD6A] ml-6" />
            <h2 className="my-auto text-[#4CCD6A] text-[16px]">
              8%
            </h2>
          </div>
          <div className="flex justify-center mt-6">
          <button className="phase2">Phase 2 Goal</button>
          </div>
        </div>
        <div className="boxes">
          <img className="mx-auto mt-6" src={Delivery} alt="" width={130} />
          <h3>Order Acceptance</h3>
          <div className="flex justify-center">
            <h3 >85 %</h3>
            <BsArrowUpShort className="my-auto text-[#4CCD6A] ml-6" />
            <h2 className="my-auto text-[#4CCD6A] text-[16px]">
              8%
            </h2>
          </div>
          <div className="flex justify-center mt-6">
          <button className="phase3">Phase 3 Goal</button>
          </div>
        </div>
      </div>


      <div className="flex mt-[25px] gap-12">       
        <div className="boxes">
          {/** Order Acceptance */}
          <img className="mx-auto mt-6" src={Tick} alt="" width={90} />
          <h3>Order Acceptance</h3>
          <div className="flex justify-center">
            <h3 >85 %</h3>
            <BsArrowDownShort className="my-auto text-[#FF134A] ml-6" />
            <h2 className="my-auto text-[#FF134A] text-[16px]">
              8%
            </h2>
          </div>
          <div className="flex justify-center mt-6">
          <button className="phase4">Phase 4 Goal</button>
          </div>
        </div>

        <div className="boxes">
          {/** Order Acceptance */}
          <img className="mx-auto mt-6" src={Award} alt="order pic" width={120} />
          <h3>Order Acceptance</h3>
          <div className="flex justify-center">
            <h3 >85 %</h3>
            <BsArrowDownShort className="my-auto text-[#FF134A] ml-6" />
            <h2 className="my-auto text-[#FF134A] text-[16px]">
              8%
            </h2>
          </div>
          <div className="flex justify-center mt-6">
          <button className="phase5">Phase 5 Goal</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default insights;

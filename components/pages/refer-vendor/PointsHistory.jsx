"use client";
import { useState } from "react";
import BannerButton from "@/components/atoms/BannerButton";
import ErningsPoints from "./ErningsPoints";
import RedeemPoints from "./RedeemPoints";

const PointsHistory = () => {
  const [activeTab, setActiveTab] = useState("pointsHistory");

  return (
    <>
      <BannerButton label="Points History" route={"/refer"} />
      <div className="flex overflow-x-auto mt-6 md:mt-7 lg:mt-8 font-poppins">
        <div className="border-lightgray bg-light flex flex-wrap gap-4 rounded-full border p-1 sm:flex-nowrap">
          <button
            className={`cursor-pointer rounded-full px-3 py-2 font-medium capitalize md:px-7 text-[1.17rem] tracking-wide text-[#36383A] ${
              activeTab === "pointsHistory"
                ? "bg-primary text-light"
                : "bg-light text-dark"
            }`}
            onClick={() => setActiveTab("pointsHistory")}
          >
           Ernings Points
          </button>
          <button
            className={`cursor-pointer rounded-full px-3 py-2 font-medium capitalize md:px-7 text-[1.17rem] tracking-wide text-[#36383A] ${
              activeTab === "redeemHistory"
                ? "bg-primary text-light"
                : "bg-light text-dark"
            }`}
            onClick={() => setActiveTab("redeemHistory")}
          >
            Redeem Points
          </button>
        </div>
      </div>
      <section className="bg-light my-6 rounded-xl py-6 px-8 shadow">
        <div className="">
          {activeTab === "pointsHistory" && <ErningsPoints />}
          {activeTab === "redeemHistory" && <RedeemPoints />}
        </div>
      </section>
    </>
  );
};

export default PointsHistory;

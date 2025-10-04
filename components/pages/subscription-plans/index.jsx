"use client";
import Link from "next/link";

const paidPlans = [
  {
    title: "Launch Offer",
    bgHeader: "bg-darkyellow/70",
    bgBody: "bg-darkyellow/80",
    highlight: "12 months 2500 INR",
    feature: "List 25 products/services",
    features: [
      "List - 1 product per auction day",
      "Benefits -Refer and earn vendors (10% for basic and 15% for premium vendors)",
      "Income tax exemption certificates as per applicability and govt guidelines",
      "Transaction fee will be charged @ Rs 250/- or 3% of the highest bid value whichever is higher",
    ],
  },
  {
    title: "Launch Offer",
    bgHeader: "bg-lightyellow",
    bgBody: "bg-darkyellow",
    highlight: "12 months 5000 INR",
    feature: "List 500 Products/Services",
    features: [
      "Listing per day - 5 products per auction day",
      "Benefits - Refer and earn vendors (10% for basic and 20% for premium vendors)",
      "Income tax exemption certificates as per applicability and govt guidelines",
      "Transaction fee: Rs 150/- or 2% of highest bid value (whichever is higher)",
      "Match the Offer",
      "Discount Offering for Bidders",
      "Periodic analytic reports on bidder preferences",
      "Priority support from the company vendor assistance team",
    ],
  },
];

const SubscriptionPlans = () => {
  return (
    <section className="mb-10 space-y-6">
      <div className="bg-lightyellow text-light flex flex-col items-center justify-between gap-3 rounded-xl px-3 py-3 md:flex-row">
        <div className="flex w-full items-center gap-3">
          <Link href="/">
            <i className="ri-arrow-left-line ri-lg cursor-pointer"></i>
          </Link>
          <span className="text-lg font-semibold md:text-xl">
            Product Details
          </span>
        </div>
        <div className="flex w-full justify-end gap-2 md:w-auto md:gap-4">
          <Link href="/subscription-plans/pushase-auctions">
            <button className="flex text-nowrap font-semibold md:text-lg items-center gap-1 rounded bg-[#F13E3E] px-3 py-1.5 text-sm md:px-5 cursor-pointer">
            Top-up <i className="ri-wallet-3-fill"></i>
          </button>
          </Link>
        </div>
      </div>
      <div className="md:px-10">
        <div className="border-light rounded-xl border-3">
          <h2 className="text-light bg-darkyellow/75 border-light rounded-t-xl border-b-3 py-3 text-center text-xl font-bold tracking-wide md:text-2xl">
            Launch Offer
          </h2>
          <div className="bg-darkyellow/90 flex flex-col items-center justify-center gap-5 rounded-b-xl py-8">
            <h3 className="text-light px-4 text-center text-xl font-medium tracking-wide md:text-4xl">
              Free for 30 DAY’S only for 5 products
            </h3>
            <button className="bg-light border-light font-urbanist hover:text-light hover:bg-lightyellow flex w-40 cursor-pointer justify-center rounded-full border px-6 py-3 font-semibold tracking-wide text-[#E7B010] md:py-2.5">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:px-10">
        {paidPlans.map(
          ({ bgHeader, bgBody, highlight, features, title,feature }, index) => (
            <div key={index}>
              <div className="border-light rounded-xl border-3">
                <h2
                  className={`text-light ${bgHeader} border-light rounded-t-xl border-b-3 py-3 text-center text-xl font-bold tracking-wide md:text-2xl`}
                >
                  {title}
                </h2>
                <div
                  className={`${bgBody} flex flex-col items-center justify-center gap-5 rounded-b-xl px-4 py-8`}
                >
                  <h3 className="text-light text-center text-2xl leading-12 font-bold tracking-widest uppercase md:px-16 md:text-4xl">
                    {highlight}
                  </h3>
                  <p className="-mt-4 text-[1.15rem] text-light tracking-wide font-poppins">{feature}</p>
                  <ul className="text-light -mt-2 space-y-2 text-[1.1rem] tracking-wide">
                    {features.map((feature, i) => (
                      <li key={i} className="flex gap-2">
                        <i className="ri-circle-fill mt-2.5 text-[0.4rem]"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-light border-light font-urbanist hover:text-light hover:bg-lightyellow flex w-40 cursor-pointer justify-center rounded-full border px-6 py-3 font-semibold tracking-wide text-[#E7B010] md:py-2.5">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default SubscriptionPlans;

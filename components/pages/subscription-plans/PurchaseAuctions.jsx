import Image from "next/image";
import BannerButton from "@/components/atoms/BannerButton";
import Button from "@/components/atoms/Button";
const PurchaseAuctions = () => {
  return (
    <section className="w-full space-y-6 overflow-y-auto">
      {/* Back Button */}

      <BannerButton route={"/subscription-plans"} label={"Purchase Auctions"} />
      {/* Points */}
      <div className="flex flex-col items-center justify-center gap-1 text-white">
        <Image
          className="h-24 w-24"
          src="/image/wallet.png"
          alt="points"
          width={200}
          height={200}
        />
        <span className="text-4xl font-extrabold text-[#ffffff]">80</span>
        <p className="text-lg font-bold">Points</p>
        <button className="mx-auto flex items-center justify-center gap-4 rounded-xl bg-white px-8 py-4 text-lg font-bold">
          <span className="bg-gradient-to-r from-[#8A5BFF] to-[#FF407D] bg-clip-text text-transparent">
            Convert & Redeem Points To Purchase Auctions
          </span>
        </button>
      </div>
      <dix className="flex flex-col items-center justify-center p-6">
        {/* Cards */}
        <div className="mb-8 flex flex-col gap-6 md:flex-row">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative w-64 overflow-hidden rounded-lg bg-white text-center shadow-lg`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <span className="absolute top-0 right-0 left-0 mx-auto w-fit rounded-b-md bg-[#F9C001] px-8 py-2 text-[1rem] font-light font-poppins text-white">
                  Most Popular
                </span>
              )}

              {/* Plan Content */}
              <div className="pt-6">
                <h3 className="mb-4 text-lg md:[1.3rem] lg:text-[1.5rem] mt-8 font-semibold text-[#00285B] font-poppins">
                  {plan.title}
                </h3>
                <p className="font-medium text-[#2CB24B] bg-[#2CB24B1A] text-lg font-poppins py-4">{plan.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Purchase Button */}
        <button className="rounded-full bg-white px-12 py-3 text-yellow-600 shadow-md transition hover:bg-yellow-100 text-lg font-poppins font-medium mt-6 md:mt-8 lg:mt-12">
          Purchase
        </button>
      </dix>
    </section>
  );
};

export default PurchaseAuctions;

const plans = [
  {
    id: 1,
    title: "100 Auction",
    price: "2500 Pt/INR",
    popular: false,
  },
  {
    id: 2,
    title: "200 Auction",
    price: "4000 Pt/INR",
    popular: true,
  },
  {
    id: 3,
    title: "500 Auction",
    price: "5000 Pt/INR",
    popular: false,
  },
];

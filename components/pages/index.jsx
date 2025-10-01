import AuctionInfoTable from "../molecules/AuctionInfoTable";
import StatContainer from "../molecules/StatContainer";
import data from "@/public/database/nav.json";
import Link from "next/link";

const HomePage = () => {
  const { stats } = data;

  return (
    <div className="space-y-8">
      <section className="bg-light grid gap-5 rounded-xl p-5 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatContainer key={index} index={index} {...stat} />
        ))}
      </section>

      <AuctionInfoTable />

      <section className="grid gap-5 pb-10 md:grid-cols-2">
        {bannerData.map(({ title, description, url }, index) => (
          <Link key={index} href={url}>
            <div className="border-light rounded-2xl border-2 bg-gradient-to-l from-[#C6970E] to-[#634C07] py-5 px-8 font-poppins">
              <h2 className="text-[1.6rem]  font-medium text-white">{title}</h2>
              <p className="text-[1.28rem] font-light  text-white">{description}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default HomePage;

const bannerData = [
  {
    title: "Subscription Plan",
    description: "Know your subscription plan",
    url: "/subscription-plans",
  },
  {
    title: "Discount Coupon",
    description: "Amount sold through discount vouchers",
    url: "/discount-coupons",
  },
  {
    title: "Refer a Vendor",
    description: "Refer a vendor and earn rewards",
    url: "/refer",
  },
  {
    title: "Discount Invoice",
    description: "Create a discount invoice",
    url: "/discount-invoice",
  },
];

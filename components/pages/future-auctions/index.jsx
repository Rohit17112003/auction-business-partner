import BannerContainer from "@/components/molecules/BannerContainer";
import FutureAuctionCard from "@/components/molecules/FutureAuctionCard";

const FutureAuctions = () => {
  return (
    <section className="space-y-5">
      <BannerContainer
        style="bg-lightyellow"
        title="Add New Product/Service"
        description="Add, edit and view product/service information
Vendors are requested to provide the details one week prior to the auction date"
        image="/image/doctor.svg"
        url="/future-auctions/add"
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {auctions.map((auction, index) => (
          <FutureAuctionCard key={index} {...auction} />
        ))}
      </div>
    </section>
  );
};

export default FutureAuctions;

const auctions = [
  {
    img: "/image/car.jpg",
    name: "Mohit Sen",
    carName: "Ambassador Car",
    auctionNo: "845464",
    time: "14h : 49m : 33s",
    cost: "18,590",
    bids: "101 Bids",
  },
  {
    img: "/image/car.jpg",
    name: "Mohit Sen",
    carName: "Ambassador Car",
    auctionNo: "845464",
    time: "14h : 49m : 33s",
    cost: "18,590",
    bids: "101 Bids",
  },
  {
    img: "/image/car.jpg",
    name: "Mohit Sen",
    carName: "Ambassador Car",
    auctionNo: "845464",
    time: "14h : 49m : 33s",
    cost: "18,590",
    bids: "101 Bids",
  },
];

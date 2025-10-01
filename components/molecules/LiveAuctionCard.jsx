import Image from "next/image";
import Link from "next/link";

const LiveAuctionCard = ({ img, name, carName, auctionNo, time, cost,price, bids }) => {
  return (
    <Link href={`/live-auctions/${name}`}>
      <div className="container-bg flex flex-col gap-6 p-3 lg:flex-row font-plusjakarta">
        <Image
          className="w-full rounded-lg lg:w-44"
          src={img}
          alt="car"
          width={200}
          height={300}
        />
        <div className="text-[0.92rem]">
          <p className="text-tertiary text-[16px] font-semibold">{name}</p>
          <h4 className="text-[20px] font-semibold">{carName}</h4>
          <p className="mb-2 text-secondary text-[0.91rem]">Auction no #{auctionNo}</p>
          <p className="mb-2 flex w-fit items-center gap-1 rounded-sm bg-[#FC990529] px-2 py-1 text-lightyellow">
            <i className="ri-timer-2-line ri-lg"></i> {time}
          </p>
          <p className="text-tertiary font-semibold">Start price {cost}</p>
          <p className="font-semibold text-lightyellow py-0.5">Market price {price}</p>
          <p className="font-semibold text-green">Current bid price {bids}</p>
        </div>
      </div>
    </Link>
  );
};

export default LiveAuctionCard;

"use client";
import Image from "next/image";
import Link from "next/link";

const DetailRow = ({ label, value }) => (
  <div>
    <p className="text-[1rem] font-semibold text-[#263039]">{label}</p>
    <p className="text-[0.9rem] text-[#667380]">{value}</p>
  </div>
);

const PriceBox = ({ price, value, gst, total }) => (
  <div className="bg-[#EFEFEF] py-2 px-2 md:px-4 lg:px-6">
    <div className="grid grid-cols-3 gap-1 md:gap-4 lg:gap-8 text-center">
      <div>
        <p className="font-semibold text-[#263039] text-start text-[1rem]">{price}</p>
        <p className="text-xs text-[#667380] text-start pt-1">{value}</p>
      </div>
      <div>
        <p className="font-semibold text-[#263039] text-[1rem]"> GST</p>
        <p className="text-xs text-[#667380] pt-1">{gst}</p>
      </div>
      <div>
        <p className="font-semibold text-[#263039] text-[1rem]">Total</p>
        <p className="text-xs text-[#667380] pt-1">{total}</p>
      </div>
    </div>
  </div>
);

const ProductDetail = () => {
  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="bg-lightyellow text-light flex flex-col items-center justify-between gap-3 rounded-xl px-3 py-3 md:flex-row">
        <div className="flex w-full items-center gap-3">
          <Link href="/future-auctions">
            <i className="ri-arrow-left-line ri-lg cursor-pointer"></i>
          </Link>
          <span className="text-lg font-semibold md:text-xl">
            Product Details
          </span>
        </div>
        <div className="flex w-full justify-end gap-2 md:w-auto md:gap-4">
          <button className="flex items-center gap-1 rounded bg-[#F13E3E] px-3 py-2 text-sm md:px-5 md:text-base">
            Delete <i className="ri-delete-bin-fill"></i>
          </button>
          <button className="flex items-center gap-1 rounded bg-[#2CB24B] px-3 py-2 text-sm md:px-5 md:text-base">
            Edit <i className="ri-pencil-fill ps-1"></i>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="bg-light rounded-lg p-5">
        <div className="grid gap-6 lg:grid-cols-3">
          <Image
            className="w-full rounded-lg object-cover"
            src="/image/car.jpg"
            alt="car"
            width={500}
            height={500}
          />
          <div className="lg:col-span-2">
            <h2 className="font-poppins mb-3 text-xl font-semibold tracking-wide md:text-2xl lg:text-4xl">
              Ambassador Car
            </h2>
            <p className="text-[#7B7B7B] lg:text-[1.08rem] font-poppins text-sm leading-relaxed font-medium md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,..<br></br>
              <span className="text-primary cursor-pointer "> Read More</span>
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="mx-auto mt-8 max-w-5xl space-y-6 rounded-lg border-2 border-dashed border-[#E7B010] p-5">
          {/* Top Row */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-800 md:grid-cols-3 lg:grid-cols-5">
            <DetailRow label="Create Date" value="5/30/2023" />
            <DetailRow label="Last Updated" value="5/30/2023, 2:00 pm" />
            <DetailRow label="Market Price" value="₹ 18,590" />
            <DetailRow label="Date of Auction" value="5/30/2023" />
            <DetailRow label="Auction No" value="# 6566475" />
          </div>

          {/* Vendor & Start Price */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-14">
            <PriceBox
              price="Vendor Price"
              value="₹ 18,590"
              gst="18%"
              total="₹ 18,590"
              className="w-full md:w-[500px]"
            />
            <PriceBox
              price="Start Price"
              value="₹ 18,590"
              gst="18%"
              total="₹ 18,590"
            />
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 gap-4 text-sm text-gray-800 md:grid-cols-3">
            <DetailRow label="Auction Validity" value="2 Hrs" />
            <DetailRow label="Match the Offer" value="Yes" />
            <DetailRow label="No. of Match the Offer" value="5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

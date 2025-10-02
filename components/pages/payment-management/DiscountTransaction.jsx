"use client";
import BannerButton from "@/components/atoms/BannerButton";

const DiscountTransaction = () => {
  return (
    <>
          <BannerButton route={"/"} label={"Discount Transaction"} />
      <section className="w-full bg-white rounded-xl px-6 py-4 mt-6">
        <div className="overflow-x-auto">
          <table className="font-poppins w-[900px] border-collapse border-spacing-0 overflow-hidden text-center text-sm text-[1.1rem] text-[#00285B] md:w-full">
            <thead className="font-medium">
              <tr>
                <th className="border border-[#A8A8A8] px-4 py-4">Discount</th>
                <th className="border border-[#A8A8A8] px-4 py-4">Date </th>
                <th className="border border-[#A8A8A8] px-4 py-4">Price</th>
                <th className="border border-[#A8A8A8] px-4 py-4">Dis. Amt.</th>
                <th className="border border-[#A8A8A8] px-4 py-4">Final Amt.</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                ({ discountId, price, date, disAmt, finalAmt }, index) => (
                  <tr key={index}>
                    <td className="border border-[#A8A8A8] px-4 py-6 font-medium">
                      {discountId}
                    </td>
                    <td className="border border-[#A8A8A8] px-4 py-6 font-medium capitalize">
                      {date}
                    </td>
                    <td className="border border-[#A8A8A8] px-4 py-6 font-medium">
                      {price}
                    </td>
                    <td className="border border-[#A8A8A8] px-4 py-6 font-medium">
                      {disAmt}
                    </td>
                    <td className="border border-[#A8A8A8] px-4 py-6 font-medium">
                      {finalAmt}
                    </td>
                  </tr>
                ),
              )}
              {/* Bottom-left rounding on last row */}
              <tr className="hidden">
                <td className="rounded-bl-lg"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default DiscountTransaction;

const data = [
  {
    discountId: "FV_345",
    disAmt: "200",
    date: "14-12-2023",
    price: "₹24,500",
    finalAmt: "20000",
  },
  {
    discountId: "FV_345",
    disAmt: "200",
    date: "14-12-2023",
    price: "₹24,500",
    finalAmt: "20000",
  },
  {
    discountId: "FV_345",
    disAmt: "200",
    date: "14-12-2023",
    price: "₹24,500",
    finalAmt: "20000",
  },
  {
    discountId: "FV_345",
    disAmt: "200",
    date: "14-12-2023",
    price: "₹24,500",
    finalAmt: "20000",
  },
  {
    discountId: "FV_345",
    disAmt: "200",
    date: "14-12-2023",
    price: "₹24,500",
    finalAmt: "20000",
  },
  {
    discountId: "FV_345",
    disAmt: "200",
    date: "14-12-2023",
    price: "₹24,500",
    finalAmt: "20000",
  },
  {
    discountId: "FV_345",
    disAmt: "200",
    date: "14-12-2023",
    price: "₹24,500",
    finalAmt: "20000",
  },
];

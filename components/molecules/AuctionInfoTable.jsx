"use client";

const AuctionInfoTable = () => {

  return (
    <div className="bg-light w-full rounded-xl px-4 pt-5">
      <h1 className="text-text md:text-2rem mb-4 text-[1.3rem] font-semibold px-4 font-poppins">
        Current Successful Auction Info
      </h1>
      <div className="overflow-auto">
        <table className="w-[900px] rounded-lg text-left text-sm md:min-w-full font-nunito">
          <thead className="bg-gray text-text text-lg">
            <tr className="text-[0.95rem]">
              <th className="px-4 py-3.5 font-extrabold text-nowrap rounded-l-xl">Auction ID</th>
              <th className="px-4 py-3.5 font-extrabold text-nowrap">Bidder Name</th>
              <th className="px-4 py-3.5 font-extrabold text-nowrap">Transaction Date</th>
              <th className="px-4 py-3.5 font-extrabold text-nowrap">Amount</th>
              <th className="px-4 py-3.5 font-extrabold text-nowrap">Code</th>
              <th className="px-4 py-3.5 font-extrabold">Message</th>
              <th className="px-4 py-3.5 font-extrabold text-nowrap rounded-r-xl">Tax Inv</th>
            </tr>
          </thead>
          <tbody>
            {auctionData.map(
              ({ id, name, date, amount, code, message }, index) => (
                <tr
                  key={index}
                  className={`text-text text-[1rem] ${index !==0 && index?"border-t border-lightgray":"" }`}
                >
                  <td className="px-4 py-2.5 font-semibold">{id}</td>
                  <td className="px-4 py-2.5 font-semibold">{name}</td>
                  <td className="px-4 py-2.5 font-semibold">{date}</td>
                  <td className="px-4 py-2.5 font-semibold text-nowrap">{amount}</td>
                  <td className="px-4 py-2.5 font-semibold">{code}</td>
                  <td className="px-4 py-2.5 font-semibold text-[0.85rem]">{message}</td>
                  <td className="px-4 py-2.5 font-semibold text-center">
                    <i className="ri-download-2-fill cursor-pointer text-xl font-light"></i>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuctionInfoTable;

 const auctionData = [
    {
      id: "HDYE7484",
      name: "Hemant",
      date: "04 Sep 2019",
      amount: "500 INR",
      code: "FDGD45CF",
      message: "Email link covering the following details Name, Id, Collection date, Feedback, Discount Coupons, Match the offer",
    },
    {
      id: "HDYE7485",
      name: "Hemant",
      date: "04 Sep 2019",
      amount: "500 INR",
      code: "FDGD45CF",
      message: "Email link covering the following details Name, Id, Collection date, Feedback, Discount Coupons, Match the offer",
    },
    {
      id: "HDYE7486",
      name: "Hemant",
      date: "04 Sep 2019",
      amount: "500 INR",
      code: "FDGD45CF",
      message: "Email link covering the following details Name, Id, Collection date, Feedback, Discount Coupons, Match the offer",
    },
  ];

"use client";

const ErningsPoints = () => {
  return (
    <>
      <section className="w-full">
        <div className="overflow-x-auto">
          <table className="font-poppins w-[900px] border-collapse border-spacing-0 overflow-hidden text-center text-sm text-[1.1rem] text-[#00285B] md:w-full">
            <thead className="font-medium">
              <tr>
                <th className="border border-[#A8A8A8] px-4 py-4"> Referred Vendors</th>
                <th className="border border-[#A8A8A8] px-4 py-4">Vendor ID</th>
                <th className="border border-[#A8A8A8] px-4 py-4">Date</th>
                <th className="border border-[#A8A8A8] px-4 py-4">Category</th>
                <th className="border border-[#A8A8A8] px-4 py-4">Points</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                ({ vendorId, category, date, vendors, points }, index) => (
                  <tr key={index}>
                    <td className="border border-[#A8A8A8] px-4 py-6 font-medium">
                      {vendors}
                    </td>
                    <td className="border border-[#A8A8A8] px-4 py-6 font-medium capitalize">
                      {vendorId}
                    </td>
                    <td className="border border-[#A8A8A8] px-4 py-6 font-medium">
                      {date}
                    </td>
                    <td className="border border-[#A8A8A8] px-4 py-6 font-medium">
                      {category}
                    </td>
                    <td className="border border-[#A8A8A8] px-4 py-6 font-medium">
                      {points}
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

export default ErningsPoints;

const data = [
  {
    vendors: "Vedant",
    vendorId: "VGDH_45",
    date: "14-12-2023",
    category: "Premium",
    points: "+200",
  },
  {
    vendors: "Vedant",
    vendorId: "VGDH_45",
    date: "14-12-2023",
    category: "Premium",
    points: "+200",
  },
  {
    vendors: "Vedant",
    vendorId: "VGDH_45",
    date: "14-12-2023",
    category: "Basic",
    points: "+200",
  },
  {
    vendors: "Vedant",
    vendorId: "VGDH_45",
    date: "14-12-2023",
    category: "Premium",
    points: "+200",
  },
  {
    vendors: "Vedant",
    vendorId: "VGDH_45",
    date: "14-12-2023",
    category: "Basic",
    points: "+200",
  },
  {
    vendors: "Vedant",
    vendorId: "VGDH_45",
    date: "14-12-2023",
    category: "Premium",
    points: "+200",
  },
  {
    vendors: "Vedant",
    vendorId: "VGDH_45",
    date: "14-12-2023",
    category: "Premium",
    points: "+200",
  },
];

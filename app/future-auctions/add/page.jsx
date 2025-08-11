import AddAuction from "@/components/pages/future-auctions/add";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      {" "}
      <AddAuction />{" "}
    </MainLayout>
  );
};

export default page;

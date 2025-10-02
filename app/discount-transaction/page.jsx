import MainLayout from "@/components/templates/MainLayout";
import DiscountTransaction from "@/components/pages/payment-management/DiscountTransaction";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Rohit 👋"}>
      <DiscountTransaction />
    </MainLayout>
  );
};

export default page;

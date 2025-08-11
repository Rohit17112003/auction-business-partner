import PaymentManagement from "@/components/pages/payment-management";
import MainLayout from "@/components/templates/MainLayout";

const page = () => {
  return (
    <MainLayout pageTitle={"Hi Admin 👋"}>
      <PaymentManagement />
    </MainLayout>
  );
};

export default page;

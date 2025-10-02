import MainLayout from "@/components/templates/MainLayout";
import PurchaseAuctions from "@/components/pages/subscription-plans/PurchaseAuctions";

const Page = () => {
  return (
    <MainLayout
      pageTitle={"Hi Admin 👋"}
      customBg="bg-gradient-to-b from-[#FAFBE6] to-[#E7AF0E]" 
    >
      <PurchaseAuctions />
    </MainLayout>
  );
};

export default Page;

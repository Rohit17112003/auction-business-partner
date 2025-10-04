import ReferVendor from "@/components/pages/refer-vendor";
import MainLayout from "@/components/templates/MainLayout";

const Page = () => {
  return (
    <MainLayout
      pageTitle={"Hi Admin 👋"}
      customBg="bg-gradient-to-b from-[#FDF3A4] to-[#E7AF0E]" 
    >
      <ReferVendor />
    </MainLayout>
  );
};

export default Page;

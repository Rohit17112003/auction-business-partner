"use client";
import Button from "@/components/atoms/Button";
import BannerButton from "@/components/atoms/BannerButton";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/TextArea";
import ImageUploader from "@/components/molecules/ImageUploader";
import Select from "@/components/atoms/Select";

const AddAuction = () => {
  return (
    <section className="space-y-6 pb-8">
      <BannerButton
        route={"/live-auctions"}
        label="Add New Auction"
      />
      <form className="grid gap-5 md:gap-6 lg:grid-cols-2" action="">
        <ImageUploader className="md:col-span-1" />
        <p className="font-poppins text-medium md:pt-2  text-[0.85rem] text-[#F13E3E] md:col-span-1">
          Instructions on pic size, pix cells, pic quality etc to be provided
          here. If videos instructions to be provided duration (30 sec), video
          quality etc. Max 4 pics and 1 video can be uploaded.
        </p>
        <Textarea style="lg:col-span-2" placeholder="Description" />

        <Input
          type="text"
          name="productName"
          placeholder="Product Name"
          icon="ri-price-tag-3-line"
        />
        <Input
          type="text"
          name="hsnCode"
          placeholder="HSN Code"
          icon="ri-currency-line"
        />
        <Input
          type="number"
          name="marketPrice"
          placeholder="Market Price"
          icon="ri-bar-chart-line"
        />
        <Input
          type="number"
          name="vendorExpectedPrice"
          placeholder="Vendor Expected Price"
          icon="ri-money-dollar-circle-line"
        />
        <Input
          type="number"
          name="gst"
          placeholder="GST"
          icon="ri-file-text-line"
        />
        <Input
          type="number"
          name="cgst"
          placeholder="CGST"
          icon="ri-file-text-line"
        />
        <Input
          type="number"
          name="sgst"
          placeholder="SGST"
          icon="ri-file-text-line"
        />
        <Input
          type="number"
          name="ccess"
          placeholder="CCESS"
          icon="ri-percent-line"
        />
        <Input
          type="number"
          name="scess"
          placeholder="SCESS"
          icon="ri-percent-line"
        />
        <Input
          type="number"
          name="finalVendorPrice"
          placeholder="Final Vendor Price"
          icon="ri-cash-line"
        />
        <Input
          type="date"
          name="dateOfAuction"
          placeholder="Date of Auction"
          icon="ri-calendar-line"
        />
        <Select
          name="duration"
          icon="ri-time-line"
          placeholder="Select Duration"
          options={["1 Day", "3 Days", "1 Week", "Custom"]}
        />
        <Select
          name="doorDelivery"
          icon="ri-truck-line"
          placeholder="Door Delivery"
          options={["Yes", "No"]}
        />
        <Input
          type="text"
          name="doorDeliveryTerms"
          placeholder="Door Delivery Terms"
          icon="ri-file-text-line"
        />
        <Select
          name="matchTheOffer"
          icon="ri-shake-hands-line"
          placeholder="Match The Offer"
          options={["Yes", "No"]}
        />
        <Input
          type="number"
          name="winnersCount"
          placeholder="How Many Winners Can Match The Offer"
          icon="ri-user-star-line"
        />
        <Select
          name="top3SocialCause"
          icon="ri-heart-line"
          placeholder="Your Top 3 Preferred Social Cause"
          options={["Education", "Environment", "Healthcare", "Others"]}
        />
        <Input
          type="number"
          name="startPriceBid"
          placeholder="Start Price Bid (After Platform Charges)"
          icon="ri-price-tag-line"
        />
        <Button style="md:w-56 w-full lg:col-span-2" label="Add" />
      </form>
    </section>
  );
};

export default AddAuction;

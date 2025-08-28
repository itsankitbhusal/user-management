"use client";

import { useRouter } from "next/navigation";
import CustomButton from "@/components/CustomButton";
import { LuChevronLeft } from "react-icons/lu";

const BackButton = () => {
  const router = useRouter();

  return (
    <CustomButton
      label="Back to Users"
      color="blue"
      icon={<LuChevronLeft />}
      onClick={() => router.back()}
      className="rounded-lg"
    />
  );
};

export default BackButton;

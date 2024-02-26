import Image from "next/image";
import RootLayout from "./../layout";
import { UserButton, useOrganization } from "@clerk/nextjs";
import { EmptyOrganization } from "./_components/empty-org";

const DashboardPage = () => {
  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      <EmptyOrganization />
    </div>
  );
};

export default DashboardPage;

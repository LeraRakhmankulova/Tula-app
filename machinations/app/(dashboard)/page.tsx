"use client";

import RootLayout from "./../layout";
import { EmptyOrganization } from "./_components/empty-org";
import { useOrganization } from "@clerk/nextjs";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {JSON.stringify(searchParams)}
      {!organization ? <EmptyOrganization /> : <p>Board list</p>}
    </div>
  );
};

export default DashboardPage;

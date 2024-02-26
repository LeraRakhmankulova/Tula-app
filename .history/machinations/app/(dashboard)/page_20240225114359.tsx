import Image from "next/image";
import RootLayout from "./../layout";
import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div>This is an auth page</div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}

export def

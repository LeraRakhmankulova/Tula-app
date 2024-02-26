import Image from "next/image";
import RootLayout from "./";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>This is an auth page</div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}

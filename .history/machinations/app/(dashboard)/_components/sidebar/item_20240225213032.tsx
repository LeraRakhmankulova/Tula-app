"use client";

import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  return <div className="aspect-square relative">
    <Image fill
    />
  </div>;
};

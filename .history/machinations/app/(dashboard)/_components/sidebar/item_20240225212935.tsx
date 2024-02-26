"use client";

import Image from "next/image";
import { useOrganization, useOrganizationList} from "@clerk/nextjs"

interface ItemProps {
    id: string,
    name: string,
    imageUrl: string
}

export const Item = ({}: ItemProps) => {
  return (
    <div>Item</div>
  )
}

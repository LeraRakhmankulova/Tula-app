"use client"

import { useOrganizationList } from "@clerk/nextjs"

export const List = () => {
    const {userMemberships} = useOrganizationList
  return (
    <div>List</div>
  )
}

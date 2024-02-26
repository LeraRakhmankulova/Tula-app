"use client";

import { useOrganizationList } from "@clerk/nextjs";

export const List = () => {
  const { userMemberships } = useOrganizationList({
    use
  });
  return <div>List</div>;
};

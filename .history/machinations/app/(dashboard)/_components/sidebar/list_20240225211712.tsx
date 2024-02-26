"use client";

import { useOrganizationList } from "@clerk/nextjs";

export const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
        i
    }
  });
  return <div>List</div>;
};

"use client";

import { useOrganizationList } from "@clerk/nextjs";

export const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
        infinite: true
    }
  });
  return <div>List</div>;
};

"use client";

import { useOrganizationList } from "@clerk/nextjs";

export const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!use)
  return <div>List</div>;
};

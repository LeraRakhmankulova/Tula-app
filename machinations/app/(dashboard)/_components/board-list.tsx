"use client";

import { Button } from "@/components/ui/button";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];

  if (!data?.length && query.search) {
    return <div>Try searching for something else</div>;
  }

  if (!data?.length && query.favorites) {
    return <div>No favorites</div>;
  }

  if (!data?.length) {
    return (
      <div className="flex flex-col gap-10">
        No boards at all
        <Button size="lg">Create board</Button>
      </div>
    );
  }

  return <div>{JSON.stringify(query)}</div>;
};

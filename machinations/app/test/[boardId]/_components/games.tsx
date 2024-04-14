"use client";

import { useAnimateScheme } from "@/app/store/use-animate-scheme";

export const Games = () => {
  const {  games } = useAnimateScheme();

  return (
    <div className="text-xs text-center px-4">
      <label>Games</label>
      <div className="flex gap-x-3 items-center">
        <div>{1}</div>
        <div>/</div>
        <div>{games}</div>
      </div>
    </div>
  );
};

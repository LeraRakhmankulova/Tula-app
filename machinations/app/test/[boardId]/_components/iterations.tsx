"use client";

import { useAnimateScheme } from "@/app/store/use-animate-scheme";
import { useEffect, useState } from "react";

export const Iterations = () => {
  const { count, iterations } = useAnimateScheme();


  return (
    <div className="text-xs text-center px-4">
      <label>Iterations</label>
      <div className="flex gap-x-3 items-center">
        <div>{count}</div>
        <div>/</div>
        <div>{iterations}</div>
      </div>
    </div>
  );
};

import { useChangeEdgeType } from "@/app/store/use-custom-edge";
import React from "react";
import { Panel } from "reactflow";

export const EdgeTypePanel = () => {
    
  const { onChangeType } = useChangeEdgeType();
  return (
    <Panel position="bottom-left" className="flex gap-x-2 items-center">
      <button
        className="bg-white rounded-md p-2"
        onClick={() => onChangeType("Default")}
      >
        Default
      </button>
      <button
        className="bg-white rounded-md p-2"
        onClick={() => onChangeType("SmoothStep")}
      >
        SmoothStep
      </button>
      <button
        className="bg-white rounded-md mr-16 p-2"
        onClick={() => onChangeType("Bezier")}
      >
        Bezier
      </button>
    </Panel>
  );
};

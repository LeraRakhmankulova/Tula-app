"use client";

import { StructType } from "@/app/types/structs";
import { memo } from "react";
import { Handle, NodeResizer, Position } from "reactflow";

const CustomNode = ({ data: { label, struct }, selected }: any) => {
  return (
    <>
      <NodeResizer
        color="blue"
        isVisible={selected}
        minWidth={10}
        minHeight={10}
      />
      {struct !== StructType.Source && (
        <Handle type="target" position={Position.Left} />
      )}
      <div className="text-sm bg-white px-4 py-1 text-center rounded-sm border border-blue-500 border-solid border-2 h-full w-full flex items-center justify-center">
        {struct === StructType.Source ? "Source" : label}
      </div>
      {struct !== StructType.End && (
        <Handle type="source" position={Position.Right} />
      )}
      {struct !== StructType.Source && (
        <div className="h-full w-full flex justify-center">
          <span className="font-bold text-xs">{struct}</span>
        </div>
      )}
    </>
  );
};

export default memo(CustomNode);

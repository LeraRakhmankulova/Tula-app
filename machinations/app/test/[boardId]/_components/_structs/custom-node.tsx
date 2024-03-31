"use client";

import { useTestScore } from "@/app/store/test-score";
import { useAnimateScheme } from "@/app/store/use-animate-scheme";
import { StructType } from "@/app/types/structs";
import { memo } from "react";
import { Handle, NodeResizer, Position, useNodeId } from "reactflow";

const CustomNode = ({ data: { label, struct }, selected }: any) => {
  const { edgeValue } = useTestScore();
  const { isPlay } = useAnimateScheme();
  const nodeId = useNodeId();
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
        {struct === StructType.Source ? "Source" : edgeValue}
      </div>
      {struct !== StructType.End && (
        <Handle type="source" position={Position.Right} />
      )}
      <div>{nodeId}</div>
      {struct !== StructType.Source && (
        <div className="h-full w-full flex justify-center">
          <span className="font-bold text-xs">{struct}</span>
        </div>
      )}
    </>
  );
};

export default memo(CustomNode);

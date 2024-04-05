"use client";
import { useAnimateScheme } from "@/app/store/use-animate-scheme";
import { StructType } from "@/app/types/structs";
import { memo, useEffect, useState } from "react";
import {
  Edge,
  Handle,
  NodeResizer,
  Position,
  useEdges,
  useNodeId,
} from "reactflow";

const CustomNode = ({ data: { label, struct }, selected }: any) => {
  const { isPlay, time, onReset, isReset } = useAnimateScheme();
  const nodeId = useNodeId();
  const [edge, setEdge] = useState("0");
  const edges = useEdges();

  useEffect(() => {
    const newEdge = edges.find((edge) => edge.target === nodeId);
    let intervalId: any;

    const intervalCallback = () => {
      setEdge((prevEdge) =>
        (parseInt(prevEdge) + parseInt(newEdge?.data || 0)).toString()
      );
    };

    if (isPlay) {
      intervalId = setInterval(intervalCallback, time * 1000);
    }

    if (isReset) {
      setEdge("0")
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [edges, nodeId, isPlay, onReset]);

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
        {struct === StructType.Source ? "Source" : edge}
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

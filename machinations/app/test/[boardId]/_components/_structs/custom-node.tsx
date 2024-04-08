"use client";
import { useAnimateScheme } from "@/app/store/use-animate-scheme";
import { StructType } from "@/app/types/structs";
import { memo, useEffect } from "react";
import {
  Edge,
  Handle,
  NodeResizer,
  Position,
  useEdges,
  useNodeId,
  useNodes,
} from "reactflow";
import "./struct-style.css";
import useStore from "@/app/store/use-store";

const CustomNode = ({ data: { label, struct }, selected }: any) => {
  const { isPlay, time, onReset, isReset } = useAnimateScheme();
  const { setNodeLabel, getEdgeValues } = useStore();
  const nodeId = useNodeId();
  const nodes = useNodes();
  const edges = useEdges();
  // let newEdges =[]

  useEffect(() => {
    let newEdges = edges.filter((edge) => edge.target === nodeId);
    // if (newEdges) {
    let { sourceStruct, sourceValue, targetValue } = getEdgeValues(
      newEdges[0]?.id
    );
    console.log(
      "nodeId",
      nodeId,
      "sourceValue",
      sourceValue,
      "targetValue",
      targetValue
    );

    const sumOfData = newEdges.reduce((accumulator, currentEdge) => {
      return accumulator + (+currentEdge.data || 0); // Если значение data не является числом, прибавляем 0
    }, 0);

    let intervalId: any;
    const intervalCallback = () => {
      if (sourceValue >= targetValue || sourceStruct === "Source")
        setNodeLabel(nodeId!, (parseInt(label) + sumOfData).toString());
    };

    if (isPlay) {
      intervalId = setInterval(intervalCallback, time * 1000);
    }

    if (isReset) {
      setNodeLabel(nodeId!, "0");
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [label, nodeId, isPlay, onReset, setNodeLabel, edges]);

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
      <div className={struct === StructType.Pool ? "poolNode" : "simpleNode"}>
        {struct === StructType.Source
          ? "Source"
          : struct === StructType.Gate
          ? "Gate"
          : label}
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

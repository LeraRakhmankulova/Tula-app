"use client";
import { useAnimateScheme } from "@/app/store/use-animate-scheme";
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
import useStore from "@/app/store/use-store";
import { StyledNode } from "./nodeComponents/styled-node";
import { StructType } from "@/app/types/structs";

interface DataProps {
  data: {
    label: string;
    struct: StructType;
  };
  selected: boolean;
}

const CustomNode = ({ data: { label, struct }, selected }: DataProps) => {
  const { isPlay, time, onReset, isReset } = useAnimateScheme();
  const { setNodeLabel, getEdgeValues } = useStore();
  const nodeId = useNodeId();
  const edges = useEdges();

  useEffect(() => {
    let newEdges = edges.filter((edge) => edge.target === nodeId);

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
      // if (sourceValue <= targetValue + 1)
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
        minWidth={45}
        minHeight={45}
      />
      <StyledNode struct={struct} label={label} />
    </>
  );
};

export default memo(CustomNode);

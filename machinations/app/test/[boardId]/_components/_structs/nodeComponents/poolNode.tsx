"use client";
import { useAnimateScheme } from "@/app/store/use-animate-scheme";
import { memo, useEffect } from "react";
import {
  Edge,
  Node,
  NodeResizer,
  useEdges,
  useNodeId,
  useNodes,
} from "reactflow";
import useStore from "@/app/store/use-store";
import { StructType } from "@/app/types/structs";
import { StyledNode } from "./styled-node";

interface DataProps {
  id: string;
  data: {
    label: string;
    struct: StructType;
    name: string;
  };
  selected: boolean;
}

const PoolNode = ({ data: { label, struct, name }, selected, id }: DataProps) => {
  const { isPlay, onStop, onReset } = useAnimateScheme();
  const { setNodeLabel, getEdgeValues } = useStore();
  const nodeId = useNodeId();
  const edges = useEdges();
  const nodes = useNodes();

  // useEffect(() => {
  //   let intervalId = null;
  //   if (isPlay) {
  //     let targetEdge: Edge = edges.find((edge) => edge?.source === nodeId);

  //     let targetNodeId: Node = nodes.find(
  //       (node) => node.id === targetEdge?.target
  //     );
  //     let initialData =  0;

  //     intervalId = setInterval(() => {
  //       // Увеличиваем значение sourceEdge.data каждую секунду на 1
  //       initialData += +targetEdge?.data;


  //       setNodeLabel(targetNodeId?.id, +initialData);
  //     }, 1000);
  //   }
  //   return () => clearInterval(intervalId);
  // }, [isPlay, onStop, onReset, label]);

  useEffect(() => {
    let intervalId = null;
    if (isPlay) {
      let newEdges = edges.filter((edge) => edge.target === nodeId)
      const sumOfData = newEdges.reduce((accumulator, currentEdge) => {
        return accumulator + (+currentEdge.data || 0); 
      }, 0);
  

      intervalId = setInterval(() => {


        setNodeLabel(nodeId, (parseInt(label) + sumOfData).toString());
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isPlay, onStop, onReset, label]);

  return (
    <>
      <NodeResizer
        color="blue"
        isVisible={selected}
        minWidth={45}
        minHeight={45}
      />
      <div>id {nodeId}</div>
      
      <StyledNode struct={struct} label={label} name={name} />
    </>
  );
};

export default memo(PoolNode);

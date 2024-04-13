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
  const nodeId = useNodeId();
  const edges = useEdges();
  const nodes = useNodes();

  return (
    <>
      <NodeResizer
        color="blue"
        isVisible={selected}
        minWidth={45}
        minHeight={45}
      />
      <div>label {label}</div>
      <StyledNode struct={struct} label={label} name={name} />
    </>
  );
};

export default memo(PoolNode);

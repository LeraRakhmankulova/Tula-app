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
  data: {
    label: string;
    struct: StructType;
    name: string;
  };
  selected: boolean;
}

const DelayNode = ({ data: { label, struct, name }, selected }: DataProps) => {
  const { isPlay } = useAnimateScheme();
  const { setNodeLabel, getEdgeValues } = useStore();
  const nodeId = useNodeId();
  const edges = useEdges();
  const nodes = useNodes();

  useEffect(() => {
    if (!isPlay) return;
    let sourceEdge: Edge = edges.find((edge) => edge.target === nodeId);

    // тут в sourceEdge.data хранится значение количество ресурсов
    let targetEdge: Edge = edges.find((edge) => edge.source === nodeId);

    // тут в targetEdge.data хранится значение количества млсекунд * 1000 - то что задержка

    let targetNodeId: Node = nodes.find(
      (node) => node.id === targetEdge.target
    );

    //
    const delay = setTimeout(() => {
      setNodeLabel(targetNodeId.id!, sourceEdge?.data);
    }, +targetEdge.data * 1000);

    return () => clearTimeout(delay); // Очистка таймера при размонтировании компонента
  }, [edges, nodes, nodeId, isPlay]);

  return (
    <>
      <NodeResizer
        color="blue"
        isVisible={selected}
        minWidth={45}
        minHeight={45}
      />
      <StyledNode struct={struct} label={label} name={name} />
    </>
  );
};

export default memo(DelayNode);

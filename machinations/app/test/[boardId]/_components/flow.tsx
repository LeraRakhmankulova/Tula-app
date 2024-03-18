"use client";
import "reactflow/dist/style.css";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider,
  useNodes,
  Node,
  MarkerType,
  Controls,
  MiniMap,
  Background,
  Panel,
  useReactFlow,
} from "reactflow";
import { Participants } from "@/app/board/[boardId]/_components/participants";
import { Info } from "@/app/board/[boardId]/_components/info";
import { CursorsPresence } from "@/app/board/[boardId]/_components/cursors-presence";
import CustomNode from "./_structs/custom-node";

import { useMyPresence, useOthers } from "@/liveblocks.config";
import { Cursor } from "./cursor";
import CustomEdge from "./_structs/custom-edge";
import { Toolbar } from "./panels/toolbar/toolbar";
import DownloadButton from "./ui/download-button";
import { BottomPanel } from "./panels/bottom-panel";
import { TopPanel } from "./panels/top-panel";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 200 }, data: { label: "2" } },
  {
    id: "3",
    type: "textUpdater",
    position: { x: 100, y: 400 },
    data: { label: 123 },
  },
];
const initialEdges = [
  // { id: "e1-2", source: "1", target: "2", animated: true },
  {
    id: "edge-button",
    source: "1",
    target: "2",
    type: "custom",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
  },
];

interface FlowProps {
  boardId: string;
}

const getNodeId = () => `randomnode_${+new Date()}`;

const Flow = ({ boardId }: FlowProps) => {
  const nodeTypes = useMemo(() => ({ textUpdater: CustomNode }), []);
  const edgeTypes = useMemo(
    () => ({
      custom: CustomEdge,
    }),
    []
  );
  const [nodeName, setNodeName] = useState("Node 1");
  const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === "3") {
          node.data = {
            ...node.data,
            label: nodeName,
          };
        }

        return node;
      })
    );
  }, [nodeName, setNodes]);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const [{ cursor }, updateMyPresence] = useMyPresence();
  const others = useOthers();

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      data: { label: "Added node" },
      type: "textUpdater",
      position: {
        x: (Math.random() * window.innerWidth) / 2,
        y: (Math.random() * window.innerHeight) / 2,
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  return (
    <main
      className="h-full w-full relative bg-neutral-100 touch-none"
      onPointerMove={(event) => {
        updateMyPresence({
          cursor: {
            x: Math.round(event.clientX),
            y: Math.round(event.clientY),
          },
        });
      }}
      onPointerLeave={() =>
        updateMyPresence({
          cursor: null,
        })
      }
    >
      <div className="z-10 w-full relative">
        <Info boardId={boardId} />
        <Participants />
        <Toolbar onClick={onAdd} />
      </div>
      {others.map(({ connectionId, presence }) => {
        if (presence.cursor === null) {
          return null;
        }
        return <Cursor key={connectionId} connectionId={connectionId} />;
      })}
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />
          <MiniMap />
          <Background color="blue" gap={16} className="bg-blue-100" />
          <BottomPanel />
          <TopPanel />
        </ReactFlow>
      </ReactFlowProvider>
    </main>
  );
};

export default Flow;

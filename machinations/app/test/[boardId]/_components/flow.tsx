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
  NodeOrigin,
} from "reactflow";
import { Participants } from "@/app/board/[boardId]/_components/participants";
import { Info } from "@/app/board/[boardId]/_components/info";
import CustomNode from "./_structs/custom-node";
import { shallow } from "zustand/shallow";

import { useMyPresence, useOthers } from "@/liveblocks.config";
import { Cursor } from "./cursor";
import CustomEdge from "./_structs/custom-edge";
import { Toolbar } from "./panels/toolbar";
import { BottomPanel } from "./panels/bottom-panel";
import { TopPanel } from "./panels/top-panel";
import useStore, { RFState } from "@/app/store/use-store";


const nodeTypes = { textUpdater: CustomNode }
const edgeTypes = { custom: CustomEdge }

// const initialNodes = [
//   {
//     id: "1",
//     position: { x: 0, y: 0 },
//     data: { label: "Node 1", struct: "Start" },
//     type: "textUpdater",
//   },
//   {
//     id: "2",
//     position: { x: 0, y: 200 },
//     data: { label: "Node 2", struct: "Pool" },
//     type: "textUpdater",
//   },
//   {
//     id: "3",
//     type: "textUpdater",
//     position: { x: 100, y: 400 },
//     data: { label: 123, struct: "Start" },
//   },
// ];
// const initialEdges = [
//   // { id: "e1-2", source: "1", target: "2", animated: true },
//   {
//     id: "edge-button",
//     source: "1",
//     target: "2",
//     type: "custom",
//     animated: true,
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//       width: 20,
//       height: 20,
//     },
//   },
// ];

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  addNode: state.addNode
});
const nodeOrigin: NodeOrigin = [0.5, 0.5];
interface FlowProps {
  boardId: string;
}

const getNodeId = () => `randomnode_${+new Date()}`;

const Flow = ({ boardId }: FlowProps) => {
  const { nodes, edges, onNodesChange, onEdgesChange, addNode } = useStore(
    selector,
    shallow
  );

  // const [nodeName, setNodeName] = useState("Node 1");
  // const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // useEffect(() => {
  //   setNodes((nds) =>
  //     nds.map((node) => {
  //       if (node.id === "3") {
  //         node.data = {
  //           ...node.data,
  //           label: nodeName,
  //         };
  //       }

  //       return node;
  //     })
  //   );
  // }, [nodeName, setNodes]);

  // const onConnect = useCallback(
  //   (connection: any) => {
  //     const edge = { ...connection, type: "custom" };
  //     setEdges((eds) => addEdge(edge, eds));
  //   },
  //   [setEdges]
  // );

  const [{ cursor }, updateMyPresence] = useMyPresence();
  const others = useOthers();

  // const onAdd = useCallback(() => {
  //   const newNode = {
  //     id: getNodeId(),
  //     data: { label: "Added node", struct: "Start" },
  //     type: "textUpdater",
  //     position: {
  //       x: (Math.random() * window.innerWidth) / 2,
  //       y: (Math.random() * window.innerHeight) / 2,
  //     },
  //   };
  //   setNodes((nds) => nds.concat(newNode));
  // }, [setNodes]);

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
        <Toolbar onClick={() => {}} />
      </div>
      {others.map(({ connectionId, presence }) => {
        if (presence.cursor === null) {
          return null;
        }
        return <Cursor key={connectionId} connectionId={connectionId} />;
      })}

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeOrigin={nodeOrigin}
        // onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background color="blue" gap={16} className="bg-blue-100" />
        <BottomPanel />
        <TopPanel />
      </ReactFlow>
    </main>
  );
};

export default Flow;

"use client";
import "reactflow/dist/style.css";
import React, { useCallback, useEffect, useState } from "react";
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
} from "reactflow";
import { Participants } from "@/app/board/[boardId]/_components/participants";
import { Info } from "@/app/board/[boardId]/_components/info";
import { CursorsPresence } from "@/app/board/[boardId]/_components/cursors-presence";
import CustomNode from "./_structs/poolStruct";
import CustomEdge from "./edges/customEdge";
import { useMyPresence, useOthers } from "@/liveblocks.config";
import { Cursor } from "./cursor";

const nodeTypes = { textUpdater: CustomNode };
const edgeTypes = {
  buttonedge: CustomEdge,
};

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 200 }, data: { label: "2" } },
  {
    id: "3",
    type: "textUpdater",
    position: { x: 100, y: 400 },
    data: { label: 123 },
    style: {
      background: "red",
      border: "3px solid blue",
      borderRadius: 50,
      fontSize: 12,
    },
  },
];
const initialEdges = [
  // { id: "e1-2", source: "1", target: "2", animated: true },
  {
    id: "edge-button",
    source: "1",
    target: "2",
    type: "buttonedge",
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
// Так можно вытащить инфу в другой компонент из какого-то стора
// function Sidebar() {
//   const nodes = useNodes();

//   return (
//     <aside>
//       {nodes.map((node: Node) => (
//         <div key={node.id}>
//           Node {node.id} - x: {node.position.x.toFixed(2)}, y:{" "}
//           {node.position.y.toFixed(2)}
//         </div>
//       ))}
//     </aside>
//   );
// }
const Flow = ({ boardId }: FlowProps) => {
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

  const addNode = () => {
    const newNodeId = `new-node-${nodes.length + 1}`;
    const newNode = {
      id: newNodeId,
      position: { x: 200, y: 200 }, // Установите начальные координаты нового узла
      data: { label: newNodeId },
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  const [{ cursor }, updateMyPresence] = useMyPresence();
  const others = useOthers();

  return (
    <main
      // className="fixed inset-0"
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
      </div>
      {others.map(({ connectionId, presence }) => {
        if (presence.cursor === null) {
          return null;
        }
        return <Cursor key={connectionId} connectionId={connectionId} />;
      })}
      {/* <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          nodeTypes={nodeTypes}
          edges={edges}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          elevateEdgesOnSelect
        >
          <Controls />
          <MiniMap />
          <Background color="blue" gap={16} className="bg-blue-100" />
        </ReactFlow>
      </ReactFlowProvider> */}
    </main>
  );
};

export default Flow;

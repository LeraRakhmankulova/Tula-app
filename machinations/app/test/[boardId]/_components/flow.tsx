"use client";
import "reactflow/dist/style.css";
import ReactFlow, { Controls, MiniMap, Background, Node } from "reactflow";
import { Participants } from "@/app/board/[boardId]/_components/participants";
import { Info } from "@/app/board/[boardId]/_components/info";

import { shallow } from "zustand/shallow";

import { useMyPresence, useOthers } from "@/liveblocks.config";
import { Cursor } from "./cursor";
import { Toolbar } from "./panels/toolbar";
import { BottomPanel } from "./panels/bottom-panel";
import { TopPanel } from "./panels/top-panel";
import useStore, { RFState } from "@/app/store/use-store";
import { edgeTypes, nodeTypes } from "@/app/types/structs";
import { useCallback, useEffect } from "react";

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  deleteNode: state.deleteNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  addNode: state.addNode,
});
interface FlowProps {
  boardId: string;
}

const Flow = ({ boardId }: FlowProps) => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, deleteNode } =
    useStore(selector, shallow);

  const [{ cursor }, updateMyPresence] = useMyPresence();
  const others = useOthers();

  const onNodeContextMenu = useCallback((event: any, node: Node) => {
    event.preventDefault();
    if (event.key === "Delete") {
      deleteNode(node.id);
    };
  }, []);

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
        <Toolbar />
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
        onConnect={onConnect}
        onNodeContextMenu={onNodeContextMenu}
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

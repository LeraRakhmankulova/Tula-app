"use client";
import "reactflow/dist/style.css";
import ReactFlow, {
  Controls,
  MiniMap,
  Background,
  Node,
  useKeyPress,
  Panel,
} from "reactflow";
import { Participants } from "@/app/board/[boardId]/_components/participants";
import { Info } from "@/app/board/[boardId]/_components/info";

import { shallow } from "zustand/shallow";

import { useMyPresence, useOthers } from "@/liveblocks.config";
import { Cursor } from "./cursor";
import { Toolbar } from "./panels/toolbar";
import { BottomPanel } from "./panels/bottom-panel";
import { TopPanel } from "./panels/top-panel";
import useStore, { RFState } from "@/app/store/use-store";
import { CustomEdgesTypes, edgeTypes, nodeTypes } from "@/app/types/structs";
import { useCallback, useEffect, useRef, useState } from "react";
import ContextMenu from "./context-menu";
import { useChangeEdgeType } from "@/app/store/use-custom-edge";

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

interface IContextMenu {
  id: string;
  top: number;
  left: number;
  right: number | boolean;
  bottom: number | boolean;
}

const Flow = ({ boardId }: FlowProps) => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, deleteNode } =
    useStore(selector, shallow);
  const { onChangeType } = useChangeEdgeType();
  const [{ cursor }, updateMyPresence] = useMyPresence();
  const others = useOthers();

  const [menu, setMenu] = useState<IContextMenu | null>(null);
  const ref = useRef(null);

  const onNodeContextMenu = useCallback(
    (event: any, node: any) => {
      event.preventDefault();
      const pane = ref.current?.getBoundingClientRect();
      let menu = {
        id: node.id,
        top: event.clientY < pane.height - 200 && event.clientY,
        left: event.clientX < pane.width - 200 && event.clientX,
        right: event.clientX >= pane.width - 200 && pane.width - event.clientX,
        bottom:
          event.clientY >= pane.height - 200 && pane.height - event.clientY,
      };
      console.log(menu);
      setMenu(menu);
    },
    [setMenu]
  );

  const onPaneClick = useCallback(() => {
    setMenu(null);
  }, [setMenu]);

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
        ref={ref}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onPaneClick={onPaneClick}
        onNodeContextMenu={onNodeContextMenu}
      >
        {menu && <ContextMenu onClick={onPaneClick} {...menu} />}
        <Controls />
        <MiniMap />
        <Background color="blue" gap={16} className="bg-blue-100" />

        <BottomPanel />
        <TopPanel />
        <Panel position="top-right" className="flex gap-x-2 items-center">
          <button
            className="bg-white rounded-md p-2"
            onClick={() => onChangeType("Default")}
          >
            Default
          </button>
          <button
            className="bg-white rounded-md p-2"
            onClick={() => onChangeType("SmoothStep")}
          >
            SmoothStep
          </button>
          <button
            className="bg-white rounded-md mr-16 p-2"
            onClick={() => onChangeType("Bezier")}
          >
            Bezier
          </button>
        </Panel>
      </ReactFlow>
    </main>
  );
};

export default Flow;

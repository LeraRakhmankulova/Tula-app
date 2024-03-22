"use client";
import "reactflow/dist/style.css";
import ReactFlow, {
  useEdgesState,
  Controls,
  MiniMap,
  Background,
  NodeOrigin,
} from "reactflow";
import { Participants } from "@/app/board/[boardId]/_components/participants";
import { Info } from "@/app/board/[boardId]/_components/info";

import { shallow } from "zustand/shallow";

import { useMyPresence, useOthers } from "@/liveblocks.config";
import { Cursor } from "./cursor";
import CustomEdge from "./_structs/custom-edge";
import { Toolbar } from "./panels/toolbar";
import { BottomPanel } from "./panels/bottom-panel";
import { TopPanel } from "./panels/top-panel";
import useStore, { RFState } from "@/app/store/use-store";
import { edgeTypes, nodeTypes } from "@/app/types/structs";




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
  onConnect: state.onConnect,
  addNode: state.addNode
});

interface FlowProps {
  boardId: string;
}

const getNodeId = () => `randomnode_${+new Date()}`;

const Flow = ({ boardId }: FlowProps) => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    selector,
    shallow
  );

  // const [nodeName, setNodeName] = useState("Node 1");
  // const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  const [ setEdges] = useEdgesState([]);

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
  //     setEdges((eds: any) => addEdge(edge, eds));
  //   },
  //   [onEdgesChange]
  // );

  const [{ cursor }, updateMyPresence] = useMyPresence();
  const others = useOthers();

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
        <Toolbar/>
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

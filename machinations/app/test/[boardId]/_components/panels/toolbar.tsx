import { StructType } from "@/app/types/structs";
import { ToolButton } from "../ui/tool-button";
import {
  ArrowLeftRight,
  Recycle,
  Play,
  Dices,
  Hourglass,
  CheckCheck,
  Undo,
  Redo,
  BadgePlus,
  BadgeMinus,
} from "lucide-react";
import useStore, { RFState } from "@/app/store/use-store";
import { shallow } from "zustand/shallow";

interface ToolbarProps {
  canvasState: CanvasState;
  onClick: () => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  addNode: state.addNode,
});

export const Toolbar = ({ onClick }: any) => {
  const { nodes, edges, onNodesChange, onEdgesChange, addNode } = useStore(
    selector,
    shallow
  );

  return (
    <div className="absolute top-40 left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton
          label="Source"
          onClick={addNode}
          isActive={false}
          icon={Play}
        />
        <ToolButton
          label="Pool"
          onClick={() => {}}
          isActive={false}
          icon={BadgePlus}
        />
        <ToolButton
          label="Consumer"
          onClick={() => {}}
          isActive={false}
          icon={BadgeMinus}
        />
        <ToolButton
          label="Converter"
          onClick={() => {}}
          isActive={true}
          icon={Recycle}
        />
        <ToolButton
          label="Gate"
          onClick={() => {}}
          isActive={false}
          icon={ArrowLeftRight}
        />
        <ToolButton
          label="Random"
          onClick={() => {}}
          isActive={false}
          icon={Dices}
        />
        <ToolButton
          label="Delay"
          onClick={() => {}}
          isActive={false}
          icon={Hourglass}
        />
        <ToolButton
          label="End"
          onClick={() => {}}
          isActive={false}
          icon={CheckCheck}
        />
      </div>
      {/* undo redo */}
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <ToolButton
          label="Undo"
          onClick={() => {}}
          isActive={false}
          icon={Undo}
        />
        <ToolButton
          label="Redo"
          onClick={() => {}}
          isActive={false}
          icon={Redo}
        />
      </div>
    </div>
  );
};

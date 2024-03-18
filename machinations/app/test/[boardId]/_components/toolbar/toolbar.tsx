import { ToolButton } from "./tool-button";
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

interface ToolbarProps {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export const Toolbar = () => {
  return (
    <div className="absolute top-40 left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton
          label="Source"
          onClick={() => {}}
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

import { ToolButton } from "./tool-button";

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
        <ToolButton label="Select" onClick={() => {}} isActive={false} />
        <ToolButton label="Text" onClick={() => {}} isActive={false} />
        <ToolButton label="Sticky note" onClick={() => {}} isActive={false} />
        <ToolButton label="Rectangle" onClick={() => {}} isActive={false} />
        <ToolButton label="Arrow" onClick={() => {}} isActive={false} />
        <ToolButton label="Ellipse" onClick={() => {}} isActive={false} />
        <ToolButton label="Pen" onClick={() => {}} isActive={false} />
      </div>
      {/* undo redo */}
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <ToolButton label="Undo" onClick={() => {}} isActive={false} />
        <ToolButton label="Redo" onClick={() => {}} isActive={false} />
      </div>
    </div>
  );
};

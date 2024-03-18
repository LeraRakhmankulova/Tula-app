import { Panel } from "reactflow";
import { ToolButton } from "./toolbar/tool-button";
import { Play, RotateCcw, Pause } from "lucide-react";

export const BottomPanel = () => {
  return (
    <Panel position="bottom-center">
      <div className="bg-white rounded-md p-1.5 flex gap-x-2 items-center shadow-md">
        <ToolButton
          label="Play"
          onClick={() => {}}
          isActive={false}
          icon={Play}
          background="blue"
        />
        <ToolButton
          label="Pause"
          onClick={() => {}}
          isActive={false}
          icon={Pause}
          background="red"
        />
        <ToolButton
          label="Reset"
          onClick={() => {}}
          isActive={false}
          icon={RotateCcw}
          background="red"
        />
      </div>
    </Panel>
  );
};

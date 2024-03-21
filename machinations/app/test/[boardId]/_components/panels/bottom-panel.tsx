import { Panel } from "reactflow";
import { ToolButton } from "../ui/tool-button";
import { Play, RotateCcw, Pause } from "lucide-react";
import CustomInput from "../ui/custom-input";
import { useState } from "react";

export const BottomPanel = () => {
  const [play, setPlay] = useState<boolean>(false)
  return (
    <Panel position="bottom-center">
      <div className="bg-white rounded-md flex gap-x-2 items-center shadow-md py-2 px-3">
        <div className="mr-5 flex gap-x-2 items-center">
          <CustomInput label="Iterations" placeholder="10" />
          <CustomInput label="Time" placeholder="1s" />
        </div>
        <ToolButton
          label="Play"
          isDisabled={play}
          onClick={() => setPlay(!play)}
          isActive={false}
          icon={Play}
          background="blue"
        />
        <ToolButton
          label="Pause"
          isDisabled={!play}
          onClick={() => setPlay(!play)}
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

import { Panel } from "reactflow";
import { ToolButton } from "../ui/tool-button";
import { Play, RotateCcw, Pause } from "lucide-react";
import CustomInput from "../ui/custom-input";
import { useAnimateScheme } from "@/app/store/use-animate-scheme";
import useStore from "@/app/store/use-store";
import { useEffect } from "react";
import { Iterations } from "../iterations";

export const BottomPanel = () => {
  const { isPlay, onPlay, onStop, onReset } = useAnimateScheme();
  const { edges, onEdgesChange, setEdgeAnimated } = useStore();
  useEffect(() => {
    setEdgeAnimated(isPlay);
    console.log(isPlay);
  }, [isPlay]);

  return (
    <Panel position="bottom-center">
      <div className="bg-white rounded-md flex gap-x-2 items-center shadow-md py-2 px-3">
        <div className="mr-5 flex gap-x-2 items-center">
          <CustomInput label="Iterations" placeholder="10" />
          <CustomInput label="Time" placeholder="1s" />
          <CustomInput label="Games" placeholder="1" />
        </div>
        <ToolButton
          label="Play"
          isDisabled={isPlay}
          onClick={onPlay}
          isActive={false}
          icon={Play}
          background="blue"
        />
        <ToolButton
          label="Pause"
          isDisabled={!isPlay}
          onClick={onStop}
          isActive={false}
          icon={Pause}
          background="red"
        />
        <ToolButton
          label="Reset"
          isDisabled={!isPlay}
          onClick={onReset}
          isActive={false}
          icon={RotateCcw}
          background="red"
        />
        <Iterations />
      </div>
    </Panel>
  );
};

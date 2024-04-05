import { Panel, useEdges, useNodes } from "reactflow";
import { ToolButton } from "../ui/tool-button";
import { Play, RotateCcw, Pause } from "lucide-react";
import CustomInput from "../ui/custom-input";
import { useAnimateScheme } from "@/app/store/use-animate-scheme";
import useStore from "@/app/store/use-store";
import { useEffect } from "react";
import { Iterations } from "../iterations";

export const BottomPanel = () => {
  const { isPlay, onPlay, onStop, onReset } = useAnimateScheme();
  const { setEdgeAnimated } = useStore();
  useEffect(() => {
    setEdgeAnimated(isPlay);
    console.log(isPlay);
  }, [isPlay]);

  const edges = useEdges();
  const nodes = useNodes();

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
          // isDisabled={!isPlay}
          onClick={onReset}
          isActive={false}
          icon={RotateCcw}
          background="red"
        />
        <Iterations />
        <div className="text-xs text-center px-1">
          <label>Total count</label>
          <div>{edges.length + nodes.length}</div>
        </div>
      </div>
    </Panel>
  );
};

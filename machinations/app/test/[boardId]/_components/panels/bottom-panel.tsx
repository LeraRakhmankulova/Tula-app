import { Panel } from "reactflow";
import { ToolButton } from "../ui/tool-button";
import { Play, RotateCcw, Pause } from "lucide-react";
import CustomInput from "../ui/custom-input";
import { useAnimateScheme } from "@/app/store/use-animate-scheme";
import useStore from "@/app/store/use-store";
import { useEffect } from "react";

export const BottomPanel = () => {
  const { isPlay, onPlay, onStop, onReset } = useAnimateScheme();
  const { edges, onEdgesChange } = useStore();

  // useEffect(() => {
  //   if (isPlay) {
  //     const updatedEdges = edges.map(edge => ({ type: 'update', edge: { ...edge, animated: true } }));
  //     onEdgesChange(updatedEdges);
  //   } else {
  //     const updatedEdges = edges.map(edge => ({ type: 'update', edge: { ...edge, animated: false } }));
  //     onEdgesChange(updatedEdges);
  //   }
  // }, [isPlay, edges, onEdgesChange]);


  return (
    <Panel position="bottom-center">
      <div className="bg-white rounded-md flex gap-x-2 items-center shadow-md py-2 px-3">
        <div className="mr-5 flex gap-x-2 items-center">
          <CustomInput label="Iterations" placeholder="10" />
          <CustomInput label="Time" placeholder="1s" />
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
      </div>
    </Panel>
  );
};

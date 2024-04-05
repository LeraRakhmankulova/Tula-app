// import { useEdgeTypes } from "@/app/store/use-edge-type";
import useStore from "@/app/store/use-store";
import { EdgesTypes } from "@/app/types/structs";
import React, { useCallback, useState } from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  StepEdge,
  getBezierPath,
  useReactFlow,
} from "reactflow";

export default function CustomEdge(props: EdgeProps) {
  const [inputValue, setInputValue] = useState<number>(1);

  const { setEdgeData } = useStore();
  const {
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    id,
  } = props;
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const onChange = (event: any) => {
    setInputValue(event.target.value);
    setEdgeData(id, event.target.value);
  };

  // const { edgeType } = useEdgeTypes();

  return (
    <>
      <StepEdge {...props} />
      {/* {edgeType == EdgesTypes.SmoothStep && <StepEdge {...props} />} */}
      {/* {edgeType == EdgesTypes.Default && <BaseEdge {...props} />} */}
      {/* {edgeType == EdgesTypes.SmoothStep && <StepEdge {...props} />} */}
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            pointerEvents: "all",
          }}
          className="nodrag nopan"
        >
          <input
            className="w-16 h-7 text-center rounded-sm"
            value={inputValue}
            onChange={onChange}
          />
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

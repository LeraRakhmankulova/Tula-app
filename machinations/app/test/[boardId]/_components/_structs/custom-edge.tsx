import { useTestScore } from "@/app/store/test-score";
import React, { useCallback, useState } from "react";
import {
  EdgeLabelRenderer,
  EdgeProps,
  StepEdge,
  getBezierPath,
  useReactFlow,
} from "reactflow";

export default function CustomEdge(props: EdgeProps) {
  const [inputValue, setInputValue] = useState<number>(1);
  const {setEdgeValue} = useTestScore()

  const { setEdges } = useReactFlow();
  const { sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition } =
    props;
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const onChange = (event: any) => {
    setInputValue(event.target.value)
    setEdgeValue(event.target.value)
  }

  return (
    <>
      <StepEdge {...props} />
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

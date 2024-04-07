import { useChangeEdgeType } from "@/app/store/use-custom-edge";
import useStore from "@/app/store/use-store";
import { CustomEdgesTypes } from "@/app/types/structs";
import React, { useCallback, useState } from "react";
import {
  BaseEdge,
  BezierEdge,
  EdgeLabelRenderer,
  EdgeProps,
  StepEdge,
  getBezierPath,
  getStraightPath,
  useReactFlow,
} from "reactflow";

export default function CustomEdge(props: EdgeProps) {
  const [inputValue, setInputValue] = useState<number>(1);
  const { onChangeType, currentType } = useChangeEdgeType();

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

  const [basePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const onChange = (event: any) => {
    setInputValue(event.target.value);
    setEdgeData(id, event.target.value);
  };

  return (
    <>
      {currentType === "SmoothStep" && <StepEdge {...props} />}
      {currentType === "Default" && <BaseEdge path={basePath} {...props} />}
      {currentType == "Bezier" && <BezierEdge {...props} />} 
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

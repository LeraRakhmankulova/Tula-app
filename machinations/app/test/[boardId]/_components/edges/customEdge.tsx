import React, { useCallback, useState } from "react";
import InputField from "./../ui/input";
import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  StepEdge,
  StraightEdge,
  getBezierPath,
  useReactFlow,
} from "reactflow";

export default function CustomEdge(props: EdgeProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }, []);

  const { setEdges } = useReactFlow();
  const {
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    markerEnd,
  } = props;
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <StepEdge {...props} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
          }}
        >
          <InputField value={inputValue} onChange={onChange} autoFocus />
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

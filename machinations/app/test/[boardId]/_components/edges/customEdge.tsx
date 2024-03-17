import React, { useCallback, useEffect, useState } from "react";
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
  const [focus, setFocus] = useState<boolean>(true);

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
            // everything inside EdgeLabelRenderer has no pointer events by default
            // if you have an interactive element, set pointer-events: all
            pointerEvents: "all",
          }}
          className="nodrag nopan"
        >
          <input
            className="w-16 h-5 bg-white py-1 px-3 text-center"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="tw"
          />
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

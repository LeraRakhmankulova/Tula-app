import React, { useCallback, useState } from "react";
import {
  EdgeLabelRenderer,
  EdgeProps,
  StepEdge,
  getBezierPath,
  useReactFlow,
} from "reactflow";

export default function CustomEdge(props: EdgeProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }, []);

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
            placeholder="value"
            className="w-16 h-7 text-center rounded-sm"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={
              inputValue === ""
                ? { background: "transparent" }
                : { background: "white" }
            }
          />
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

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
        <input
          value={inputValue}
          autoFocus={focus}
          onClick={() => setFocus(true)}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="teat"
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            background: "white",
            padding: 8,
            borderRadius: 5,
            fontSize: 12,
            fontWeight: 700,
            zIndex: 1000,
          }}
          className="nodrag nopan"
        />
        {/* <InputField/> */}
        {/* <input
            placeholder="test"
            className="bg-black outline-none text-white w-16 text-sm z-10"
          /> */}
        {/* </input> */}
      </EdgeLabelRenderer>
    </>
  );
}

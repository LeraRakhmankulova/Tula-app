"use client";
import { memo } from "react";
import { BaseEdge, EdgeText, getStraightPath } from "reactflow";

// const CustomEdge = ({ sourceX, sourceY, targetX, targetY, ...props }: any) => {
const CustomEdge = () => {
  //   const [edgePath] = getStraightPath({
  //     sourceX,
  //     sourceY,
  //     targetX,
  //     targetY,
  //   });

  return (
    <EdgeText
      x={100}
      y={100}
      label="some text"
      labelStyle={{ fill: "white" }}
      labelShowBg
      labelBgStyle={{ fill: "red" }}
      labelBgPadding={[2, 4]}
      labelBgBorderRadius={2}
    />
  );
};

export default memo(CustomEdge);

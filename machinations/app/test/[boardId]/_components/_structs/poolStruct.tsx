"use client";

import { memo } from "react";
import { Handle, NodeResizer, Position } from "reactflow";

const CustomNode = ({ data, selected }: any) => {
  return (
    <>
      <NodeResizer
        color="blue"
        isVisible={selected}
        minWidth={10}
        minHeight={10}
      />
      <Handle type="target" position={Position.Left} />
      <div>
        <div style={{ padding: 10 }}>{data.label}</div>
      </div>
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default memo(CustomNode);

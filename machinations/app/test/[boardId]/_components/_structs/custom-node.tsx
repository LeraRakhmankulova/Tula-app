"use client";
import { useAnimateScheme } from "@/app/store/use-animate-scheme";
import { StructType } from "@/app/types/structs";
import { memo, useEffect, useState } from "react";
import {
  Edge,
  Handle,
  NodeResizer,
  Position,
  useEdges,
  useNodeId,
} from "reactflow";
import "./struct-style.css";

const CustomNode = ({ data: { label, struct }, selected }: any) => {
  const { isPlay, time, onReset, isReset } = useAnimateScheme();
  const nodeId = useNodeId();
  const [edge, setEdge] = useState("0");
  const edges = useEdges();

  useEffect(() => {
    const newEdges = edges.filter((edge) => edge.target === nodeId);

    //эТО ЗНАЧЕНИЯ РЕСУРСА НОДЫ Т.Е. ЕСЛИ ЭТО ЗНАЧЕНИЕ МЕНЬШЕ ЧЕМ, еекюзначение попускать суммирование
    const arrNodeIds = newEdges.map(el => el.source)
    console.log(arrNodeIds)


    const sumOfData = newEdges.reduce((accumulator, currentEdge) => {
      return accumulator + (+currentEdge.data || 0); // Если значение data не является числом, прибавляем 0
    }, 0); 

    let intervalId: any;

    const intervalCallback = () => {
      setEdge((prevEdge) =>
        (parseInt(prevEdge) + parseInt(sumOfData || 0)).toString()
      );
    };

    if (isPlay) {
      intervalId = setInterval(intervalCallback, time * 1000);
    }

    if (isReset) {
      setEdge("0");
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [edges, nodeId, isPlay, onReset]);

  return (
    <>
      <NodeResizer
        color="blue"
        isVisible={selected}
        minWidth={10}
        minHeight={10}
      />

      {struct !== StructType.Source && (
        <Handle type="target" position={Position.Left} />
      )}
      <div
        className={
          struct === StructType.Pool
            ? "poolNode"
            : "simpleNode"
        }
      >
        {struct === StructType.Source ? "Source" : struct === StructType.Gate ? "Gate" : edge}
      </div>
      {struct !== StructType.End && (
        <Handle type="source" position={Position.Right} />
      )}
      {struct !== StructType.Source && (
        <div className="h-full w-full flex justify-center">
          <span className="font-bold text-xs">{struct}</span>
        </div>
      )}
    </>
  );
};

export default memo(CustomNode);

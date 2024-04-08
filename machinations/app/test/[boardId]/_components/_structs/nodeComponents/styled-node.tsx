"use client";
import {
  ArrowLeftRight,
  Recycle,
  Dices,
  Hourglass,
  Play,
  CheckCheck,
  LucideIcon,
} from "lucide-react";
import "./nodeStyle.css";
import { StructType } from "@/app/types/structs";
import { Handle, Position } from "reactflow";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ITestNodeProps {
  struct: StructType;
  label: string;
}

type StructStyles = {
  [key in StructType]: string;
};

interface StructIcons {
  [key: string]: LucideIcon;
}

const styleNode: StructStyles = {
  Consumer: "consumerNode",
  Converter: "converterNode",
  Delay: "delayNode",
  End: "endNode",
  Gate: "gateNode",
  Pool: "poolNode",
  Random: "randomNode",
  Source: "sourceNode",
};

const styleNodeIcon: any = {
  Source: <Play />,
  Converter: <Recycle />,
  Delay: <Hourglass />,
  Gate: <ArrowLeftRight />,
  Random: <Dices />,
  End: <CheckCheck />,
};

export const StyledNode = ({ struct, label }: ITestNodeProps) => {
  const [value, setValue] = useState("")
  return (
    <div>
      {struct !== "Source" && <Handle type="target" position={Position.Left} />}
      <div className={styleNode[struct]}>
        {struct in styleNodeIcon ? styleNodeIcon[struct] : label}
      </div>
      {struct !== StructType.End && (
        <Handle type="source" position={Position.Right} />
      )}
      <div className="h-full w-full flex justify-center">
        <input className="bg-transparent w-[50px] border-none text-xs font-bold text-center" value={value} onChange={(e) => setValue(e.target.value)}/>
      </div>
    </div>
  );
};

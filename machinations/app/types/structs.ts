import { Node } from "reactflow";
import CustomEdge from "../test/[boardId]/_components/_structs/custom-edge";
import CustomNode from "./../test/[boardId]/_components/_structs/custom-node";
 enum StructType {
    Source = "Source",
    Pool = "Pool",
    Consumer = "Consumer",
    Converter = "Converter",
    Gate = "Gate",
    Random = "Random",
    Delay = "Delay",
    End = "End"
};
export { StructType };

export enum CustomEdgesTypes {
    Default = "Default",
    SmoothStep = "SmoothStep",
    Bezier = "Bezier",
  }

export type SourceStruct = {
    id: number | string;
    type: StructType.Source;
    value?: string;
};

export type PoolStruct = {
    id: number | string;
    type: StructType.Pool;
    value?: string;
};

export type ConsumerStruct = {
    id: number | string;
    type: StructType.Consumer;
    value?: string;
};

export type ConverterStruct = {
    id: number | string;
    type: StructType.Converter;
    value?: string;
};

export type GateStruct = {
    id: number | string;
    type: StructType.Gate;
    value?: string;
};

export type RandomStruct = {
    id: number | string;
    type: StructType.Random;
    value?: string;
};

export type DelayStruct = {
    id: number | string;
    type: StructType.Delay;
    value?: string;
};

export type EndStruct = {
    id: number | string;
    type: StructType.End;
    value?: string;
};


export type Structs = SourceStruct | PoolStruct | ConsumerStruct | ConverterStruct | GateStruct | RandomStruct | DelayStruct | EndStruct

export const nodeTypes = { textUpdater: CustomNode }
export const edgeTypes = { custom: CustomEdge }

export interface Graph {
    id: number;
    countComponents: number;
    owner: string;
    created: string;
    modified: string;
    title: string;
    description: string;
}

export interface CustomNode extends Node {
    sourceStruct: SourceStruct;
    name: string;
    value: string;
}


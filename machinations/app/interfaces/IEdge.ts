import { INode } from "./INode";

export interface IEdge {
    id: string,
    label?: string,
    source?: INode,
    targets?: INode[]
}
import { IEdge } from "./IEdge";

export interface INode {
    id: string,
    label?: string,
    innerData: string,
    edges?: IEdge[],
    sources?: INode[]
}
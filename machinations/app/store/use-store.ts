import {
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnNodesChange,
  OnEdgesChange,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';
import create from 'zustand';
import { nanoid } from 'nanoid/non-secure';
import { Graph, StructType } from '../types/structs';
import { markerEnd } from '@/lib/utils';

export type RFState = {
  graph: Graph;
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  getEdgeTargetNode: (id: string) => void;
  setEdgeData: (id: string, data: string) => void;
  onEdgesChange: OnEdgesChange;
  deleteNode: (id: string) => void;
  setEdgeAnimated: (isPlay: boolean) => void;
  setNodeLabel: (count: string, id: string) => void;
  onConnect: (connection: any) => void;
  addNode: (struct: StructType) => void;
};

const graph: Graph = {
  id: 1,
  countComponents: 1,
  owner: "mc_Valera",
  created: "01.01.2002",
  modified: "01.01.2002",
  title: "Graph",
  description: ""
}

const useStore = create<RFState>((set, get) => ({
  graph: graph,
  nodes: [],
  edges: [],
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: any) => {
    const newEdge = {
      ...connection, id: "id" + new Date(),
      key: "id" + new Date(),
      type: "custom", animated: false,
      markerEnd: markerEnd,
      data: 1,
    };
    set((state) => ({
      edges: [...get().edges, newEdge],
    }));
  },
  setEdgeData: (id: string, data: string) => {
    const edges = useStore.getState().edges
    const edgeIndex = edges.findIndex((edge) => edge.id === id)
    if (edgeIndex !== -1) {
      const updatedEdge = {
        ...edges[edgeIndex],
        data: data
      }
      const updatedEdges = [...edges];
      updatedEdges[edgeIndex] = updatedEdge;
      set({
        edges: updatedEdges,
      })
    }
  },
  deleteNode: (id: string) => {
    set((state) => ({
      nodes: state.nodes.filter((node) => node.id !== id),
      edges: state.edges.filter((edge) => edge.source !== id && edge.target !== id),
    }));
  },
  setEdgeAnimated: (isPlay: boolean) => {
    if (isPlay) {
      const edges = useStore.getState().edges.map((edge) => ({
        ...edge,
        animated: true,
        style: { stroke: "red" }
      }));
      set({
        edges: edges,
      })
    }
    else {
      const edges = useStore.getState().edges.map((edge) => ({
        ...edge,
        animated: false,
        style: { stroke: "black" }
      }));
      set({
        edges: edges,
      })
    }
  },
  getEdgeTargetNode: (id: string) => {
    const edges: Edge[] = useStore.getState().edges;
    const edge = edges.find((edge: Edge) => edge.id === id);
    return edge?.target
  },
  setNodeLabel: ( id: string, count: string) => {
    const nodes = useStore.getState().nodes;
    const nodeIndex = nodes.findIndex((node) => node.id === id);

    if (nodeIndex !== -1) {
      const updatedNodes = [...nodes];
      updatedNodes[nodeIndex] = {
        ...updatedNodes[nodeIndex],
        data: {
          ...updatedNodes[nodeIndex].data,
          label: count
        }
      };

      set({
        nodes: updatedNodes,
      })
    }
  },

  addNode: (struct: StructType) => {
    const newNode = {
      id: nanoid(),
      type: 'textUpdater',
      data: { label: '0', struct: struct },
      position: {
        x: (Math.random() * window.innerWidth / 2),
        y: (Math.random() * window.innerHeight / 2),
      },
    };

    set({
      nodes: [...get().nodes, newNode],
    });
  },
}));

export default useStore;
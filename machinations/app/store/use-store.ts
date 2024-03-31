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

export type RFState = {
  graph: Graph;
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  setEdgeAnimated: (isPlay: boolean) => void;
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
    const newEdge = { ...connection, type: "custom", animated: false };
    set((state) => ({
      edges: [...get().edges, newEdge],
    }));
  },
  setEdgeAnimated: (isPlay: boolean) => {
    if (isPlay) {
      const edges = useStore.getState().edges.map((edge) => ({
        ...edge,
        animated: true,
      }));
      set({
        edges: edges,
      })
    }
    else {
      const edges = useStore.getState().edges.map((edge) => ({
        ...edge,
        animated: false,
      }));
      set({
        edges: edges,
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
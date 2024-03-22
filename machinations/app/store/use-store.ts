import {
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnNodesChange,
  OnEdgesChange,
  applyNodeChanges,
  applyEdgeChanges,
  XYPosition,
} from 'reactflow';
import create from 'zustand';
import { nanoid } from 'nanoid/non-secure';
import { StructType, Structs } from '../types/structs';


export type RFState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  addNode: (struct: StructType) => void;
};

const useStore = create<RFState>((set, get) => ({
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
  addNode: (struct: StructType) => {
    const newNode = {
      id: nanoid(),
      type: 'textUpdater',
      data: { label: '0', struct: struct },
      position: {
        x: (Math.random() * window.innerWidth / 2),
        y: (Math.random() * window.innerHeight / 2),
      },
      // parentNode: parentNode.id,
    };

    // const newEdge = {
    //   id: nanoid(),
    //   source: parentNode.id,
    //   target: newNode.id,
    // };

    set({
      nodes: [...get().nodes, newNode],
      // edges: [...get().edges, newEdge],
    });
  },
}));

export default useStore;
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


export type RFState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  addNode: () => void;
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
  addNode: () => {
    const newNode = {
      id: nanoid(),
      type: 'textUpdater',
      data: { label: 'New Node', struct: "Pool" },
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
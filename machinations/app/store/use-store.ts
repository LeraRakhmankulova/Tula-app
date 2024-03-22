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
import { useCallback } from 'react';


export type RFState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: (connection: any) => void;
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
  onConnect: (connection: any) => {
    const newEdge = { ...connection, type: "custom" };
    set((state) => ({
      edges: [...get().edges, newEdge],
    }));
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

    // const newEdge = {
    //   id: nanoid(),
    //   type: "custom",
    //   source: "root",
    //   target: newNode.id,
    // };

    set({
      nodes: [...get().nodes, newNode],
      // edges: [...get().edges, newEdge],
    });
  },
}));

export default useStore;
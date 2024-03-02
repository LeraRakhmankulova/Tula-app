"use client";

import { Camera, CanvasMode, CanvasState } from "@/app/types/canvas";
import {
  useHistory,
  useCanUndo,
  useCanRedo,
  useMutation,
  useStorage,
  useOthersMapped,
  useSelf,
} from "@/liveblocks.config";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";
import { useCallback, useState } from "react";
import { CursorsPresence } from "./cursors-presence";
import { pointerEventToCanvasPoint } from "@/lib/utils";

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  const onWheel = useCallback((e: React.WheelEvent) => {
    // console.log({ x: e.deltaX, y: e.deltaY });

    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }));
  }, []);

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();

      const current = pointerEventToCanvasPoint(e, camera);
      //   if (canvasState.mode === CanvasMode.Pressing) {
      //     startMultiSelection(current, canvasState.origin);
      //   } else if (canvasState.mode === CanvasMode.SelectionNet) {
      //     updateSelectionNet(current, canvasState.origin);
      //   } else if (canvasState.mode === CanvasMode.Translating) {
      //     translateSelectedLayers(current);
      //   } else if (canvasState.mode === CanvasMode.Resizing) {
      //     resizeSelectedLayer(current);
      //   } else if (canvasState.mode === CanvasMode.Pencil) {
      //     continueDrawing(current, e);

      setMyPresence({ cursor: current });
    },
    []
    //   continueDrawing,
    //   camera,
    //   canvasState,
    //   resizeSelectedLayer,
    //   translateSelectedLayers,
    //   startMultiSelection,
    //   updateSelectionNet,
    // ]
  );

  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        undo={history.undo}
        redo={history.redo}
      />
      <svg
        className="h-[100vh] w-[100vw]"
        onWheel={onWheel}
        onPointerMove={onPointerMove}
      >
         <g
          style={{
            transform: `translate(${camera.x}px, ${camera.y}px)`
          }}
        >
          <CursorsPresence />
        </g>
      </svg>
    </main>
  );
};

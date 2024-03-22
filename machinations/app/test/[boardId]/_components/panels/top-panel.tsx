import {
  Panel,
  getTransformForBounds,
  useReactFlow,
  getRectOfNodes,
} from "reactflow";
import { ToolButton } from "../ui/tool-button";
import { BarChart3, Download } from "lucide-react";

import { toPng } from "html-to-image";

function downloadImage(dataUrl: any) {
  const a = document.createElement("a");
  a.setAttribute("download", "scheme.png");
  a.setAttribute("href", dataUrl);
  a.click();
}

const imageWidth = 1024;
const imageHeight = 768;

export const TopPanel = () => {
  const { getNodes } = useReactFlow();
  const onDownload = () => {
    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2
    );
    //@ts-ignore
    toPng(document.querySelector(".react-flow__viewport"), {
      backgroundColor: "white",
      width: imageWidth,
      height: imageHeight,
      style: {
        width: imageWidth,
        height: imageHeight,
        transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
      },
    }).then(downloadImage);
  };
  return (
    <Panel position="top-center">
      <div className="bg-white rounded-md p-1.5 flex gap-x-2 items-center shadow-md">
        <ToolButton
          label="Download"
          onClick={onDownload}
          isActive={false}
          icon={Download}
        />
        <ToolButton
          label="Analytics"
          icon={BarChart3}
          background="green"
        />
      </div>
    </Panel>
  );
};

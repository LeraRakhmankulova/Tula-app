"use client";

import { parseCodeToTemplate } from "@/app/services/parserCode";
import MonacoEditor from "@monaco-editor/react";
import { useState } from "react";
import styles from "./editor.module.scss";
import { useRenameModal } from "@/app/store/use-rename-modal";
import { ITemplate, generateSheme } from "@/app/services/generateSheme";
import { useGenerate } from "@/app/store/use-boardInfo";
import { useChangeEdgeType } from "@/app/store/use-custom-edge";
import { useAnimateScheme } from "@/app/store/use-animate-scheme";
import useStore from "@/app/store/use-store";


const EditorComponent = () => {
  const [code, setCode] = useState("");
  const { setIsVisisble } = useRenameModal();
  const { setDescription } = useGenerate();
  const {setTime, setGames, setIterations} = useAnimateScheme()
  const {generateNode} = useStore()
  const { onChangeType } = useChangeEdgeType();
  const handleCodeChange = (newCode: any) => {
    setCode(newCode);
  };
  const handleBuildScheme = () => {
    const template: ITemplate | null = parseCodeToTemplate(code);
    generateSheme(template, setDescription, onChangeType, setGames, setIterations, setTime, generateNode);
  };
  return (
    <div className="flex flex-col h-full">
      <MonacoEditor
        width={450}
        height="100%"
        defaultLanguage="json"
        theme="vs-dark"
        value={code}
        options={{ selectOnLineNumbers: true }}
        onChange={handleCodeChange}
      />
      <div className={styles.editor_btn}>
        <button
          onClick={() => {
            handleBuildScheme();
          }}
          className={styles.generate}
        >
          Generate
        </button>
        <button onClick={() => setCode("")} className={styles.reset}>
          Reset
        </button>
        <button
          onClick={() => console.log("downloaded")}
          className={styles.reset}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default EditorComponent;

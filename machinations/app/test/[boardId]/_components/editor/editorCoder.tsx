"use client";

import { parseCodeToTemplate } from "@/app/services/parserCode";
import MonacoEditor from "@monaco-editor/react";
import { useState } from "react";
import styles from "./editor.module.scss";
import { useRenameModal } from "@/app/store/use-rename-modal";

const EditorComponent = () => {
  const [code, setCode] = useState("");
  const { setIsVisisble} = useRenameModal();
  const handleCodeChange = (newCode: any) => {
    setCode(newCode);
  };
  const handleBuildScheme = () => {
    const template = parseCodeToTemplate(code);
    console.log("Схема:", template);
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
        <button onClick={() => { handleBuildScheme(); setIsVisisble(); }} className={styles.generate}>
          Generate
        </button>
        <button onClick={() => setCode("")} className={styles.reset}>
          Reset
        </button>
        <button onClick={() => console.log("downloaded")} className={styles.reset}>
          Download
        </button>
      </div>
    </div>
  );
};

export default EditorComponent;

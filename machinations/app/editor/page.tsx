"use client";

import MonacoEditor from "@monaco-editor/react";
import { ComponentProps, useEffect, useState } from "react";
import { parseCodeToTemplate } from "../services/parserCode";

const EditorPage = () => {
  const [code, setCode] = useState("");
  const handleCodeChange = (newCode: any) => {
    setCode(newCode);
  };
  const handleBuildScheme = () => {
    const template = parseCodeToTemplate(code);
    console.log("Схема:", template);
  };
  return (
    <div className="flex flex-col h-full">
      <button onClick={handleBuildScheme}>check info</button>
      <MonacoEditor
        width={500}
        height="100%"
        defaultLanguage="typescript"
        theme="vs-dark"
        value={code}
        options={{ selectOnLineNumbers: true }}
        onChange={handleCodeChange}
      />
    </div>
  );
};

export default EditorPage;

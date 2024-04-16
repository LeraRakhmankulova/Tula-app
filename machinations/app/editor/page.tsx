"use client";

import MonacoEditor from "@monaco-editor/react";
import { ComponentProps, useEffect, useState } from "react";

const EditorPage = () => {

  return (
    <div className="flex flex-col h-full">
      <MonacoEditor
        width={500}
        height="100%"
        defaultLanguage="typescript"
        theme="vs-dark"
        value=""
        options={{ selectOnLineNumbers: true }}
        onChange={() => null}
      />
    </div>
  );
};

export default EditorPage;

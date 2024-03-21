import { memo, useState } from "react";

interface CustomInputProps {
  label: string;
  placeholder: string;
}

const CustomInput = ({ label, placeholder }: CustomInputProps) => {
  const [value, setValue] = useState();

  return (
    <div className="flex flex-col mx-1">
      <input
        placeholder={placeholder}
        className=" w-12 text-sm text-center px-1 border border-black rounded"
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
      <label className="text-xs mt-1 text-center">{label}</label>
    </div>
  );
};

export default memo(CustomInput);

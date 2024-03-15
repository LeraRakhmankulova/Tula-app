import { FC, InputHTMLAttributes, memo } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: any;
}

const InputField: FC<InputProps> = ({ error, ...otherProps }) => {
  const { value } = otherProps;
  return (
    <div className="mb-2">
      <input
        placeholder="test"
        className="bg-black outline-none text-white w-16 text-sm  z-10"
        {...otherProps}
      />
      <p className="text-xs text-blue-900">{error}</p>
    </div>
  );
};

export default memo(InputField);

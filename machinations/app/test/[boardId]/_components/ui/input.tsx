import { FC, InputHTMLAttributes, memo } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: any;
}

const InputField: FC<InputProps> = ({ error, ...otherProps }) => {
  const { value } = otherProps;
  return (
    <>
      <input
        placeholder="test"
        className="bg-black outline-none text-white w-16 text-sm z-10"
        {...otherProps}
      />
    </>
  );
};

export default memo(InputField);

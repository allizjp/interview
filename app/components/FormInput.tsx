import {
  forwardRef,
  type ForwardRefRenderFunction,
  type InputHTMLAttributes,
} from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const defaultClassName =
  "bg-transparent border-0 border-b ring-0 placeholder:text-sm placeholder:transition-all focus:placeholder:text-base placeholder:duration-100";

const FormInput: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  props: Props,
  ref
) => {
  const { label, error, className = defaultClassName, ...rest } = props;

  let mergedClassName = className + (error ? " border-red-500" : "");

  return (
    <label className="flex flex-col w-full">
      <span>{label}</span>
      <input {...rest} ref={ref} className={mergedClassName} />
      {error && (
        <div className="relative">
          <span className="absolute text-red-500">{error}</span>
        </div>
      )}
    </label>
  );
};

export default forwardRef(FormInput);

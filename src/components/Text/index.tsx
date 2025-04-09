import React from "react";

const sizes = {
  heading_h3: "text-[26px] font-normal md:text-[24px] sm:text-[22px]",
  body_body_lg: "text-[14px] font-normal",
  body_body: "text-[14px] font-normal",
  textxs: "text-[12px] font-normal",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "body_body_lg",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-200 font-inter ${className} ${sizes[size as keyof typeof sizes]} `} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

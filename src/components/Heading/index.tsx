import React from "react";

const sizes = {
  body_footer_bold: "text-[12px] font-bold",
  body_body_bold_xxxl: "text-[22px] font-bold",
  texts: "text-[14px] font-medium",
  textmd: "text-[48px] font-medium md:text-[44px] sm:text-[38px]",
  headingxs: "text-[14px] font-bold",
  headings: "text-[16px] font-bold",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "textmd",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-black-900 font-crimsonpro ${className} ${sizes[size] as keyof typeof sizes}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };

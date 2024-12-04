import React from "react";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small";
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "p", // Default to 'p' if no variant is specified
  children,
  className = "",
}) => {
  // Map the 'variant' to the corresponding HTML tag
  const Component = variant;

  // Map the 'variant' to the corresponding font-size class
  const fontSizeClasses: { [key: string]: string } = {
    h1: "text-h1",
    h2: "text-h2",
    h3: "text-h3",
    h4: "text-h4",
    h5: "text-h5",
    h6: "text-h6",
    p: "text-p",
    small: "text-small",
  };

  return (
    <Component className={`${fontSizeClasses[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;

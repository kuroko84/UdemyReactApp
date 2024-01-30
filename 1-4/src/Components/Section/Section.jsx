import React from "react";

/**
 * Renders a section component with a title and children.
 *
 * @param {string} title - The title of the section.
 * @param {ReactNode} children - The content to be rendered inside the section.
 * @param {...props} props - Additional props to be applied to the section element.
 * @return {ReactNode} The rendered section component.
 */
const Section = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;

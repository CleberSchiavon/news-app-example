import React, { FC, ReactNode } from "react";
import "./styles.scss";

interface TypographyProps {
  /**
   * @param {string} type - Type of Typography
   *
   */
  type: "title" | "heading2" | "body" | "category" | "date-text";
  /**
   * @param {string} text - Text of Typography
   *
   */
  text: string;
}

const Typography: FC<TypographyProps> = ({ type = "title", text }) => {
  switch (type) {
    case "title":
      return <h1>{text}</h1>;
    case "heading2":
      return <h2>{text}</h2>;
    case "body":
      return <p>{text}</p>;
    case "date-text":
      return <h5 className="date-text">{text}</h5>;
    case "category":
      return <h3>{text}</h3>;
    default:
      return null;
  }
};

export default Typography;

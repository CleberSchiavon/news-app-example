import React, { FC, ReactNode } from "react";
import "./styles.scss";

interface TypographyProps {
  /**
   * @param {string} type - Type of Typography
   *
   */
  type:
    | "title"
    | "heading2"
    | "body"
    | "category"
    | "date-text"
    | "secondary-news-title"
    | "base-article-title"
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
    case "secondary-news-title":
      return <h3>{text}</h3>;
      case "base-article-title":
        return <h4>{text}</h4>
    case "category":
      return <h5>{text}</h5>;
    case "date-text":
      return <h6 className="date-text">{text}</h6>;
    case "body":
      return <p>{text}</p>;
    default:
      return null;
  }
};

export default Typography;

import React from "react";
import Typography from "../Typography";

import "./styles.scss";

const MainCardComponent = ({ news }: { news: any }) => {
  return (
    <div className="main-card-container">
      <Typography text={news.category} type="category" />
      <Typography text={news.title} type="title" />
    </div>
  );
};

const SecondaryCardComponent = ({ news }: { news: any }) => {
  return (
    <div className="secondary-card-container">
      <img src={news.articleImageUrl} alt="Imagem da máteria" height={'190px'} width={'280px'}/>
      <Typography text={news.category} type="category" />
      <Typography text={news.title} type="secondary-news-title" />
    </div>
  );
};

const BaseArticleComponent = ({ news }: { news: any }) => {
    return (
        <div className="base-article-container">
            <div className="divider" />
            <Typography type="base-article-title" text={news.title}/>
        </div>
    )
}

export default function NewsCard({ news }: { news: any }) {
  switch (news.type) {
    case "main":
      return <MainCardComponent news={news} />;
    case "secondary":
      return <SecondaryCardComponent news={news} />;
    case "base-article": 
    return <BaseArticleComponent news={news} />;
  }
}

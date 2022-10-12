import React from "react";

import "../styles/articlecard.css";

function ArticleCard({ title, date, author }: any) {
  return (
    <>
      <div className="article-card p-6 max-w-sm bg-white shadow-lg justify-center align-center rounded-lg">
        <h1>{title}</h1>
        <h2>{date}</h2>
        <p>{author}</p>
      </div>
    </>
  );
}

export default ArticleCard;

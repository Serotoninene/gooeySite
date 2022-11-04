import react from "react";

export default function BlogArticle({ articleData }) {
  return (
    <div className="BlogArticle grid">
      <div className="article-content">
        <h3>{articleData.title}</h3>
        <p>{articleData.description}</p>
      </div>
      <div className="article picture">
        <img src={articleData.picture} />
      </div>
    </div>
  );
}

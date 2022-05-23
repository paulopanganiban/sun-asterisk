import { useRouter } from "next/router";
import React, { useContext } from "react";
import { ArticleContext } from "../../contexts/ArticleContext";

const ArticleDetailsPage = () => {
    const { articles } = useContext(ArticleContext);
  const router = useRouter();
  const { id } = router.query;
  const article = articles.find((article) => article.id === Number(id));
  if (!article) return null;
  return (
    <div>
      <h1>{article.id}</h1>
      <h3>{article.content}</h3>
      <h3>{article.createdDate}</h3>
    </div>
  );
};

export default ArticleDetailsPage;

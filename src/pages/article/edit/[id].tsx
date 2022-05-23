import { useRouter } from "next/router";
import React, {
  SyntheticEvent,
  useCallback,
  useContext,
  useState,
} from "react";
import Form from "../../../components/Form";
import { ArticleContext } from "../../../contexts/ArticleContext";

const EditArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { articles, updateArticle } = useContext(ArticleContext);
  const article = articles.find((article) => article.id === Number(id));
  const [formState, setFormState] = useState({
    title: article?.title,
    content: article?.content,
  });
  const handleChange = useCallback(
    (e) => {
      console.log(formState);
      const { name, value } = e.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    },
    [formState]
  );
  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      updateArticle(Number(id));
      router.push("/");
    },
    [id, router, updateArticle]
  );
  return (
    <div>
      <Form formState={formState} onSubmit={handleSubmit} onChange={handleChange} />
    </div>
  );
};

export default EditArticlePage;

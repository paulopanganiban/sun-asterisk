import { useRouter } from "next/router";
import React, { useCallback, useContext, useState } from "react";
import styled from "styled-components";
import { ArticleContext } from "../../contexts/ArticleContext";

const CreateArticlePage = () => {
  const router = useRouter();
  const { articles, setArticles } = useContext(ArticleContext);
  const [formState, setFormState] = useState({
    title: "",
    content: "",
  });
  const handleSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      setArticles([
        ...articles,
        {
          id: articles.length + 1,
          title: formState.title,
          content: formState.content,
          createdDate: new Date().toLocaleString(),
        },
      ]);
      setFormState({ title: "", content: "" });
      router.push("/");
    },
    [articles, formState.content, formState.title, router, setArticles]
  );
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

  console.log(formState);
  return (
    //   on submit redirect back to home page
    //   insert created date at submit
    <S.CreateArticlePage>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input name="title" type="text" onChange={handleChange} />
        <label htmlFor="title">Content</label>
        <input name="content" type="text" onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </S.CreateArticlePage>
  );
};

export default CreateArticlePage;
const S = {
  CreateArticlePage: styled.section`
    > form {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      max-width: 500px;
    }
  `,
};

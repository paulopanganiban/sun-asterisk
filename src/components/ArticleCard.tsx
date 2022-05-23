import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import styled from "styled-components";
import { ArticleContext } from "../contexts/ArticleContext";
export interface Article {
  id: number;
  title: string;
  content: string;
  createdDate: string;
}
const ArticleCard = ({ id, title, content, createdDate }: Article) => {
  const { deleteArticle } = useContext(ArticleContext);
  const router = useRouter();
  return (
    <S.ArticleCardContainer>
      <div className="card-container">
        <Link href={`/article/${id}`} passHref>
          <h2>{title}</h2>
        </Link>
        <p>{content}</p>
        <p>{createdDate}</p>
        <button onClick={() => router.push(`/article/edit/${id}`)}>Edit</button>
        <button onClick={() => deleteArticle(id)}>Delete</button>
      </div>
    </S.ArticleCardContainer>
  );
};

export default ArticleCard;
const S = {
  ArticleCardContainer: styled.div`
    background-color: antiquewhite;
    min-height: 300px;
    min-width: 300px;
    .card-container {
      a {
        cursor: pointer;
        :hover {
          opacity: 0.8;
        }
      }
    }
  `,
};

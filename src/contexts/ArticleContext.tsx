import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Article } from "../components/ArticleCard";
import data from "../../articles.json";

interface ArticleContextInterface {
  articles: Article[];
  setArticles: Dispatch<
    SetStateAction<
      { id: number; title: string; content: string; createdDate: string }[]
    >
  >;
  deleteArticle: (id: number) => void;
  updateArticle: (id: number) => void;
}
export const ArticleContext = createContext({} as ArticleContextInterface);
interface ArticleContextProviderInterface {
  children: ReactNode;
}
export const ArticleContextProvider = ({
  children,
}: ArticleContextProviderInterface) => {
  const [articles, setArticles] = useState(data);
  const deleteArticle = useCallback(
    (id: number) => {
      setArticles(articles.filter((article) => article.id !== id));
    },
    [articles]
  );
  const updateArticle = useCallback(
    (id: number) => {
      setArticles(
        articles.map((article) =>
          article.id === id ? { ...article, id } : article
        )
      );
    },
    [articles]
  );
  const value = useMemo(() => {
    return { articles, setArticles, deleteArticle, updateArticle };
  }, [articles, setArticles, deleteArticle, updateArticle]);
  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
};

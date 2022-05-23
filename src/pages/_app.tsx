import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ArticleContextProvider } from "../contexts/ArticleContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ArticleContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ArticleContextProvider>
  );
}

export default MyApp;

import { useContext } from "react";
import Article1 from "../content/Article1";
import Article2 from "../content/Article2";
import Article3 from "../content/Article3";
import { ArticleContext } from "../context/article-context";

function ArticleContainer() {
    const getArticles = (title: string, sentenceId: number) => {
        switch (title) {
          case '':
          case 'Article 1':
            return (<Article1 currentSentenceId={sentenceId}></Article1>);
          case 'Article 2':
            return (<Article2 currentSentenceId={sentenceId}></Article2>);
          case 'Article 3':
            return (<Article3 currentSentenceId={sentenceId}></Article3>);
          default:
            return null;
        }
    }

    const context = useContext(ArticleContext);
    return (            
        <>
        {getArticles(context.selectedArticle, context.selectedSentenceId)}
        </>
    
    );
}

export default ArticleContainer;
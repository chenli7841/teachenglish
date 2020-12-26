import { useContext } from "react";
import Article1 from "../content/Article1";
import Article2 from "../content/Article2";
import Article3 from "../content/Article3";
import { ArticleContext } from "../context/article-context";

function ArticleContainer() {
    const getArticles = (title: string) => {
        switch (title) {
          case '':
          case 'Article 1':
            return (<Article1></Article1>);
          case 'Article 2':
            return (<Article2></Article2>);
          case 'Article 3':
            return (<Article3></Article3>);
          default:
            return null;
        }
    }

    const context = useContext(ArticleContext);
    return (            
        <>
        {getArticles(context.selectedArticle)}
        </>
    
    );
}

export default ArticleContainer;
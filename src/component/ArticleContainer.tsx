import { useContext } from "react";
import Article1 from "../content/Article1";
import Article2 from "../content/Article2";
import Article3 from "../content/Article3";
import articleContext from "../context/article-context";

interface ArticleContainerProp {
    selectedTitle: string
}

function ArticleContainer(props: ArticleContainerProp) {
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

    const context = useContext(articleContext);
    return (            
        <>
        {getArticles(context.selectedArticle)}
        </>
    
    );
}

export default ArticleContainer;
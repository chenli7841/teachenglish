import { useContext } from "react";
import Article1 from "../content/Article1";
import Article2 from "../content/Article2";
import Article3 from "../content/Article3";
import FRMR7 from '../content/FRMR7';
import FRMR1 from '../content/FRMR1';
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
          case 'FRM Reading 1':
            return (<FRMR1></FRMR1>);
          case 'FRM Reading 7':
              return (<FRMR7></FRMR7>);
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
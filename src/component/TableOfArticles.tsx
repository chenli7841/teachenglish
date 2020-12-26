import { useContext } from 'react';
import '../App.css'
import {ArticleContext} from '../context/article-context';

export interface TableOfArticlesProp {
    titles: string[]
}

function TableOfArticles(props: TableOfArticlesProp) {
    const listItem = {
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '20px',
        '&:hover': {
            background: '#ccc'
        }
    };
    const setSelectedArticle = useContext(ArticleContext).setSelectedArticle;
    const titles = props.titles.map(t => 
        <div
          key={t}
          className='tableOfContent_listItem'
          style={listItem}
          onClick={() => setSelectedArticle(t)}
        >{t}</div>
    );
    return (
        <div style={{paddingTop: '20px', position: 'absolute', height: '100%', width: '100%'}}>
            {titles}
        </div>
    );
}

export default TableOfArticles;
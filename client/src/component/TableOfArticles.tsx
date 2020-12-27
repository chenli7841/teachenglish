import { useContext } from 'react';
import '../App.css'
import {ArticleContext} from '../context/article-context';

export interface TableOfArticlesProp {
    titles: string[]
}

function TableOfArticles(props: TableOfArticlesProp) {
    const {selectedArticle, setSelectedArticle} = useContext(ArticleContext);
    const titles = props.titles.map(t => 
        <div
          key={t}
          className='tableOfContent_listItem'
          style={{'background': selectedArticle === t ? '#aaa' : '', 'color': selectedArticle === t ? '#fff' : ''}}
          onClick={() => setSelectedArticle(t)}
        >{t}</div>
    );
    return (
        <div style={{paddingTop: '20px', position: 'fixed', height: '100%', width: '120px', background: '#333'}}>
            {titles}
        </div>
    );
}

export default TableOfArticles;
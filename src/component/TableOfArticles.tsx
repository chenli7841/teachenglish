import '../App.css'

export interface TableOfArticlesProp {
    titles: string[],
    selectArticle(article: string): void
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
    const titles = props.titles.map(t => 
        <div
          key={t}
          className='tableOfContent_listItem'
          style={listItem}
          onClick={() => props.selectArticle(t)}
        >{t}</div>
    );
    return (
        <div style={{paddingTop: '20px', position: 'absolute', height: '100%', width: '100%'}}>
            {titles}
        </div>
    );
}

export default TableOfArticles;
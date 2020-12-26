import React from 'react';
import './App.css';
import TableOfArticles from './component/TableOfArticles';
import ArticleContainer from './component/ArticleContainer';
import ArticleProvider from './context/article-context';
import ToolSection from './component/ToolSection';

function App() {
  const titles = ['Article 1', 'Article 2', 'Article 3'];

  return (
    <ArticleProvider>
    <div style={{display: 'flex'}}>
      <div style={{width: '120px', flex: 'none', position: 'relative', borderRight: '1px #ccc solid'}}>
        <TableOfArticles titles={titles} />
      </div>
      <div style={{width: '600px', paddingTop: '20px', marginLeft: 'auto', marginRight: 'auto'}}>
        <ArticleContainer></ArticleContainer>
      </div>
      <div style={{width: '60px', flex: 'none', position: 'relative'}}>
        <ToolSection></ToolSection>
      </div>
    </div>
    </ArticleProvider>
  );
}

export default App;

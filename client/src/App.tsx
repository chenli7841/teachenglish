import React from 'react';
import './App.css';
import TableOfArticles from './component/TableOfArticles';
import ArticleContainer from './component/ArticleContainer';
import ArticleProvider from './context/article-context';
import ToolSection from './component/ToolSection';

function App() {
  const titles = ['Article 1', 'Article 2', 'Article 3', 'FRM Reading 1', 'FRM Reading 7'];
  const leftWidth = '150px', rightWidth = '150px';

  return (
    <ArticleProvider>
    <div style={{display: 'flex'}}>
      <div style={{width: leftWidth, flex: 'none', position: 'relative', borderRight: '1px #ccc solid'}}>
        <TableOfArticles titles={titles} width={leftWidth} />
      </div>
      <div style={{width: '750px', paddingTop: '20px', marginLeft: 'auto', marginRight: 'auto'}}>
        <ArticleContainer></ArticleContainer>
      </div>
      <div style={{width: rightWidth, flex: 'none', position: 'relative'}}>
        <ToolSection width={rightWidth}></ToolSection>
      </div>
    </div>
    </ArticleProvider>
  );
}

export default App;

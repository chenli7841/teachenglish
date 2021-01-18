import React, { useState } from 'react';
import './App.css';
import TableOfArticles from './component/TableOfArticles';
import ArticleContainer from './component/ArticleContainer';
import ArticleProvider from './context/article-context';
import ToolSection from './component/ToolSection';
import WordList from './component/WordList';
import ComponentProvider from './context/component-context';

function App() {
  const titles = ['Article 1', 'Article 2', 'Article 3', 'FRM Reading 1', 'FRM Reading 7', '债券久期'];
  const leftWidth = '150px';

  const [ screenX, setScreenX ] = useState('');
  const [ screenY, setScreenY ] = useState('');

  const onDragOver = (e: any) => {
    e.nativeEvent.preventDefault();
  };

  const onDrop = (e: any) => {
    setScreenX(e.nativeEvent.screenX);
    setScreenY(e.nativeEvent.screenY);
  };

  return (
    <ArticleProvider>
      <ComponentProvider>
        <div style={{display: 'flex'}} onDragOver={onDragOver} onDrop={onDrop}>
          <div style={{width: leftWidth, flex: 'none', position: 'relative', borderRight: '1px #ccc solid'}}>
            <TableOfArticles titles={titles} width={leftWidth} />
          </div>
          <div style={{width: '750px', paddingTop: '20px', marginLeft: 'auto', marginRight: 'auto'}}>
            <ArticleContainer></ArticleContainer>
          </div>
          <ToolSection screenX={screenX} screenY={screenY}></ToolSection>
          <WordList screenX={screenX} screenY={screenY}></WordList>
        </div>
      </ComponentProvider>
    </ArticleProvider>
  );
}

export default App;

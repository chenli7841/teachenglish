import React, { useState } from 'react';
import './App.css';
import Button from './widget/Button';
import TableOfArticles from './component/TableOfArticles';
import ArticleContainer from './component/ArticleContainer';
import ArticleContext from './context/article-context';

function App() {
  const titles = ['Article 1', 'Article 2', 'Article 3', 'Article 4'];

  const [selectedArticle, setSelectedArticle] = useState('');
  
  const onNextSentence = () => {
    console.log('next sentence');
  }

  const onPrevSentence = () => {
    console.log('prev sentence');
  }

  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '120px', flex: 'none', position: 'relative'}}>
        <TableOfArticles titles={titles} selectArticle={setSelectedArticle} />
      </div>
      <div style={{width: '600px', paddingTop: '20px', marginLeft: 'auto', marginRight: 'auto'}}>
        <ArticleContext.Provider value={{selectedArticle: selectedArticle}}>
          <ArticleContainer selectedTitle={selectedArticle}></ArticleContainer>
        </ArticleContext.Provider>
      </div>
      <div style={{width: '60px', flex: 'none', position: 'relative'}}>
        <Button onClick={() => onNextSentence()}>Next</Button>
        <Button onClick={() => onPrevSentence()}>Prev</Button>
      </div>
    </div>
  );
}

export default App;

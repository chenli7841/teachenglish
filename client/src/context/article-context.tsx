import React, { useState } from "react";

export const ArticleContext = React.createContext({
    selectedArticle: '',
    setSelectedArticle: (t: string) => {},

    selectedSentenceId: 0,
    setSelectedSentenceId: (s: number) => {},

    showSentenceComponent: false,
    setShowSentenceComponent: (c: boolean) => {},

    currentDraggedComponent: '',
    setCurrentDraggedComponent: (c: string) => {}
});

function ArticleProvider(props: React.PropsWithChildren<any>) {
    const [currArticle, setCurrArticle] = useState('FRM Reading 7');
    const [currSentenceId, setCurrSentenceId] = useState(0);
    const [showComponent, setShowComponent] = useState(false);
    const [draggedComponent, setDraggedComponent] = useState('');
    return (
        <ArticleContext.Provider value={{
            selectedArticle: currArticle, setSelectedArticle: (t) => {setShowComponent(false); setCurrSentenceId(0); setCurrArticle(t)},
            selectedSentenceId: currSentenceId, setSelectedSentenceId: (s) => {setShowComponent(false); setCurrSentenceId(s)},
            showSentenceComponent: showComponent, setShowSentenceComponent: (c) => setShowComponent(c),
            currentDraggedComponent: draggedComponent, setCurrentDraggedComponent: (c) => setDraggedComponent(c)
        }}>
            {props.children}
        </ArticleContext.Provider>
    )
}

export default ArticleProvider;

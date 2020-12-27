import React, { useState } from "react";

export const ArticleContext = React.createContext({
    selectedArticle: '',
    setSelectedArticle: (t: string) => {},

    selectedSentenceId: 0,
    setSelectedSentenceId: (s: number) => {}
});

function ArticleProvider(props: React.PropsWithChildren<any>) {
    const [currArticle, setCurrArticle] = useState('');
    const [currSentenceId, setCurrSentenceId] = useState(0);
    return (
        <ArticleContext.Provider value={{
            selectedArticle: currArticle, setSelectedArticle: (t) => setCurrArticle(t),
            selectedSentenceId: currSentenceId, setSelectedSentenceId: (s) => setCurrSentenceId(s)
        }}>
            {props.children}
        </ArticleContext.Provider>
    )
}

export default ArticleProvider;

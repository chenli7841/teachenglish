import React, { useState } from "react";

export const ArticleContext = React.createContext({
    selectedArticle: '',
    setSelectedArticle: (t: string) => {}
});

function ArticleProvider(props: React.PropsWithChildren<any>) {
    const [currArticle, setCurrArticle] = useState('');
    return (
        <ArticleContext.Provider value={{selectedArticle: currArticle, setSelectedArticle: (t) => setCurrArticle(t)}}>
            {props.children}
        </ArticleContext.Provider>
    )
}

export default ArticleProvider;

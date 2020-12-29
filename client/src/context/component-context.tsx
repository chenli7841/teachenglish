import React, { useState } from "react";

export const ComponentContext = React.createContext({
    currentDraggedComponent: '',
    setCurrentDraggedComponent: (c: string) => {},

    showWordList: false,
    setShowWordList: (s: boolean) => {}
});

function ComponentProvider(props: React.PropsWithChildren<any>) {
    const [draggedComponent, setDraggedComponent] = useState('');
    const [showWordList, setShowWordList] = useState(false);
    return (
        <ComponentContext.Provider value={{
            currentDraggedComponent: draggedComponent, setCurrentDraggedComponent: (c) => setDraggedComponent(c),
            showWordList: showWordList, setShowWordList: (s) => setShowWordList(s)
        }}>
            {props.children}
        </ComponentContext.Provider>
    )
}

export default ComponentProvider;

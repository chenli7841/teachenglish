import { useContext, useEffect, useState } from "react";
import { ComponentContext } from "../context/component-context";

interface WordListProp {
    screenX: string,
    screenY: string
}

function WordList(props: WordListProp) {
    const [ initialX, setInitialX ] = useState(0);
    const [ initialY, setInitialY ] = useState(0);
    const [ dialogRight, setDialogRight ] = useState(30);
    const [ dialogTop, setDialogTop ] = useState(200);

    const { currentDraggedComponent, setCurrentDraggedComponent, showWordList } = useContext(ComponentContext);

    useEffect(() => {
        if (currentDraggedComponent === 'WordList') {
            const newRight = dialogRight - ((props.screenX === '' ? 0 : parseInt(props.screenX)) - initialX);
            const newTop = dialogTop + (props.screenY === '' ? 0 : parseInt(props.screenY)) - initialY;
            setDialogTop(newTop);
            setDialogRight(newRight);
        }
    }, [props.screenX, props.screenY]);

    const onDragStart = (e: any) => {
        setCurrentDraggedComponent('WordList');
        setInitialX(parseInt(e.nativeEvent.screenX));
        setInitialY(parseInt(e.nativeEvent.screenY));
    }

    return (
        <div draggable onDragStart={onDragStart} style={{top: dialogTop + 'px', right: dialogRight + 'px', position: 'fixed', width: '200px', display: showWordList ? 'block' : 'none'}}>
            <div style={{border: '1px solid #aaa', display: 'flex'}}>
                <input style={{width: 'calc(100% - 40px)', height: '40px', boxSizing: 'border-box', paddingLeft: '10px', border: 'none', outline: 'none'}} placeholder='请输入英文单词' />
                <button style={{background: '#fff', border: 'none', display: 'block', width: '40px', flex: 'none'}}>&#127859;</button></div>
            <div></div>
        </div>
    );
}

export default WordList;
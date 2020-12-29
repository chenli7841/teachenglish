import { useContext, useEffect, useState } from "react";
import { ArticleContext } from "../context/article-context";
import { ComponentContext } from "../context/component-context";
import Button from "../widget/Button";

interface ToolSectionProp {
    screenX: string,
    screenY: string
}

function ToolSection(props: ToolSectionProp) {

    const [ initialX, setInitialX ] = useState(0);
    const [ initialY, setInitialY ] = useState(0);
    const [ dialogRight, setDialogRight ] = useState(30);
    const [ dialogTop, setDialogTop ] = useState(20);

    const { selectedSentenceId, setSelectedSentenceId, showSentenceComponent, setShowSentenceComponent } = useContext(ArticleContext);
    const { currentDraggedComponent, setCurrentDraggedComponent, showWordList, setShowWordList } = useContext(ComponentContext);

    useEffect(() => {
        if (currentDraggedComponent === 'ToolSection') {
            const newRight = dialogRight - ((props.screenX === '' ? 0 : parseInt(props.screenX)) - initialX);
            const newTop = dialogTop + (props.screenY === '' ? 0 : parseInt(props.screenY)) - initialY;
            setDialogTop(newTop);
            setDialogRight(newRight);
        }
    }, [props.screenX, props.screenY]);

    const onNextSentence = () => {
        setSelectedSentenceId(selectedSentenceId + 1);
      }
    
    const onPrevSentence = () => {
        if (selectedSentenceId > 0) {
            setSelectedSentenceId(selectedSentenceId - 1);
        }
    }

    const onToggleShowSentenceComponents = () => {
        setShowSentenceComponent(!showSentenceComponent);
    }

    const onToggleWordList = () => {
        setShowWordList(!showWordList);
    }

    const onDragStart = (e: any) => {
        setCurrentDraggedComponent('ToolSection');
        setInitialX(parseInt(e.nativeEvent.screenX));
        setInitialY(parseInt(e.nativeEvent.screenY));
    }
    
    return (
        <div draggable onDragStart={onDragStart} style={{top: dialogTop + 'px', right: dialogRight + 'px', position: 'fixed'}}>
            <div><Button onClick={() => onNextSentence()}>下一句</Button></div>
            <div><Button onClick={() => onPrevSentence()}>上一句</Button></div>
            <div><Button onClick={() => onToggleShowSentenceComponents()}>显示句子成分</Button></div>
            <div><Button onClick={() => onToggleWordList()}>{showWordList ? '关闭生词库' : '打开生词库'}</Button></div>
        </div>
    )
}

export default ToolSection;
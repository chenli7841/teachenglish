import { useContext } from "react";
import { ArticleContext } from "../context/article-context";
import Button from "../widget/Button";

interface ToolSectionProp {
    width: string;
}

function ToolSection(props: ToolSectionProp) {

    const { selectedSentenceId, setSelectedSentenceId, showSentenceComponent, setShowSentenceComponent } = useContext(ArticleContext);

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
    
    return (
        <div style={{paddingTop: '20px', position: 'fixed', height: '100%', width: props.width}}>
            <div><Button onClick={() => onNextSentence()}>下一句</Button></div>
            <div><Button onClick={() => onPrevSentence()}>上一句</Button></div>
            <div><Button onClick={() => onToggleShowSentenceComponents()}>显示句子成分</Button></div>
        </div>
    )
}

export default ToolSection;
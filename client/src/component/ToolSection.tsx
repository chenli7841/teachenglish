import { useContext } from "react";
import { ArticleContext } from "../context/article-context";
import Button from "../widget/Button";

function ToolSection() {

    const { selectedSentenceId, setSelectedSentenceId} = useContext(ArticleContext);

    const onNextSentence = () => {
        setSelectedSentenceId(selectedSentenceId + 1);
      }
    
    const onPrevSentence = () => {
        if (selectedSentenceId > 0) {
            setSelectedSentenceId(selectedSentenceId - 1);
        }
    }
    
    return (
        <div style={{paddingTop: '20px', position: 'fixed', height: '100%', width: '60px'}}>
            <div><Button onClick={() => onNextSentence()}>Next</Button></div>
            <div><Button onClick={() => onPrevSentence()}>Prev</Button></div>
        </div>
    )
}

export default ToolSection;
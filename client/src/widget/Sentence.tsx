import { useContext } from "react";
import { ArticleContext } from "../context/article-context";

interface SentenceProps {
    sid: number
}

function Sentence(props: React.PropsWithChildren<SentenceProps>) {
    const context = useContext(ArticleContext);
    return (<span style={{fontWeight: context.selectedSentenceId === props.sid ? 600 : 400}}>{props.children}</span>)
}

export default Sentence;
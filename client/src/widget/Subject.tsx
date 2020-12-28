import { useContext } from "react";
import { ArticleContext } from "../context/article-context";

interface SubjectProp {
    sid: number;
}

function Subject(props: React.PropsWithChildren<SubjectProp>) {
    const context = useContext(ArticleContext);
    const highlight = context.showSentenceComponent && context.selectedSentenceId === props.sid;
    return (<span style={{display: 'inline-table'}}>
        <span style={{display: 'block', textAlign: 'center'}}>{props.children}</span>
        <span style={{display: highlight ? 'block' : 'none', marginTop: '3px', height: '1px', width: '100%', background: '#000'}} />
        <span style={{display: highlight ? 'block' : 'none', textAlign: 'center'}}>主语</span>
    </span>)
}

export default Subject;
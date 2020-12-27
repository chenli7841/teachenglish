interface SentenceProps {
    highlight: boolean
}

function Sentence(props: React.PropsWithChildren<SentenceProps>) {
    return (<span style={{fontWeight: props.highlight ? 600 : 400}}>{props.children}</span>)
}

export default Sentence;
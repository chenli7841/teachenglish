interface TitleProps {
}

function Title(props: React.PropsWithChildren<TitleProps>) {
    return (
        <div style={{fontWeight: 600, textAlign: 'center', fontSize: '32px'}}>{props.children}</div>
    )
}

export default Title;;
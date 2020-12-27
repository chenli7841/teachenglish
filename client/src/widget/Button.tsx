export interface ButtonProp {
    onClick: () => void
}

function Button(props: React.PropsWithChildren<ButtonProp>) {
    return (
        <button onClick={() => props.onClick()}>{props.children}</button>
    )
}

export default Button;
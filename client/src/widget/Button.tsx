export interface ButtonProp {
    onClick: () => void
}

function Button(props: React.PropsWithChildren<ButtonProp>) {
    return (
        <button
        style={{
            backgroundColor: 'var(--mdc-theme-primary, #6200ee)',
            boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0,0,0,.12)',
            color: '#fff',
            width: '120px',
            textAlign: 'center',
            paddingTop: '8px',
            paddingBottom: '8px',
            border: 'none',
            borderBottom: '1px #bbb solid',
            fontWeight: 600
        }} 
        onClick={() => props.onClick()}>{props.children}</button>
    )
}

export default Button;
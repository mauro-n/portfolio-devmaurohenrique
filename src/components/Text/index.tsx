import style from './style.module.scss';


interface Text extends React.HTMLProps<HTMLParagraphElement> {
    size?: 1 | 2
}

export const Text = ({ className, children, as = 'p', size = 1, ...props }: Text) => {
    const As = as as React.JSX.ElementType;
    return (
        <As {...props}
            className={`${style[`text${size}`]} ${className}`}
        >
            {children}
        </As>
    )
}

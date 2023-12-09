import style from './style.module.scss'

interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
    size?: 1 | 2 | 3 | 4,
    as?: string,
    children: JSX.Element | string,
    variant?: 'overline',
    center?: boolean
}

export const Heading = ({ className, center, size = 1, as = 'h1', children, variant, ...props }: HeadingProps) => {
    const As = as as React.ElementType

    return (
        <As
            {...props}
            className={`
            ${style['heading']}
            ${style[`heading${size}`]}
            ${style[variant ? variant : '']}
            ${className}
            `}
        >
            {children}
        </As>
    )
}

import style from './style.module.scss'

interface ToolIcon extends React.HTMLProps<HTMLImageElement> {
    iconSize?: number
}

export const ToolIcon = ({ iconSize = 1, src, alt, className }: ToolIcon) => {
    return (
        <div className={`${style['icon-wrapper']} d-flex flex-column align-items-center`}>
            <img
                src={src}
                alt={alt}
                className={`
                    ${style[`icon${iconSize}`]} 
                    ${style[`icon`]} 
                    ${className}
                `}
            />
            <p className={style['tooltip']}>
                {alt}
            </p>
        </div>
    )
}

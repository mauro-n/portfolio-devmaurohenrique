import style from './style.module.scss';

interface ProfilePic extends React.HTMLProps<HTMLImageElement> {
    size?: 1 | 2 | 3,
    props?: any
}

export const ProfilePic = ({ alt, className, size = 1, ...props }: ProfilePic) => {

    return (
        <div className={`
            ${style['wrapper']}
            ${style[`size-${size}`]}
        `}>
            <img {...props} alt={alt}
                className={`
                ${style['img']}
                ${style[`imgSize-${size}`]}
                ${className}
            `}
            />
        </div>
    )
}

import style from './style.module.scss'

interface PrimaryBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
export const PrimaryBtn = ({ className, children, ...props }: PrimaryBtn) => {
    return (
        <button className={`${style['btn']} ${className}`} {...props}>
            {children}
        </button>
    )
}

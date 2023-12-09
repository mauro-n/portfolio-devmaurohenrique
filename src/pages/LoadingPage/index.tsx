import style from './style.module.scss'
import tiger from '../../assets/tiger-running-chasing.gif'
import { Heading } from '../../components/Heading'

export const LoadingPage = () => {
    return (
        <>
            <div className={style['wrapper']}>
                <img
                    src={tiger}
                    alt="Tigre azul correndo"
                    className={style['tiger']}
                />
                <Heading 
                size={3}
                style={
                    {color: 'rgb(21 13 144)', 
                    marginTop: '25px',
                    fontWeight: '800'
                    }
                }>
                    Our work is never over
                </Heading>
            </div>
        </>
    )
}
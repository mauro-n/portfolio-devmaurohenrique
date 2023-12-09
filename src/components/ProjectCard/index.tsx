import { useNavigate } from 'react-router-dom';
import { Heading } from '../Heading';
import { Text } from '../Text';
import style from './style.module.scss';
import { PrimaryBtn } from '../PrimaryBtn';
import { ProfilePic } from '../ProfilePic';
import profilePic from '../../assets/Fotos Sandy Albuquerque - sandyfalb_70.jpg';

export interface Card {
    title?: string,
    icon?: string,
    description?: string,
    iconSize?: 1 | 2
}

export interface ProjectCard extends Card {
    url?: string
}

export const ProjectCard = ({ iconSize = 1, title = '', icon, description, url = '' }: ProjectCard) => {
    const navigate = useNavigate()

    const seeProject = (url: string) => {
        navigate('project/' + url)
    }

    return (
        <div className={style['wrapper']}>
            <div className="d-flex gap-3 align-items-center mb-3 mx-3 mt-1">
                {icon ?
                    <img
                        src={icon}
                        alt=""
                        className={style[`icon${iconSize}`]} /> :
                    <ProfilePic src={profilePic} size={2} />
                }
                <Heading as='h3' size={4}>
                    {title}
                </Heading>
            </div>
            <Text size={1} className='mx-3'>
                {description}
            </Text>
            <PrimaryBtn onClick={() => seeProject(url)}>
                Ver mais
            </PrimaryBtn>
        </div>
    )
}

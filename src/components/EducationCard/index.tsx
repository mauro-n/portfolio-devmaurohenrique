import { Heading } from '../Heading';
import { Card } from '../ProjectCard';
import { Text } from '../Text';
import style from './style.module.scss';
import externalLinkIcon from '../../assets/external_link_icon.svg'

export interface EducationCard extends Card {
    institution?: string,
    credentialUrl?: string,
    iconSize?: 1 | 2
}

export const EducationCard = ({ iconSize = 1, credentialUrl, icon, institution, title = '', description }: EducationCard) => {
    return (
        <article className={style['wrapper']}>
            <div className="d-flex gap-3 align-items-center mx-3">
                <img src={icon} alt="" className={style[`icon${iconSize}`]} />
                <div>
                    <Heading as='h4' size={4}>{title}</Heading>
                    <Text className='text-secondary'>
                        {institution}
                    </Text>
                </div>
            </div>
            <Text className='mx-3'>
                {description}
            </Text>
            {credentialUrl ?
                <a href={credentialUrl} className='d-flex justify-content-center gap-1' target="_blank" rel="noopener noreferrer">
                    Exibir credencial
                    <img src={externalLinkIcon} alt="external link icon" />
                </a> :
                <></>
            }
        </article>
    )
}

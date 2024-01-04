import { Heading } from "../Heading"
import { Card } from "../ProjectCard"
import { Text } from "../Text"
import style from './style.module.scss';

export interface ExperienceCard extends Card {
    company?: string,
    date?: string
}

export const ExperienceCard = ({ icon, company, date, title = '', description }: ExperienceCard) => {
    const textCenter = { textAlign: 'center' } as React.CSSProperties

    return (
        <article className={style["wrapper"]}>
            <Heading as='h4' size={3} style={textCenter}>
                {title}
            </Heading>
            <Text size={2} className="text-center text-secondary">
                {company}
            </Text>
            <Text className="mx-2">
                {description}
            </Text>
            <div>
                <img
                    src={icon} alt=""
                    className={`
                ${style['icon']} mt-4`}
                />
            </div>
            <Text size={2} className="text-secondary text-center mt-2">
                {date}
            </Text>
        </article>
    )
}

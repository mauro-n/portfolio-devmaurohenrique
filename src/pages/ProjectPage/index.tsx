import style from './style.module.scss'
// Components
import { Heading } from '../../components/Heading'
import { PrimaryBtn } from '../../components/PrimaryBtn'
import { Text } from '../../components/Text'
//import { ProfilePic } from '../../components/ProfilePic'
// Hooks
import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
// Assets
import github from '../../assets/icons8-github-96.png'
import figma from '../../assets/icons8-figma-96.png'
//import me from '../../assets/Fotos Sandy Albuquerque - sandyfalb_70.jpg'
import external from '../../assets/external_link_icon.svg'

interface ProjectPage {
    icon?: string,
    titulo?: string,
    company?: string,
    sourceUrl?: string,
    sourceFigma?: string,
    deployUrl?: string,
    about?: string,
    tools?: string[],
    description?: string,
    photos?: string[]
}

export const ProjectPage = ({ deployUrl, sourceFigma, photos, description, icon, titulo = '', company, sourceUrl, about, tools }: ProjectPage) => {
    const navigate = useNavigate()
    const [width, setWidth] = useState(0)
    const carousel = useRef<HTMLDivElement>(null)

    useEffect(() => {
        window.scrollTo({ top: 0 })
        if (carousel.current) {
            const xConstraint = carousel.current.scrollWidth - carousel.current.offsetWidth
            setWidth(xConstraint)
        }
    }, [])

    return (
        <motion.div
            className='position-relative px-lg-3'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {/* <div className={style['floating-goback']}>
                {'<'}
            </div> */}
            <div className={style['header']}>
                {icon ?
                    <img className={style['icon']} src={icon} alt="" /> :
                    <></>
                    //<div className='d-flex justify-content-center mb-2'>
                    //    <ProfilePic src={me} size={2} />
                    //</div>
                }
                <div className='flex-grow-1 mt-lg-1'>
                    <Heading size={2} className='text-center text-lg-start'>
                        {titulo}
                    </Heading>
                    <Text className='text-center text-lg-start'>
                        {company}
                    </Text>
                </div>
            </div>
            <div className='d-lg-flex flex-row-reverse gap-2 justify-content-between'>
                <motion.div ref={carousel} className={style['carousel']}>
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className={style['inner-carousel']}
                    >
                        {photos?.map((el, index) => {
                            return (
                                <motion.div key={index} className={style['carousel-item']}>
                                    <img
                                        src={el}
                                        alt=""
                                        className={style['photo']}
                                    />
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </motion.div>
                <div className={`${style['sourceLinks']} pt-5 pt-lg-4`}>
                    {sourceUrl ?
                        <a
                            className={`${style['github-link']} d-lg-flex gap-2 align-items-center`}
                            href={sourceUrl} target="_blank" rel="noopener noreferrer"
                        >
                            <img
                                src={github}
                                alt="github icon"
                                className={style['giticon']}
                            />
                            <Text className='text-center mt-2 mt-lg-3'>
                                Ver o Código
                            </Text>
                        </a>
                        :
                        ''
                    }
                    {sourceFigma ?
                        <a href={sourceFigma}
                            className={`${style['github-link']} d-lg-flex gap-2 align-items-center`}
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img
                                src={figma}
                                alt="figma icon"
                                className={style['giticon']}
                            />
                            <Text className='text-center mt-2 mt-lg-3'>
                                Ver protótipo
                            </Text>
                        </a> :
                        ''
                    }
                    {deployUrl ?
                        <a href={deployUrl}
                            className={`${style['github-link']} d-lg-flex gap-2 align-items-center`}
                            target="_blank" rel="noopener noreferrer"
                        >
                            <img
                                src={external}
                                alt="external link icon"
                                className={style['giticon']}
                            />
                            <Text className='text-center mt-2 mt-lg-3'>
                                Ver Online
                            </Text>
                        </a> :
                        ''
                    }
                </div>
                <div className={`${style['column1']} mt-3 mt-lg-3`}>
                    <Heading as='h2' size={3}>
                        Sobre
                    </Heading>
                    <Text className='mt-2'>
                        {about}
                    </Text>
                    <Heading as='h2' size={3} className='mt-4'>
                        Ferramentas:
                    </Heading>
                    <div className="d-flex gap-3 my-3">
                        {tools?.map((el, index) => {
                            return <img
                                key={index}
                                src={el}
                                alt=""
                                className={style['tool']}
                            />
                        })}
                    </div>
                </div>
            </div>
            {description ?
                <>
                    <Heading as='h2' size={3} className='mt-2'>
                        Case:
                    </Heading>
                    <Text className='mt-3 mb-4' style={{ whiteSpace: 'pre-line' }}>
                        {description}
                    </Text>
                </> :
                <></>
            }

            <PrimaryBtn
                onClick={() => navigate('/')}
                className='w-25 mt-5'
            >
                Voltar
            </PrimaryBtn>
        </motion.div>
    )
}

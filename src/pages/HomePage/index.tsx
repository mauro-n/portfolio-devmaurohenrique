// Components
import { Heading } from "../../components/Heading";
import { ProfilePic } from "../../components/ProfilePic";
import style from './style.module.scss'
import { Text } from "../../components/Text";
import { Outlet } from "react-router-dom";
import { SidewayNavigator, sidewayNavigatorConfig } from "../../components/SidewayNavigator";
// Assets
import profilePic from '../../assets/Fotos Sandy Albuquerque - sandyfalb_70.jpg';
import github from '../../assets/icons8-github-96.png';
import linkedin from '../../assets/icons8-linkedin-96.png';
import javascript from '../../assets/icons8-js-96.png';
import react from '../../assets/icons8-react-100.png';
import python from '../../assets/icons8-python-96.png';
import figma from '../../assets/icons8-figma-96.png';
import sqlIcon from '../../assets/base-de-dados.png';

export const HomePage = () => {

    const navigatorOpt: sidewayNavigatorConfig = {
        "projetos": "/",
        "experiência": "xp",
        "formação": "education",
    }

    return (
        <>
            <div className={style['firstColumn']}>
                <div className="d-flex gap-4 align-items-center mb-4">
                    <ProfilePic src={profilePic} />
                    <div>
                        <Heading>
                            Mauro Henrique
                        </Heading>
                        <div className="my-2"></div>
                        <Text>
                            Fullstack Developer
                        </Text>
                        <div className="d-flex align-items-center mt-1 gap-2">
                            <a href="https://github.com/mauro-n/" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="github icon" style={{ width: '45px' }} />
                            </a>
                            <a href="https://www.linkedin.com/in/mauro-hnunes/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="linkedin icon" style={{ width: '61px' }} />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className={`${style['hr']} d-none d-lg-block`} />
                <Heading as='h2' size={2}>
                    Sobre
                </Heading>
                <Text className="mt-2 pe-5">
                Oi, eu sou o Mauro! Desenvolvo soluções Frontend e Fullstack, também prototipo interfaces, implemento e integro. Aqui eu posto minha trajetória e projetos :)
                </Text>
                <Heading as='h2' size={2}>
                    Ferramentas
                </Heading>
                <div className="d-flex mt-2 gap-1 gap-lg-3">
                    <img className={style["icon"]} src={javascript} alt="Javascript icon" />
                    <img className={style["icon"]} src={react} alt="React icon" />
                    <img className={style["icon"]} src={python} alt="Python icon" />
                    <img className={style["icon"]} src={figma} alt="Figma icon" />
                    <img className={style["icon"]} src={sqlIcon} alt="SQL icon" />
                </div>
            </div>
            <div className={`${style['sidewayNavCol']} ps-lg-4`}>
                <SidewayNavigator config={navigatorOpt} />
                <div
                    className={`${style['cardsWrapper']} px-lg-4 py-lg-1`}
                >
                    <Outlet />
                </div>
            </div>
        </>
    )
}


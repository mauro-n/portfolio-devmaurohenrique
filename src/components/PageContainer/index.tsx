import style from './style.module.scss'
// Components
import { Container } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";

export const PageContainer = () => {
    const location = useLocation()
    const url = location.pathname

    return (
        <>
            <Container
                className={`
                    ${style['wrapper']} py-5 px-4 px-sm-5 d-lg-flex
                    ${url == '/' ||
                        url == '/xp' ||
                        url == '/education' ? style['locked'] : ''
                    }
                `}
            >
                <Outlet />
            </Container>
        </>
    )
}

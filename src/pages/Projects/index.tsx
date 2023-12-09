import { CardsWrapper } from '../../components/CardsWrapper'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom';
import projects from '../../projectCards';

export const Projects = () => {
    const location = useLocation()
    const data = location.state

    return (
        <motion.div
            initial={{ x: data * 100, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
        >
            <CardsWrapper
                cards={projects}
            />
        </motion.div>
    )
}

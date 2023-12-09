import { CardsWrapper } from '../../components/CardsWrapper'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import experiences from '../../experiences'

export const Experiences = () => {
    const location = useLocation()
    const data = location.state

    return (
        <motion.div
            initial={{ x: data * 100, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
        >
            <CardsWrapper cards={experiences} />
        </motion.div>
    )
}

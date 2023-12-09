// Hooks
import { useState, useEffect } from 'react'
// Components
import { HomePage } from './pages/HomePage'
import { Projects } from './pages/Projects'
import { Education } from './pages/Education'
import { AnimatePresence } from 'framer-motion'
import { Experiences } from './pages/Experiences'
import { PageContainer } from './components/PageContainer'
import { LoadingPage } from './pages/LoadingPage'
import { Route, Routes } from 'react-router-dom'
// Projects
import {
  projetoBuscaBairro,
  projetoCalculadora,
  projetoLandingPage,
  projetoPokedex,
  projetoSaper
} from './projects'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={isLoading ? <LoadingPage /> : <PageContainer />}>
          <Route path='' element={<HomePage />}>
            <Route index element={<Projects />} />
            <Route path="xp" element={<Experiences />} />
            <Route path="education" element={<Education />} />
          </Route>
          <Route path='project'>
            <Route path='busca-bairro' element={projetoBuscaBairro} />
            <Route path="calculadora-nps" element={projetoCalculadora} />
            <Route path="chat-call-landing" element={projetoLandingPage} />
            <Route path="pokedex" element={projetoPokedex} />
            <Route path="saper" element={projetoSaper} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App

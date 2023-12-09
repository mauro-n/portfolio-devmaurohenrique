// Components
import { ProjectCard } from "./components/ProjectCard"
// Icons
import jdLogo from './assets/logo-jdRosa.png'
import charmander from './assets/charmanderIcon.png'

const project1 =
    <ProjectCard
        title='JD - Busca Bairro'
        description='Aplicação desktop desenvolvida para o Juventude Digital - codado com Python para tratar os dados dos alunos do programa Trilhas trazendo informações importantes para o projeto e demandas do programa.'
        icon={jdLogo}
        url='busca-bairro'
    /> as ProjectCard

const project2 =
    <ProjectCard
        title='Calculadora de NPS'
        icon={jdLogo}
        description='Calculadora de Net Promoter Score desenvolvida para o Juventude Digital, codada em React - Implementada visando melhorar eficiência dos processos de tratamento de dados da equipe de análise de dados.'
        url='calculadora-nps'
    /> as ProjectCard

const project3 =
    <ProjectCard
        title='Landing Page - Chat&Call'
        description='Landing page implementada para a empresa Chat&Call que distribuí uma aplicação de comunicação de chats e chamadas para ambientes corporativos.'
        url='chat-call-landing'
    /> as ProjectCard

const project4 =
    <ProjectCard
        title='Réplica da Pokedex'
        icon={charmander}
        iconSize={2}
        description='Minha implementação da Pokedex do jogo Fire Red de Gameboy Advanced.'
        url='pokedex'
    /> as ProjectCard



export default [project1,
    project2,
    project3,
    project4]
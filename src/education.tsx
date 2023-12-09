import { EducationCard } from "./components/EducationCard";
import wydenLogo from './assets/wydenLogo1.jpg'
import ifceLogo from './assets/ifceLogo.png'
import efsetIcon from './assets/efSetIcon.jfif'
import udemyIcon from './assets/udemy_logo.jfif'

const education1 =
    <EducationCard
        title='Análise e Desenvolvimento de Sistemas'
        institution='Unifanor Wyden'
        description='Análise e desenvolvimento de sistemas na Unifanor Wyden – Cursando atualmente o 3° semestre.'
        icon={wydenLogo}
    /> as EducationCard

const education2 =
    <EducationCard
        title='Formação em desenvolvimento Web'
        institution='Instituto Federal de Ciência, Inovação e Tecnologia'
        description='Formação fullstack nas tecnologias de React e Springboot utilizando banco de dados da Oracle. Construção de um sistema de agendamentos de consultas abordando conceitos de MVC e segurança utilizando Spring security e tokens.'
        icon={ifceLogo}
        iconSize={2}
        credentialUrl="https://drive.google.com/file/d/1BW1IbqWkqqWnFUeHsLIahnzsg11mY2GA/view"
    /> as EducationCard

const education3 =
    <EducationCard
        title='EF SET English Certificate - C2 Proficient'
        institution='EF SET'
        description='Certificação em inglês proeficiente (C2)'
        icon={efsetIcon}
        iconSize={2}
        credentialUrl="https://www.efset.org/cert/8zeFDA"
    /> as EducationCard

const education4 =
    <EducationCard
        title="SQL and PostgreSQL: The Complete Developer's Guide"
        institution='Udemy'
        description='Curso de SQL que aborda desde os básicos de queries e relacionamentos, subqueries, padrões de design de base de dados até otimizações de busca.'
        icon={udemyIcon}
        iconSize={2}
        credentialUrl="https://www.efset.org/cert/8zeFDA"
    /> as EducationCard



export default [education1, education2, education3, education4]
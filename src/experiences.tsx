import { ExperienceCard } from "./components/ExperienceCard"
import jdLogo from './assets/logo-jdRosa.png'
import cometaLogo from './assets/cometaLogo.png'
import soulLogo from './assets/soul_bilingue_logo.jfif'

const experience1 = <ExperienceCard
    title='Monitor de Frontend'
    company='IJI - Instituto Jovem Inovação'
    description='Atuei como facilitador de aprendizado para alunos do projeto Trilhas, elaborando oficinas e grupos de estudo, trazendo conteúdos de programação relacionados a Javascript, prototipagem e design de interfaces de aplicações cobrindo os fundamentos do design e usabilidade. Trabalhei em conjunto com a equipe de dados do Trilhas desenvolvendo aplicações web e desktop para automação de tarefas e tratamento de dados utilizando Python e React. Desenvolvi e implementei o JD – Busca Bairro, uma aplicação desktop para automatizar a tarefa de tratar dados de mais de 6 mil registros de alunos. Desenvolvi a calculadora de NPS, uma ferramenta Web para cálculo da métrica NPS – auxiliando a equipe de dados a realizar cálculos de dados em planilhas, com foco na eficiência e experiência do usuário;'
    icon={jdLogo}
    date='AGO/23 - DEZ/23'
/> as ExperienceCard

const experience2 = <ExperienceCard
    title='Volunteer English Mentor'
    company='Soul Bilíngue'
    description='Acolho e dou suporte na jornada do aluno Soul, auxiliando no processo de aprendizagem de inglês como um facilitador para o melhor desenvolvimento do jovem e democratização do inglês.'
    icon={soulLogo}
    date='NOV/23 - ATUAL'
/> as ExperienceCard

const experience3 = <ExperienceCard
    title='Administrador'
    company='Cometa Supermercados'
    description='Atuei na coordenação de atividades relacionandas aos setores de recursos humanos, almoxarifado, patrimônio e SESMT. Gerenciava e auditava documentos diversos como atestados e declarações, controles de frequencias, escalas de folgas e férias. Criava e acompanhava planilhas de controle de gastos e desempenho.'
    icon={cometaLogo}
    date='ABR/22 - JUN/23'
/> as ExperienceCard

const experience4 = <ExperienceCard
    title='Auxiliar Administrativo'
    company='Cometa Supermercados'
    description='Trabalhei em equipe como office boy, coletando assinaturas, confeccionando e auditando documentos diversos, organizando e realizando o controle de saídas de almoxarifado.'
    icon={cometaLogo}
    date='SET/19 - NOV/20'
/> as ExperienceCard


export default [experience1, experience2, experience3, experience4]
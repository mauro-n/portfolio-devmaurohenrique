import { ProjectPage } from "./pages/ProjectPage"
// Tools Icons
import jdLogo from './assets/logo-jdRosa.png'
import python from './assets/icons8-python-96.png';
import figma from './assets/icons8-figma-96.png';
import reactIcon from './assets/icons8-react-100.png';
import jsIcon from './assets/icons8-js-96.png'
// Images
import bbImages from "./assets/bbImages.ts";
import npsImages from "./assets/npsImages.ts";
import chatCallImages from './assets/chatCallImages.ts'
import pokemons from './assets/pokemonPhotos.ts'

export const projetoBuscaBairro = <ProjectPage
  icon={jdLogo}
  titulo='Projeto Busca Bairro'
  company='Juventude Digital'
  about='O projeto foi prototipado com o figma e codado em python, se comunica com uma API pública de CEPS para tratar os dados e também tem um banco de dados local. Gostei muito de ter implementado esse projeto pois foram alcançados resultados muito positivos para o programa trilhas.'
  description='Enquanto trabalhava com a analista de dados do juventude digital, notei um problema no banco de dados do programa trilhas que a impedia de conseguir dados demográficos para o relatório do anuário da câmara: os registros das localidades da maior parte dos alunos estava salvo como CEP!
  
  O CEP por sí só não é um dado que trás tanta informação, pois se trata de um número de 8 dígitos que "não diz nada". Para ser utilizado para análises mais efetivas teria de ser buscado o endereço atribuído aquele cep, mas dada a grande quantidade, era impossível fazer manualmente a tempo do prazo de entrega do relatório.
  
  Dessa conversa surgiu a ideia do JD - Busca Bairro, uma solução para esse problema. Comecei a prototipar a interface do aplicativo levando em consideração a usabilidade e o limite de tempo que teria para implementar. Mantive a identidade visual do programa, e me guiei pelas heurísticas de Nielsen. Depois de algumas iterações e coleta de feedback cheguei ao protótipo final e estava pronto para implementação.
  
  A primeira ideia que eu tive foi a de usar uma API pública, iterar sobre os CEPs dentro da planilha e escrever na célula adjacente. Fazia muito tempo que havia trabalhado com Threads e houveram desafios na comunicação com a API externa. Depois de alguns dias havia um MVP com a interface fiel ao protótipo, contudo, um problema: a aplicação não atendia os requisitos de perfomance.
  
  O processo de comunicação e resposta com a API estava demorando muito devido a instabilidades na conexão, chegando a aproximadamente 1 segundo para cada CEP. E quando se escalava para números mais altos (1000, 2000 CEPs etc..) percebemos que mudanças precisavam ser feitas.
  
  Com conhecimentos adquiridos do livro Entendendo algoritmos - do Aditya Y.Bhargava notei que utilizar um banco de dados local iria solucionar o problema, pois a busca binária trabalha com a notação O(log n) e além disso, iria ser desnecessário a conexão com a internet.
  
  Só que não existia um banco de dados pronto com todos os CEPs do Nordeste. Em minhas buscas, consegui acesso a mais de 1 milhão de arquivos JSON de ceps que estavam disponíveis em uma API pública. Baixei os JSONs, criei um script em python para iterar sobre eles e salvar em um banco de dados SqLite usando a coluna CEP como chave primária para otimizar a busca binária.
  
  E depois de muitas horas de "INSERT INTO.." voilá! Estava resolvido o problema de performance, o tempo de escrita por CEP foi reduzido para menos de 10ms com a busca local. A busca online continuou como um fallback, caso o CEP não fosse achado na BD e a aplicação serviu seu propósito, tratando os dados de mais de 6 mil alunos, e permitindo análises demográficas a tempo do prazo de entrega do relatório.
  '
  tools={[python, figma]}
  photos={bbImages}
  sourceUrl="https://github.com/mauro-n/JD-busca-bairro"
  sourceFigma="https://www.figma.com/file/YsD5r6BHN3mgoz7t9zDx0i/Busca-Bairro?type=design&node-id=0%3A1&mode=design&t=hsuFsP0Leb5rksTD-1"
/>

export const projetoCalculadora = <ProjectPage
  icon={jdLogo}
  titulo='Projeto Calculadora de NPS'
  company='Juventude Digital'
  about='Projeto prototipado com Figma e implementado com React, projetado para ser uma solução para uma dor específica da equipe de análise de dados.'
  description='Quando comecei a trabalhar nos dados do programa Trilhas, fui apresentado a definição de NPS e vi que era amplamente utilizado para coleta de métricas de satisfação. Contudo era um processo que era feito manualmente, e haviam dificuldades na visualização desses dados. Decidi implementar essa ferramenta com o intuito de ser algo fácil de utilizar e trazer exatamente os dados que eram buscados pela equipe. Fiz o protótipo e planejei para que pudesse ser usado com apenas uma ação do usuário, visando a eficiência e comodidade da equipe. Após ter sido aprovado o design, implementei com React e hospedei online para uso de qualquer computador. Aproveitei para testar uma lib nova de internacionalização e fazer uma versão em inglês também.'
  tools={[reactIcon, figma]}
  photos={npsImages}
  sourceUrl='https://github.com/mauro-n/NPS-calculator'
  deployUrl="https://nps.ferramenta.cc/"
/>

export const projetoLandingPage = <ProjectPage
  titulo='Landing Page da Chat&Call'
  company='Projeto pessoal'
  about='Landing page implementada usando HTML, CSS e JS - design projetado no Figma. Ícones e imagens usadas foram feitas com inteligência artificial, Adobe Photoshop e Figma . A ideia do site é manter um visual mais conservativo já que se trata de um aplicativo voltado ao mundo corporativo tradicional.'
  tools={[jsIcon, figma]}
  photos={chatCallImages}
  sourceUrl='https://github.com/mauro-n/chat-call-landingPage'
  deployUrl="https://mauro-n.github.io/chat-call-landingPage/"
/>

export const projetoPokedex = <ProjectPage
  titulo='Réplica da Pokedex'
  company='Projeto Pessoal'
  about='Minha implementação da Pokedex, usando a API pública pokeApi - codado em HTML, CSS e Js vanilla usando orientação a protótipos. Repliquei a pokedex do jogo Fire Red de Gameboy Advanced'
  tools={[jsIcon]}
  photos={pokemons}
  sourceUrl='https://github.com/mauro-n/pokedex'
  deployUrl="https://pokedex-mauro-n.vercel.app/"
/>

export const projetoSaper = <ProjectPage
  icon={jdLogo}
  titulo='Projeto Saper'
  company='IFCE - Instituto '
  about='Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.'
  description='Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque.'
  tools={[reactIcon, figma]}
  photos={npsImages}
  sourceUrl='https://github.com/mauro-n/pokedex'
/>
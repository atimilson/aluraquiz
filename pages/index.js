import styled from 'styled-components';
import db from '../db.json';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';


// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width:100%;
  max-width : 350px;
  padding-top : 45px;
  margin: auto 10%;
  @media screen and (max-width : 500px) {
    margin : auto;
    padding : 15px;
  }
`;

export default function Home() {
  const router = useRouter();               
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
       <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>  
            <form onSubmit={function(infosDoEvento) {
              infosDoEvento.preventDefault(); 
              router.push(`/quiz?name=${name}`)
              console.log('fazendo submit');
            }}>
              <input 
              onChange = {function (infosDoEvento){
                console.log(infosDoEvento.target.value);

               // name = infosDoEvento.target.value;
               setName(infosDoEvento.target.value);
              }}
              type="text" placeholder="Diz ai seu nome"></input>
              <button type="submit" disabled={name.length === 0}> 
                Jogar 
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content> 
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>    
        <Footer />
        <GitHubCorner projectUrl="https://github.com/atimilson" />   
      </QuizContainer> 
    </QuizBackground>
  )
}

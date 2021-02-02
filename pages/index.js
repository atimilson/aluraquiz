import styled from 'styled-components';
import db from '../db.json';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';


// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

const QuizContainerr = styled.div`
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
      <QuizContainerr>
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
               <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
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
      </QuizContainerr> 
    </QuizBackground>
  )
}

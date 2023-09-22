import './App.css';
import styled from 'styled-components';
import Logo from '../src/images/tv.logo.png';
import SearchIcon1 from '../src/images/search icon.jpg';
import MovieComponent from './Components/MovieComponent';

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const Header = styled.div`
display: flex;
flex-direction: row;
background-color: black;
color: white;
font-size: 25px;
font-weight: bold; 
background-color: black;
box-shadow: 0 3px 6px 0 #555;
justify-content: space-between;
align-items: center;
padding: 5px 30px;

  `;

const AppName = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;


const LogoSrc = styled.img`
width: 48px;
height: 48px;
margin: 15px;
`;

const SearchBOx = styled.div`
display: flex;
flex-direction: row;
padding: 10px 10px;
background-color: white;
border-radius: 6px;
margin-left: 20px;
width: 50%;
align-items: center;

`;

const SearchIcon = styled.img`
width: 32px;
height: 32px;

`;

const SearchInput = styled.input`
color: black;
font-size: 16px;
font-weight: bold;
outline: none;
margin-left: 10px;
border: none;
width: 40%;
`;
const MovieListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
justify-content: space-evenly;
`;


function App() {
  return (
    <Container>
    <Header>
    <AppName> 
    <LogoSrc src={Logo}/>    
    Movie Box</AppName>
    <SearchBOx> <SearchIcon src = {SearchIcon1}/>
    <SearchInput placeholder='What do you want to watch?'/>
    </SearchBOx>
    </Header>
    <MovieListContainer>
    <MovieComponent/>
    <MovieComponent/>
    <MovieComponent/>
    <MovieComponent/>
   
    </MovieListContainer>
   
    </Container>
    // <div className="App">
    //  Abaasz testing 
    // </div>
  );
}

export default App;

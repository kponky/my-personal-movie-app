import styled from "styled-components"
import TomatoImg from '../images/tomtoe.jpeg'

const MovieContainer =styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 280px;
// box-shadow: 0 3px 10px 0 #aaa;
cursor: pointer;
`;

const CoverImage = styled.img`
height: 362;
object-fit: cover;
`;

const MovieName = styled.span`
font-size: 18px;
font-weight: 600;
margin: 15px 0;
color: black;
white-space: nowrap;
text-overflow; ellipsis;
overflow: hidden;
`;

const InfoColunm = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap:10px;
// justify-content: space-between;
`;

const InfoColumn2 = styled.div`
diplay flex;
flex-direction: row;
align-items: center;
font-size: 16px;
gap:12px;`;

const TomatoImge = styled.img`
width:20px;
height:20px;
`;

const MovieInfo = styled.span`
font-size: 16px;
font-weight: 500;
color: black;
`;

const Info1 = styled.div`
font-size: 16px;
font-weight: 500;
color: grey;
text-transform: capitalize;
`;

const YellowBg = styled.p`
background-color: rgb(249, 175, 4);
font-weight: 900;
padding:4px;

`;




const MovieComponent =(props) =>{
    return  <MovieContainer>
    <CoverImage  src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg"/>
    <Info1>USA, 2021</Info1>
    <MovieName>Meg 2: The Trench (2023)</MovieName>
  
    <InfoColunm>
    <YellowBg>IMDb</YellowBg>
    <MovieInfo>70.0/100</MovieInfo>  
    </InfoColunm>

    <InfoColumn2>
    <TomatoImge src={TomatoImg}/>
    <Infotxt>90%</Infotxt>
   </InfoColumn2>


    <Info1>Action, Science Fiction, Horror
    </Info1>
    
    
    </MovieContainer>
    


}

export default MovieComponent
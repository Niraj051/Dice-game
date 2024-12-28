
import styled from 'styled-components'

export const Rules = ({rule}) => {
  return (
    <Rulescontainer>
        
        <h2>How to play dice game</h2>
        <div className='text'>
            <ul>
            <li><p>select any number</p></li>
            <li><p>Click on dice image</p></li>
            <li><p>After click on dice if selected number is equal to dice numb
        
        er you will get same point as dice</p></li>
            <li><p>If you get wrong guess then 2 point will be dedcuted </p></li>
            </ul>
        </div>
    </Rulescontainer>
  
    
    
  )
}
const Rulescontainer=styled.div`
background-color:#fbf1f1;
max-width:500px;
margin:0px auto;
padding:20px;
box-shadow:5px 5px 5px black;
border-radius:5px;
height: 126px;
h2{
    font-size:24px;

}
.text{
    margin-top:15px;
}
`;

            
            
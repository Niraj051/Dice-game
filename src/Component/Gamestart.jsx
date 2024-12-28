import styled from "styled-components"

export default function Gamestart(props)
{
    return(
        <Container> 
            <div>
                <img src="dices.png" alt="dices-image" ></img>
            </div>
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={props.toggle}>Play Now</Button>

            </div>
        </Container>

    );
}

const Container = styled.div`
max-width:1180px;
height: 100vh;
margin: 0 auto;
/* background-color:brown;  */
display: flex;
align-items: center;

.content{
    background-color: white;
    margin-top:250px;
    margin-left:80px
}
.content h1{
    font-size:96px;
    white-space: nowrap;
}

`;
const Button =styled.button`
display:flex;
flex-direction:column;
justify-content: center;
background-color: black;
width: 200px;
height: 40px;
color: white;
align-items:center;
font-size: 16px;
border:1px solid transparent;
transition:0.3s background ease-in;
cursor: pointer;
margin-left:230px;
border-radius: 5px;

&:hover{
    border:1px solid black;
    background-color: white;
    color:black;
    transition:0.3s background ease-in;
}

`;
import styled  from "styled-components"

export default function TotalScore({score})
{
    return(
        <TotalContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </TotalContainer>
    )
}

const TotalContainer=styled.div`
text-align: center;
margin-top:0px;
max-width: 200px;
h1{
    font-size: 100px;
}
p{
    font-size:24px;
    font-weight:500px;
}

`;
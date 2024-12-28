
import styled from 'styled-components';

const Rolldice = ({handleScorereset,handleRuleon,handleRuleoff,currrentDice,roleDice,rule}) => {
    
    
  return (
    <Dicecontainer>
        <div className='dice' onClick={roleDice}>
            <img src={`dice_${currrentDice}.png`} alt={`dice${currrentDice}}`} onClick={()=>roleDice()} />
        </div>
        <p>Click on Dice to roll</p>
        <button onClick={handleScorereset}>Reset Score</button>
        <button className="rule" onClick={rule?handleRuleoff:handleRuleon}>Rules</button>

    </Dicecontainer>
  )
}

export default Rolldice

const Dicecontainer=styled.div`
display:flex;
align-items: center;
padding: 0px;
margin-top:25px;
flex-direction: column;
gap:10px;

.dice{
    cursor: pointer;
    background-color: #0c0b0bd7;
    border-radius:30px;
    margin:0px;

}
p{
  font-size:24px;
}
button{
 background-color: black;
 font-size:24px;
 padding-left:30px;
 padding-right:30px;
 height:36px;
 color: white;
 border:1px solid transparent;
 transition:0.3sec background ease-in;
 cursor: pointer;
 border-radius: 5px;

}
button:hover{
  background-color: white;
  color: black;
  transition:0.3sec background ease-in;
  border:1px solid black;
}
.rule{
  background-color:black;
 font-size:24px;
 padding-left:66px;
 padding-right:60px;
 height:36px;
 color: white;
 border:1px solid transparent;
 transition:0.3sec background ease-in;
 cursor: pointer;
 border-radius: 5px;
 margin-bottom:9px;


}

.rule:hover{
  background-color: white;
  color: black;
  transition:0.3sec background ease-in;
  border:1px solid black;
}

`;
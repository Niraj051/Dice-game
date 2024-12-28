import styled from "styled-components";
import Numberselecter from "./Numberselecter";
import TotalScore from "./TotalScore";
import {useState} from "react";
import Rolldice from "./Rolldice";
import { Rules } from "./Rules";
export default function Gameplay()

{
    const [error,setError]=useState("")
    const[rule,setRule]=useState(false)
    const handleRuleon=()=>{
        setRule(true)
    }
    const handleRuleoff=()=>{
        setRule(false)
    }
    const [selectednumber,setSelectednumber]=useState();
    const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random() *(max - min)+ min);
    };
    const roleDice = ()=>{
        if (!selectednumber)
            {
                setError("You have not selected any number");
                return
            } 
            setError("");
        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice(()=>randomNumber)
        
        if(selectednumber === randomNumber)
        {
            setScore((prev)=> prev + randomNumber)
        }
        else{
            setScore((prev)=> prev - 1)
        }
        setSelectednumber(undefined);
    }
    const [score,setScore]=useState(0)
    const [currrentDice,setCurrentDice]= useState(1)
    const handleScorereset=()=>{
        setScore(0)
    }
    return(
        <>
        <Container>
        <TotalScore score ={score} />
        <Numberselecter setError={setError} error={error} selectednumber={selectednumber} setSelectednumber={setSelectednumber} />
       
        </Container>
        <Rolldice handleRuleon={handleRuleon} handleRuleoff={handleRuleoff}rule={rule} handleScorereset={handleScorereset} currrentDice={currrentDice} roleDice={roleDice} />
        {rule?<Rules />:<h2></h2>}
        </>
        
    );
}

const Container=styled.div`
display:flex;
max-width:1200px;
margin:0px auto;
justify-content:space-between
`;


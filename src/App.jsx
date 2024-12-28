import Gameplay from "./Component/Gameplay.jsx"
import Gamestart from "./Component/Gamestart";
import {useState} from "react";
import "./index.css"
export default function App()
{
  const [isGamestarted,setIsGamestarted]=useState(false)
  function ToggleGame()
  {
    setIsGamestarted((prev)=>!prev)
  }
  return(
  <>
    {isGamestarted ? <Gameplay /> : <Gamestart toggle={ToggleGame} />}
    </>
   
  );
}


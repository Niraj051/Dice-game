import styled from "styled-components"


const Numberselecter = ({setError,error,selectednumber,setSelectednumber}) => {
    const number=[1,2,3,4,5,6];
    
    const Errorhandler=(value)=>{
      setSelectednumber(value)
      setError("")

    }
    // const number=number.map((value,i)=>)
  return (
    <Container>
      <div className="error">
      <h2>{error}</h2>
      </div>
      
      <div className="flex">
     
         {number.map((value,i)=>
         <Box 
          isSelected={value === selectednumber} key={i} onClick={()=>Errorhandler(value)}>{value}</Box>)}
      </div>
      <p>Select Number</p>
   

    
    </Container>
  )
}

export default Numberselecter
const Container=styled.div`
.error{
  color:red;
  
  margin:10px;
}
display: flex;
flex-direction:column;
align-items: end;
margin-top:5px;
.flex{
  display: flex;
  gap:24px;
}
p{
  font-size:24px
}
`;

const Box=styled.div`
height:52px;
width:52px;
border:1px solid black;
display:grid;

font-size:42px;
font-weight:700px;
place-items:center;

background-color: ${(props)=>props.isSelected ? "black": "white"};
color: ${(props)=> props.isSelected ? "white" : "black"};

`
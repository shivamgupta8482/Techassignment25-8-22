import { Box, Button, Container, Input, Spinner, Stack,Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";


export const Listing = () => {
 
  const [number1,setNumber1]=useState(0);
  const [number2,setNumber2]=useState(0);
 const [arr,setArr] =useState([]);
 
  
  
  function handleCalculate(a,b){
    a=+a;
    b=+b;
    let temp=[];
    
    temp.push(a);
    temp.push(b);
    for(let i =0;i<10;i++){
        let num = temp[i]+temp[i+1];
        temp.push(num);
       
    }
    setArr(temp);
  }

  const handleSubmit = () => {
   
    handleCalculate(number1,number2);  
   
  };
 

console.log(arr);
  return (
    <>
      <Container maxW="md">
        <Stack>
          <Input
          type="number"
            value={number1}
            placeholder="Enter Number 1"
            onChange={(e) => setNumber1(e.target.value)}
          />
          <Input placeholder="Enter Number 2"  value={number2} type="number"  onChange={(e) => setNumber2(e.target.value)} />
          <Button bgColor="blueviolet" onClick={()=>handleSubmit()}>
            Submit
           
          </Button>

        </Stack>
     
       
      </Container>


      
      {
      arr.length>0 && arr.map((item)=>(
            <li>{item}</li>
        ))
        
       }


      
    </>
  );
};

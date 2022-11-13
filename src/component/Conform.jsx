import { Button, CardContent,Card } from '@mui/material'
import React,{useEffect,useState} from 'react'
import {useNavigate} from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Conform() {
  const [data,setdata]=useState({})
  const [confirm,setconfirm]=useState(false)
 

  const Navigate=useNavigate()

  const getdata=()=>{
  const data=localStorage.getItem("Orderdata")
  setdata(JSON.parse(data))
   }
const ke=Object.keys(data)



useEffect(()=>{
  getdata()
},[])

useEffect(()=>{
  const someTruthy = Object.values(data).some(val => val === true);
  setconfirm(someTruthy)
},[data])

  return (
    <div style={{textAlign:"center"}}>
      <h1 
      style={{backgroundColor:"#CB410B",
      fontFamily:"'Brush Script MT', cursive"}}
      >Confirm Your Order</h1>
      <Card>
        <CardContent >
        {ke.map((item)=>
        <h3>{data[item]?item:null}</h3>
        
        )}
        </CardContent>
      </Card>

      <Button 
      variant='contained' 
      color="error" 
      onClick={()=>Navigate("/")}
      > {"<="}Back</Button>
      {
      confirm?
      <Button 
      variant='contained' 
      color="success"  
      onClick={()=>Navigate("/orderconfo")}
      >Conform</Button>:<b> "No item selected"?</b>
      }
    </div>
  )
}


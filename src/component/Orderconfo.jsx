import React,{ useEffect ,useState} from 'react'
import {Button} from "@mui/material"
import {useNavigate} from "react-router-dom"
import Pizzaman from "../Images/Pizzaman.jpg"


export default function Orderconfo() {
  const [key,setkey]=useState([])
  const Nvigate=useNavigate();
  const data = localStorage.getItem("Orderdata");
  const result=JSON.parse(data)
   useEffect(()=>{
    setkey(Object.keys(result))
   },[])

  return (
    <div>
      <h1 
      style={{textAlign:"center",
      backgroundColor:"#E86100",
      fontFamily:"-moz-initial",
      color:"white"}}>
      {localStorage.getItem("CustomerName")} your order is ready in 30-40 minutes 
      </h1>

      <img 
      src={Pizzaman} 
      alt="Pizzaman img" 
      style={{marginLeft:"25%",textAlign:"center"}} 
      height="30%" width="25%"  
      />
      <i>This is your order :-</i>
      {
        key.map((item)=>
        <b>{result[item] ? item +" ,": null}</b>
        )
      }

      <h1 
      style={{
      fontFamily:"'Brush Script MT', cursive",
      textAlign:"center",
      backgroundColor:"	#F4A460",
      color:"white"}}
      >Order is Conform</h1>

      <Button 
      fullWidth
      style={{background:"#DA9100",color:"white",borderRadius:"50%"}}
      onClick={()=>Nvigate("/")}
      ><b>OK</b>
      </Button>

    </div>
  )
}

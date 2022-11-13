import React, { useState,useRef } from 'react'
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import {Grid,Button} from "@mui/material"
import Basel from "../Images/Basel.png"
import Pineapple from "../Images/Pineapple.png"
import Pizza from "../Images/Pizza.png"
import Red from "../Images/Red.png"



function Pizzimg() {
    const [data,setData]=useState(
    {
      olive:false,
      besal:false,
      tomato:false,
      pineapple:false,                    
    })
   const [txt,setTxt]=useState("")
   const Navigate=useNavigate()
   const handeleorder=()=>{
   localStorage.setItem("Orderdata",JSON.stringify(data))
   localStorage.setItem("CustomerName",txt)
   Navigate("/conform");
   }

   const chengename=(name)=>{
   let  newdata=JSON.parse(JSON.stringify(data));
   newdata[name]=!newdata[name]
   setData(newdata)}

  return (
      <div>
        <Grid container spacing={3}>

        <Grid item xs={6} sx={{border:"2px solid black"}} >
          <div style={{maxWidth:500,position:"relative"}}>

        <motion.div
        animate={{
        x:data["pineapple"]?100:-400,
        y: 60,
        scale: 1,
        rotate: 0,
        }}
        className='Pizzaclass'>
        <img src={Pineapple}
        alt="Pineapple img" style={{zIndex:2,left:"20px"}}
        height="90%"
        width="70%"/>
        </motion.div>

        <motion.div
        animate={{
        x:data["tomato"]?100:-300,
        y: 100,
        scale: 1,
        rotate: 0,
        }}
        className='Pizzaclass'>
        <img src={Red}
        alt="Tomato img"
        style={{zIndex:4,left:"20px"}}  
        height="60%" width="60%"/>
        </motion.div>

       <motion.div
       animate={{
       x:data["besal"]?100:-300,
       y: 100,
       scale: 1,
       rotate: 0,
       }}
       className='Pizzaclass'
       >
       <img src={Basel}
       alt=""style={{zIndex:3}}
       height="100%" 
       width="100%" />
       </motion.div>

      <img src={Pizza}
      alt="" style={{zIndex:1}} 
      height="100%" 
      width="100%" 
      />

      </div >
        </Grid>

        <Grid item xs={6} sx={{border:"2px solid black"}}>
        <input type="text" 
        placeholder='Customer Name' 
        onChange={(e)=>setTxt(e.target.value)} 
        />
        <br/>

        <input 
        type="checkbox" 
        onChange={()=>chengename("olive")}
        className="form-control" 
        />
        <label >olive
        </label>
         <br/>

        <input type="checkbox" 
        onChange={()=>chengename("pineapple")} 
        />
        <label>pineapple
        </label>
        <br/>

        <input 
        type="checkbox" 
        onChange={()=>chengename("besal")} 
        />
        <label>besal
        </label>
        <br/>

        <input 
        type="checkbox" 
        onChange={()=>chengename("tomato")} 
        />   
        <label>tomato
        </label>
        <br/>

        <Button 
        fullWidth 
        onClick={()=>handeleorder()} 
        variant='contained' 
        color="success"
        >Order</Button>
        </Grid>
  
        </Grid>
      </div>
  )
}
export default Pizzimg;
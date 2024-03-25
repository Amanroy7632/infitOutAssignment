import { useState } from 'react'
import { NavLink } from 'react-router-dom'
function Day({data,setPosition,position}) {
    const [isActive,setIsActive]=useState(false);
    const addTitle=(keyId)=>{
        console.log(`Position : ${position}`);
        if(keyId===data.id){
            data.isHighlight=true
            if(data.subName.includes("5")){
                if(position>=25){

                    setPosition(position-Math.floor(Math.random()*5));
                    // console.log(position);
                }else {
                    setPosition(position+Math.floor(Math.random()*2));
                    // console.log(position);
                    
                }
            }
            else if(data.subName.includes("0")){
                if(position>=25){
                    setPosition(position-Math.floor(Math.random()*10));
                }else{
                    setPosition(position+Math.floor(Math.random()*9));
                }
            }
        }
        setIsActive(!isActive);
    }
  return (
      <NavLink onClick={(e)=>{  addTitle(data.id)}} to={`${data.id}`} className={({isActive})=>`${isActive?"bg-blue-600 shadow-sm shadow-[rgba(0, 0, 0, 0.1)] text-white":"bg-transparent text-slate-500"}  font-semibold px-2 py-1 max-sm:text-sm "}`} >{isActive?data.subName:data.name}</NavLink>
  )
}
export default Day

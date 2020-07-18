import React,{useState,useEffect} from 'react'

function HookMouse() {
const[X,setX]=useState(0)
const[Y,setY]=useState(0)

const logMousePosition = e =>{
    console.log('Mouse Move');
    setX(e.clientX);
    setY(e.clientY);

}
useEffect(()=>{
    console.log('UseEffect called')
    window.addEventListener('mousemove', logMousePosition)
}, [])
    return (
        <div>
            Hook x - {X} Y - {Y}
        </div>
    )
}

export default HookMouse

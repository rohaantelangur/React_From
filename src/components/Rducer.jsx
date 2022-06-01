import React from 'react'


const reducer=(state,{type,payload})=>{
    switch(type){
        case 'INC':{
            return state + payload
        }
        case 'DEC':{
            return state - payload
        }
        default:{
            console.log("Type Incorrect",type)
            return state
        }
    }
}
export const Rducer = () => {
    const [count,dispat]=React.useReducer(reducer,0)
  return (
    <div>
        Counter:{count}
        <div>
            <button onChange={()=>dispat({type: "DEC", payload:1})}>-</button>
            <button onChange={()=>dispat({type: "INC", payload:100})}>+</button>
        </div>
    </div>
  )
}

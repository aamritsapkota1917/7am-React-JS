import React,{useState} from 'react'

const IncrementDecrement = () => {
  const[number,setNumber]=useState(1)
  // const increase=()=>(
  //   setNumber(number+1)
  // )
  return (
<>
<h2 className='text-center'>{number}</h2>
<center>
    <button className='btn btn-primary' onClick={()=>setNumber(number+1)}>click on Increment</button>
    &nbsp; &nbsp; &nbsp; &nbsp;
    {
      number>1 &&
    <button className='btn btn-warning ' onClick={()=>setNumber(number-1)}>click on Decrement</button>
    
    
    }
</center>
</>
    )
}

export default IncrementDecrement
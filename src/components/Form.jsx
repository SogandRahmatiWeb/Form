import React, { useState } from 'react'
import toast , {Toaster} from 'react-hot-toast'

export default function Form() {

  const[inpForm,setInpForm]=useState({
    username:'',
    password:'',
    gender:'',
    check:false,
  })

  const formHandler = (e) => {
     if (e.target.name === 'check') {
        setInpForm(prev => ({...prev,check:!inpForm.check}))
     } else if(e.target.name==='gender'){
        setInpForm(prev => ({...prev, gender: e.target.value}))
     } else if (e.target.name==='username') {
         setInpForm(prev => ({...prev, username: e.target.value}))
     } else {
         setInpForm(prev => ({...prev, password: e.target.value}))
     }
  }

  const submitHandler = (e) =>{
     e.preventDefault() 
     
     if(!inpForm.username || !inpForm.password || !inpForm.gender || !inpForm.check) {
         return null
     } 
     console.log(inpForm)
     toast.success('Successfully send!')
  }

  return (
   
  <form action="#" onSubmit={submitHandler} className='part1' >
    <h1>Login</h1>
   <div className="form1">
     <label htmlFor="username">Username:</label>
    <input type="text" placeholder=' username...' name='username' id='username' value={inpForm.username} onChange={formHandler} />
    <br /> 
    </div>
   <div className="form2">
     <label htmlFor="password">Password:</label>
    <input type="password" name="password" id="password" placeholder=' password...' value={inpForm.password}  onChange={formHandler} />
    <br />
   </div>
   <div className="form3">
     <label htmlFor="female">Female:</label>
    <input type="radio" name="gender" id="female" checked={inpForm.gender==='female'} value='female' onChange={formHandler} />
    <br />
   </div>
   <div className="form4">
     <label htmlFor="male">Male:</label>
    <input type="radio" name="gender" id="male" checked={inpForm.gender==='male'} value='male'  onChange={formHandler} />
    <br />
   </div>
    
    <div className="form5">
        <label htmlFor="rules">Accept Rules:</label>
    <input type="checkbox" name="check" id="rules" checked={inpForm.check}  onChange={formHandler} />
    <br />
    </div>
   
    <button className='button'>Submit</button>
    <div><Toaster/></div>
  </form>
  )
}

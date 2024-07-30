import { useState } from "react";

function BasicForm(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newEntry, setNewEntry] = useState([])

    const emailFun = (e)=>{
       setEmail(e.target.value)
    }
    const passFun = (e)=>{
       setPassword(e.target.value)
    }
    const submitForm = (e)=>{
      e.preventDefault();
      const entry = { email: email, password: password}
      setNewEntry([...newEntry, entry])
      console.log(newEntry)
      setEmail("");
      setPassword("")
    }
   return(
    <>
     <form action="" onSubmit={submitForm} className="text-xl py-20 px-10 bg-blue-400 text-black rounded-3xl">
        <div>
            <label htmlFor="email" >Email:</label>
            <input type="text" name="email" id="email" value={email} onChange={emailFun} className="mx-5 rounded-md text-white px-2" autoComplete="off"/>
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" id="password" value={password} onChange={passFun} className="rounded-md m-6 text-white px-2" autoComplete="off"/>
        </div>
        <button type="submit" className="bg-pink-800 px-7 py-2">Login</button>
     </form>
    <div>
    {
        newEntry.map((curElem)=>{
            return(
                <div className="text-white my-6 bg-pink-700 rounded-3xl px-3 py-5 text-xl" key={curElem}>
                    <p>Email id: {curElem.email}</p>
                    <p>Password:  {curElem.password}</p>
                </div>
            )
        })
     }
    </div>
     </>
   )
}
export default BasicForm;
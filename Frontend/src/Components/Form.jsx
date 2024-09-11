import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Form() {
  const [name,setName]= useState('');
  const [email,setEmail]= useState('');
  const [msg,setMsg]= useState('');

  const sendData =async ()=>{
    try{
      await axios.post(`https://task-30-alpha.vercel.app/feedback/form`,{
        name,email,message:msg
      })
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <h1 className="text-white text-3xl font-serif border-b-2">
        Feedback Form
      </h1>
      <Link to="data" className="absolute top-14 right-4 bg-sky-500 text-white text-xl px-6 py-2 rounded-md active:scale-90 outline-none">
        Show Feedback
      </Link>
      <form
        action="data"
        className="w-[40%] h-[70%] px-6 flex flex-col justify-center items-center gap-4 rounded-md bg-white shadow-2xl"
        onSubmit={sendData}
      >
        <div className="flex flex-col gap-1 w-full ">
          <label htmlFor="name" className="text-lg">
            Username :
          </label>
          <input
            type="text"
            id="email"
            className="border-2 rounded-md px-4 py-1 outline-none"
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-1 w-full ">
          <label htmlFor="email" className="text-lg">
            Email :
          </label>
          <input
            type="email"
            id="email"
            className="border-2 rounded-md px-4 py-1 outline-none"
            onChange={e=> setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-1 w-full ">
          <label htmlFor="msg" className="text-lg">
            Mesage :
          </label>
          <textarea
            id="msg"
            className="border-2 rounded-md px-4 py-1 outline-none"
            onChange={e=> setMsg(e.target.value)}
            required
          ></textarea>
        </div>
        <button className="bg-sky-500 text-white text-xl px-6 py-2 rounded-md active:scale-90 outline-none">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

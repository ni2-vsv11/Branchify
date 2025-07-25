"use client"

import Image from 'next/image'
import React, { useState } from 'react'
 import { ToastContainer, toast } from 'react-toastify';

const Generate = () => {

  const [link, setlink] = useState("")
  const [linktext, setlinktext] = useState("")
  const [handle, sethandle] = useState("")
  const [pic, setpic] = useState("")


   const addLink = async (text, link, handle) => {
     const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "link": link,
  "linktext": text,
  "handle": handle,
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

const r = await fetch("http://localhost:3000/api/add", requestOptions)
  const result = await r.json()
  toast(result.message)
  setlink("")
  setlinktext("")
   }

  return (
    <div className='bg-purple-300 min-h-screen grid grid-cols-2'>
        <div className='col1 flex  my-35 items-center flex-col'>
          <div className="flex-none " >
              <h1 className=" font-black text-9xl">Branchify</h1>
          </div>
          <div className='flex flex-col gap-2 pl-7 '>
          <h1 className='font-bold text-zinc-900 text-2xl my-3'>Create your link-Branches</h1>
            
            <div className="item">
            <h2 className=''> Step 1: Claim your Handle</h2>
            <div className="mx-">
               <input value={handle || ""} onChange={e=>{sethandle(e.target.value)}} className='bg-white px-2 py-2 my-2 focus:outline-cyan-600 rounded-full ' type="text" placeholder='Choose a Handle' />
            </div>
            </div>

            <div className="item">
            <h2 className=''> Step 2: Add Links</h2>
             <div className=" flex justify-content">
               <input value={linktext || ""} onChange={e=>{setlinktext(e.target.value)}} className='bg-white px-2 py-2 my-2 focus:outline-cyan-600 rounded-full ' type="text" placeholder='Enter link text' />
               <input value={link || ""} onChange={e=>{setlink(e.target.value)}} className='bg-white px-2 py-2 mx-2 my-2 focus:outline-cyan-600 rounded-full ' type="text" placeholder='Enter link' />
               <button onClick={()=> addLink(linktext, link, handle)} className='px-2 mx-2 my-2 bg-cyan-600 text-white font-semibold rounded-3xl'>Add Link</button>
            </div>
            </div>

            <div className="item">
            <h2 className=''> Step 3: Add Picture and Finalize</h2>
            </div>
            <div className="flex justify-content ">
              <input value={pic || ""} onChange={e=>{setpic(e.target.value)}} className='bg-white px-2 py-2 mx-2 my-2 focus:outline-cyan-600 rounded-full ' type="text" placeholder='Enter link to your picture' />
              <button className='px-2 mx-2 my-2  bg-cyan-600 text-white font-semibold rounded-3xl'>Create link-branches</button>
            </div>
             
          </div>
        </div>
        <div className="col2 w-full h-full bg-purple-300">
         <Image src='/generate.png' alt='generate your links' width={500} height={500} />
      <ToastContainer />
        </div>
    </div>
  )
}

export default Generate
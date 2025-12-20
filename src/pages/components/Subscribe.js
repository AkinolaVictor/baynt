import axios from 'axios'
import React, { useState } from 'react'

function Subscribe({style}) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  async function sendMsg(){
    if(loading) return

    if(!email.split('').includes('.') || !email.split('').includes('@') || email.length<5) {
      alert("invalid email address, please ensure to use a valid email address")
      return
    }
    
    const html = `
    <div>
            <h4>Hello, Welcome to Baynt</h4>
            <p>This is a demo project i created for showcase.</p>
            <p>Thank you for opting to subscribe</p>
            <p>There really isn't any app to be given out...</p>
        </div>
    `
    const data = {
        userEmail: `${email}`,
        subject: 'Get Your Free Trial With Baynt',
        html
    }
    
    setLoading(true)
    await axios.post("/api/sendEmail", {...data}).then((result)=>{
      const {successful} = result.data
      if(successful){
        console.log("successful");
        setEmail("")
        alert("A message has been sent to your email address, please check it out")
      }
    }).catch((e)=>{
      console.log("error encountered", e);
      alert("Failed, something went wrong")
    })
    setLoading(false)
  }

  return (
      <div className={`flex justify-center items-center bk2:flex-row flex-col mt-15 ${style}`}>
        <div>
          <img src="/images/tonnage2.jpg" alt="tonnage image" />
        </div>

        <div className="bk2:ml-auto bk2:mr-0 flex flex-col justify-center items-center ">
          {/* <img 
            src="/images/getstarted.jpg" 
            alt="get started" 
            
          /> */}
          <div className='w-full max-w-[400px] my-[15px]'>
              <p className='text-[brown] text-[13px]'>Get Started</p>
              <p className='text-[40px] my-[15px] leading-[45px]'>Start your <span className='text-[brown]'>Baynt</span> journey here</p>
              <p className='opacity-70 text-[13px]'>Unlock the power of data analytics and gain actionable insights to make informed business decisions.</p>
          </div>

          <input 
            type="email" 
            name="subscribe" 
            onChange={(e)=>{setEmail(e.target.value)}}
            value={email}
            placeholder="name@email.com"
            className="bg-white w-[300px] h-[40px] rounded-full ml-[15px] px-[15px] mt-[20px]"
            style={{border: "1px solid rgba(41,41,41,0.7)"}}
          />
          <div onClick={sendMsg} className="bg-red-500 cursor-pointer flex justify-center items-center w-[300px] h-[40px] mt-3 ml-[15px] rounded-full">
            {
              loading?
              <p className="text-white text-[14px]">Loading...</p>:
              <p className="text-white text-[14px]">Subscribe</p>
            }
          </div>
          <p className="text-[#414141] opacity-70 ml-[15px] text-[12px] mt-3">7 day trial-No credit card required</p>
        </div>
      </div>
  )
}

export default Subscribe

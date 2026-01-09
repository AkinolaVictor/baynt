import axios from 'axios'
import React, { useState } from 'react'

function Freetrials({style}) {
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
            <p>Thank you for opting in for a trial</p>
            <p>There really isn't any app to be given out...</p>
          </div>
      `
      const data = {
          userEmail: `${email}`,
          subject: 'Get Your Free Trial With Baynt',
          html
      }
      
      setLoading(true)
      await axios.post("/api/sendEmail_2", {...data}).then((result)=>{
        // console.log({sd: });
        const {successful} = result.data
        if(successful){
          console.log("successful");
          setEmail("")
          alert("A message has been sent to your email address, please check it out")
        }
      }).catch((e)=>{
        console.log("error encountered", e);
        alert("Failed to give access, some minor problem occured in the server")
      })
      setLoading(false)
    }

    return (

        <div className={`bk2:mt-[220px] mt-[70px] bk2:flex block justify-between mx-auto bk2:mx-0 ${style}`}>
  
          <div className="text-center bk2:text-start">
            <p className="text-red-500 text-[14px]">Start building today!</p>
            <p className="text-[30px] leading-[40px] mt-[20px]">Start your 7-day free trial</p>
            <p className="bk2:w-[450px] text-[13px] text-[#414141] opacity-70 mt-[20px]">
              Experience the Baynt difference ad unlock the true potential
            </p>
            
          </div>
  
          <div className="flex flex-col bk2:flex-row bk2:mt-0 mt-[20px] bk2:justify-start justify-center items-center mx-auto bk2:mx-0">
              <input 
                type="email" 
                name="subscribe" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="name@email.com"
                className="bg-white w-[300px] h-[40px] rounded-full px-[15px] mx-auto bk2:mx-0"
                style={{border: "1px solid rgba(41,41,41,0.7)"}}
              />
              <div onClick={sendMsg} className="bg-red-500 cursor-pointer flex justify-center items-center w-[200px] h-[40px] bk2:ml-[15px] mx-auto bk2:mx-0 mt-[15px] bk2:mt-0 rounded-full">
                {
                  loading?
                  <p className="text-white text-[14px]">Loading...</p>:
                  <p className="text-white text-[14px]">Get instant access</p>
                }
              </div>
          </div>
          
        </div>
    )
}

export default Freetrials

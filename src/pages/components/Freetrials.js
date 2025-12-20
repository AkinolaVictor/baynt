import React from 'react'

function Freetrials({style}) {
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
                value="" 
                placeholder="name@email.com"
                className="bg-white w-[300px] h-[40px] rounded-full px-[15px] mx-auto bk2:mx-0"
                style={{border: "1px solid rgba(41,41,41,0.7)"}}
              />
              <div className="bg-red-500 cursor-pointer flex justify-center items-center w-[200px] h-[40px] bk2:ml-[15px] mx-auto bk2:mx-0 mt-[15px] bk2:mt-0 rounded-full">
                <p className="text-white text-[14px]">Get instant access</p>
              </div>
          </div>
          
        </div>
    )
}

export default Freetrials

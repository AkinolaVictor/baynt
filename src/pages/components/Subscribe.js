import React from 'react'

function Subscribe({style}) {
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
              value="" 
              placeholder="name@email.com"
              className="bg-white w-[300px] h-[40px] rounded-full ml-[15px] px-[15px] mt-[20px]"
              style={{border: "1px solid rgba(41,41,41,0.7)"}}
            />
            <div className="bg-red-500 cursor-pointer flex justify-center items-center w-[300px] h-[40px] mt-3 ml-[15px] rounded-full">
              <p className="text-white text-[14px]">Subscribe</p>
            </div>
            <p className="text-[#414141] opacity-70 ml-[15px] text-[12px] mt-3">14 day trial-No credit card required</p>
          </div>
        </div>
    )
}

export default Subscribe

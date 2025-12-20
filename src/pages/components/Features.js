import React from 'react'

function Features({icon1, icon2, title, detail, style}) {
    return (
        <div className={`w-[350px] flex flex-col justify-start items-start rounded-full ${style}`}>
          <img src={`/images/${icon1}.jpg`} alt="phone with baynt logo on it" className=" mr-[0px] mb-[15px]"/>
          <div className='w-[auto] max-w-[400px]'>
              <div className='flex items-center'>
                  <img src={`/images/${icon2}.jpg`} alt="phone with baynt logo on it" 
                      className="w-[20px] h-[20px] mr-[10px] rounded-full"/>
                  <p className='text-[18px]'>{title}</p>
              </div>
              <p className='opacity-70 text-[14px] mt-[15px]'>{detail}</p>
          </div>
        </div>
    )
}

export default Features

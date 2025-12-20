import React from 'react'

function EachStory({icon, title, detail}) {
    return (
        <div 
            className='w-full max-w-[350px] h-[280px] p-[7px] rounded-[20px] bg-white flex justify-center items-center flex-col m-[10px] bk2:m-[50px]'
            style={{boxShadow: "rgba(0,0,0,0.35) 0px 5px 15px"}}
        >
            <div 
                className='w-full h-full p-[20px] rounded-[20px] flex flex-col justify-center items-center'
                style={{border: "1px solid rgba(41,41,41,0.08)"}}
            >
                <img src={`/images/${icon}.jpg`} alt="logo pac 1" className="w-[80px] h-[80px] rounded-full"/>                          
                <p className='text-[30px] mt-[35px] mb-[20px]'>{title}</p>
                <p className='opacity-70 text-[13px] text-center'>
                    {detail}
                </p>
            </div>
        </div>
    )
}

export default EachStory

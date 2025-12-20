import React from 'react'

function Each_Thread({title, description, icon}) {
    return (
        <div className='bg-[white] rounded-[15px] p-[3px] w-[auto] max-w-[400px] my-[15px] bk:mx-[30px]'
            style={{border: "1px solid #eee"}}
        >
            <div className='bg-[#eee] rounded-[15px] p-[30px] w-[auto] max-w-[400px]'>
                <div className='flex items-center'>
                    <img src={`/images/thread${icon}.jpg`} alt="phone with baynt logo on it" 
                        className="w-[45px] h-[45px] mr-[10px] rounded-full"/>
                    <p className='text-[14px]'>{title}</p>
                </div>
                <p className='opacity-70 text-[13px] mt-[15px]'>{description}</p>
            </div>
        </div>
    )
}

export default Each_Thread

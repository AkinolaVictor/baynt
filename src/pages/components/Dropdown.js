import React, { useState } from 'react'

function Dropdown({question, answer}) {
    const [opened, setOpened] = useState(false)
    const toggle = () => setOpened(!opened)
    return (
        <div className='w-[100%] max-w-[400px] my-[10px]'>
            <div onClick={toggle} className='p-[15px] bg-[white] w-[100%] rounded-[10px] flex items-center justify-between cursor-pointer' style={{boxShadow: "rgba(0,0,0,0.16) 0px 2px 7px"}}>
                <p className='text-[12px]'>{question}?</p>
                
                <img src={`/images/down-arrow.jpg`} alt="phone with baynt logo on it" 
                    className="w-[15px] h-[10px]"/>
            </div>
            <div className={`w-[100%] px-[15px] py-[20px] mt-[15px] relative rounded-[10px] bg-white ${opened?"block":"hidden"}`} style={{boxShadow: "rgba(0,0,0,0.16) 0px 2px 7px"}}>
                <p className='text-[12px]'>{answer}</p>

                <button onClick={toggle} className='w-[100%] mt-[15px] cursor-pointer'>
                    <p className='text-[12px] font-[600] text-[red] '>Close</p>
                </button>
            </div>
        </div>
    )
}

export default Dropdown

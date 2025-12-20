import React from 'react'

function Each_Pricing({title, description, price, save, info1, info2, info3, info4, mark1, mark2, mark3}) {
    return (
        <div 
            className='max-w-[230px] px-[25px] py-[25px] m-[20px] rounded-[10px] bg-[white]'
            style={{boxShadow: "rgba(0,0,0,0.16) 0px 2px 7px"}}
        >
            <p className='font-[600] text-[12px]'>{title}</p>
            <p className='opacity-70 text-[12px] mt-[10px]'>{description}</p>

            <p 
                style={{background: save>15?"rgb(221, 207, 207)":"#eee"}}
                className={`text-center rounded-full py-[3px] px-[6px] w-[100px] text-[${save>15?"red":"black"}] mt-[10px] text-[11px]`}
            >Save up to {save}%</p>
           
            <p className='text-[20px] mt-[15px]'>
                ${price}.00 
                <sup className='text-[12px] opacity-50'> / Month</sup>
            </p>
            
            <div className='w-[full] h-[2px] bg-[#eee] my-[20px] ml-auto mr-auto'/>

            <div className='flex items-center'>
                <img src="/images/bandwidth.jpg" alt="phone with baynt logo on it" 
                    className="w-[15px] h-[15px] mr-[10px]"/>
                <p className='text-[12px]'>{info1} <span className='opacity-50'>{info2}</span></p>
            </div>

            <div className='flex items-center mt-[10px]'>
                <img src="/images/limit.jpg" alt="phone with baynt logo on it" 
                    className="w-[15px] h-[15px] mr-[10px]"/>
                <p className='text-[12px]'>{info3} <span className='opacity-50'>{info4}</span></p>
            </div>
            
            <div className='w-[full] h-[2px] bg-[#eee] my-[20px] ml-auto mr-auto'/>

            <div className='flex items-center mt-[10px]'>
                <img src="/images/dev.jpg" alt="phone with baynt logo on it" 
                    className="w-[15px] h-[15px] mr-[10px]"/>
                <p className='text-[12px]'>{mark1}</p>
            </div>

            <div className='flex items-center mt-[10px]'>
                <img src="/images/dev.jpg" alt="phone with baynt logo on it" 
                    className="w-[15px] h-[15px] mr-[10px]"/>
                <p className='text-[12px]'>{mark2}</p>
            </div>

            <div className='flex items-center mt-[10px]'>
                <img src="/images/dev.jpg" alt="phone with baynt logo on it" 
                    className="w-[15px] h-[15px] mr-[10px]"/>
                <p className='text-[12px]'>{mark3}</p>
            </div>
        </div>
    )
}

export default Each_Pricing

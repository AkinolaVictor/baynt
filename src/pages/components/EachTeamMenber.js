import React from 'react'

function EachTeamMenber({name, role, icon}) {
    return (
        <div className='bg-[white] rounded-[15px] p-[3px] w-[auto] max-w-[400px] my-[15px] bk:mx-[30px]'
            style={{border: "1px solid #eee"}}
        >
            <div className='bg-[#eee] rounded-[15px] p-[30px] w-[320px] flex justify-between'>
                <div className=''>
                    <p className='text-[20px]'>{name}</p>
                    <p className='text-[13px] opacity-70'>{role}</p>

                    <div className='flex justify-between items-center mt-[40px]'>
                        <div className='w-[30px] h-[30px] rounded-full bg-[gray]'/>
                        <div className='w-[30px] h-[30px] rounded-full bg-[gray]'/>
                        <div className='w-[30px] h-[30px] rounded-full bg-[gray]'/>
                    </div>
                </div>

                <div>
                    <img 
                        src={`/images/team_mem${icon}.jpg`} 
                        alt="faster icon" 
                        className="p-[10px] w-[70px] h-auto rounded-full ml-[10px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default EachTeamMenber

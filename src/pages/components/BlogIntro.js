import { generalFunctions } from '@/utils/storeControllers/generalFunctions'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

function BlogIntro({creator, title, body, icon, num, item}) {
    const router = useRouter()
    const {openedPost} = useSelector(state=>state.generalSlice)
    // console.log({openedPost});
    
    const {setGeneralAlpha} = generalFunctions()
    function openArticle(data){
        setGeneralAlpha("openedPost", data)
        router.push("/blog/openpost")
    }
    return (
        <div className='flex flex-wrap w-full max-w-[1200px] justify-center items-center my-[20px]'>
            <img 
                src={`/images/${icon}.jpg`} alt="phone with baynt logo on it" 
                className="w-full h-auto max-w-[500px] mr-[15px] bk7:mr-auto my-[15px]" 
            />

            <div className='w-full max-w-[500px] my-[15px]'>
                <p className='mb-[80px] text-[13px]'>{num} <sup>_______</sup> {creator}</p>
                <p className='text-[16px] mb-[15px]'>{title}</p>
                <p className='text-[14px] opacity-70'>
                    {body}
                </p>
            
                <div 
                    className='flex my-[30px] justify-start items-center cursor-pointer rounded-full px-[15px] py-[7px] w-[140px]'
                    style={{border: "1px solid rgba(0,0,0,0.5)"}}
                    onClick={()=>{openArticle(item)}}
                >
                    <p className='text-[13px] opacity-70 mr-[10px] mr-auto'>Blog Details</p>
                    <img 
                        src="/images/openblog.jpg" alt="phone with baynt logo on it" 
                        className="w-[14px] h-[14px] mr-[4px]" 
                    />
                </div>
            </div>
        </div>
    )
}

export default BlogIntro

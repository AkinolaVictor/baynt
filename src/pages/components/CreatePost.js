import { navs } from '@/utils/public_exports'
import { generalFunctions } from '@/utils/storeControllers/generalFunctions'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import ReactModal from 'react-modal'
import { useSelector } from 'react-redux'


function CreatePost() {
    const storedData = useSelector(state=>state.generalSlice)
    const {setGeneralAlpha} = generalFunctions()
    const path = usePathname()

    function createToggle(){
      setGeneralAlpha("createPost", (val)=>{
        
        return !val
      })
    }

    function done(){
        createToggle()
    }



    return (
        <div style={{}}>
            <ReactModal
                isOpen={storedData?.createPost}
                onRequestClose={createToggle}
                contentLabel='Mobile Menu'
                style={{
                    overlay: {background: "rgba(0,0,0,0.7)"},
                    content: {
                        maxWidth: "400px",
                        margin: "auto",
                        borderRadius: "20px",
                        marginTop: "70px",
                        height: "420px",
                        display: "flex"
                    }
                }}
            >
                <div className="w-[100%] py-[20px] px-[10px] h-[auto] bg-blacks flex flex-col items-center justify-Start">
                    <p className='opacity-70 text-[12px] font-[600]'>Create Post</p>
                    <div className='flex justify-between items-center w-[100%] mt-[15px]'>
                        <div className='flex justify-center items-center'>
                            <div className='w-[25px] h-[25px] bg-[gray] rounded-full'/>
                            <p className='text-[13px] ml-[7px] font-600'>Ayomiposi Jasope</p>
                        </div>
                        <p className='text-[blue] text-[13px] cursor-pointer' onClick={createToggle}>Close</p>
                    </div>

                    <div className='py-[20px] bg-[white] rounded-[10px] w-full'>
                        <div className='flex justify-between w-full'>
                            <input 
                                type="title" 
                                name="name" 
                                value="" 
                                placeholder="Title"
                                    className="w-[100%] text-[12px] bg-[#eee] h-[40px] rounded-[10px] px-[15px]"
                                // style={{border: "1px solid rgba(41,41,41,0.7)"}}
                            />
                        </div>
                        <textarea 
                            rows="5" cols="5" 
                            className='w-full bg-[#eee] rounded-[10px] mt-[20px] p-[15px] text-[12px]'
                            placeholder='Content'
                        />
                        
                        <button onClick={done} className='w-[100%] mt-[15px] cursor-pointer p-[10px] bg-[red] rounded-[15px]'>
                            <p className='text-[12px] text-white'>Done</p>
                        </button>

                        <p className='opacity-70 text-[12px] mt-[20px] text-center'>Create and share your posts on <span className='text-[red]'>Baynt</span></p>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}

export default CreatePost

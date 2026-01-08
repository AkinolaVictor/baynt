import React, { useState } from 'react'
import Menu_Modal from '../components/Menu_Modal'
import Freetrials from '../components/Freetrials'
import ConfirmDelete from '../components/confirmDelete'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useRouter } from 'next/router'
import { generalFunctions } from '@/utils/storeControllers/generalFunctions'

function Openpost() {
    const [openModal, setOpenModal] = useState(false)
    const router = useRouter()
    const {openedPost, userData, userID} = useSelector(state=>state.generalSlice)
    // console.log({openedPost});
    const thispost = openedPost || {}
    const postID = thispost?.postID
    const creatorID = thispost?.userID
    const owner = creatorID == userID
    const [loading, setLoading] = useState(false)
    const {setGeneralAlpha} = generalFunctions()
    
    const modalToggle = () => {
        setOpenModal(!openModal)
    }


    async function deletePost() {
        if(!owner) return
        if(loading) return

        setLoading(true)

        await axios.post("/api/blog/deleteBlogPost", {userID, postID}).then((resp)=>{
            const {successful} = resp

            if(!successful) return

            setGeneralAlpha("posts", (prev)=>{
                const curr = [...prev]
                for(let i=0; i<curr.length; i++){
                    const thisPostID =  curr[i]
                    if (thisPostID === postID) curr.splice(i, 1)
                }
                return curr
            })

            router.back()
        }).catch((e)=>{
            console.log("Error while deleting");
            console.log(e);
            
        })

        setLoading(false)
    }


    if(!openedPost) return (
        <div className='w-full flex flex-col justify-center items-center'>
            <p className='py-[70px]'>No content Available</p>
            <Freetrials style={"px-[30px]"}/>
            <Menu_Modal />
        </div>
    )

    return (
        <div className='w-full'>
            <div className='w-full bg-white py-[40px] flex flex-col justify-center items-center'>
                <div className='flex justify-between items-center w-[100%] max-w-[800px] px-[10px] ml-auto mr-auto mt-[15px]'>
                    <div className='flex justify-center items-center'>
                        <div className='w-[35px] h-[35px] bg-[gray] rounded-full center'>
                            <p className='text-[15px] text-white text-600'>B</p>
                        </div>
                        <p className='text-[13px] ml-[7px] font-600'>{thispost.name}</p>
                    </div>
                    {
                        owner?
                        <>
                            {
                                loading?
                                <p className='text-[blue] text-[13px] cursor-pointer text-red-500 font-[600]'>Wait...</p>:
                                <p onClick={modalToggle} className='text-[blue] text-[13px] cursor-pointer text-red-500 font-[600]'>Delete</p>
                            }
                        </>:
                        <p className='text-[blue] text-[13px] cursor-pointer text-red-500'></p>
                    }
                </div>
                <p className='text-[16px] my-[15px] max-w-[800px] w-full px-[10px]'>{thispost.title}</p>
                
                <p className='text-[13px] opacity-70 max-w-[800px] px-[10px]'>
                    {thispost.content}
                </p>
                
                <img 
                    src={thispost.imageurl || "/images/blogpost1.jpg"} alt="phone with baynt logo on it" 
                    // src={`/images/${thispost.icon||"blogpost1"}.jpg`} alt="phone with baynt logo on it" 
                    className="w-full h-auto max-w-[800px] my-[15px]" 
                />

            </div>
            <ConfirmDelete openModal={openModal} modalToggle={modalToggle} owner={owner} userID={userID} postID={postID}/>
            <Freetrials style={"px-[30px]"}/>
            <Menu_Modal />
        </div>
    )
}

export default Openpost

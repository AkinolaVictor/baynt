import { generalFunctions } from '@/utils/storeControllers/generalFunctions'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ReactModal from 'react-modal'

function ConfirmDelete({openModal, modalToggle, owner, userID, postID}) {
    const [loading, setLoading] = useState(false)
    const {setGeneralAlpha} = generalFunctions()
    const router = useRouter()

    async function deletePost() {
        if(!owner) return
        if(loading) return

        setLoading(true)

        await axios.post("/api/blog/deleteBlogPost", {userID, postID}).then((resp)=>{
            const {successful} = resp.data

            if(!successful) return

            setGeneralAlpha("posts", (prev)=>{
                const curr = [...prev]
                for(let i=0; i<curr.length; i++){
                    const thisPostID =  curr[i].postID
                    if (thisPostID === postID) curr.splice(i, 1)
                }
                return curr
            })
            modalToggle()
            router.back()
        }).catch((e)=>{
            console.log("Error while deleting");
            console.log(e);
            
        })

        setLoading(false)
    }

    return (
        <div style={{}}>
            <ReactModal
                isOpen={openModal}
                onRequestClose={modalToggle}
                contentLabel='Mobile Menu'
                style={{
                    overlay: {background: "rgba(0,0,0,0.7)"},
                    content: {
                        maxWidth: "400px",
                        margin: "auto",
                        borderRadius: "20px",
                        marginTop: "70px",
                        height: "150px",
                        display: "flex"
                    }
                }}
            >
                
                <div className="w-[100%] h-[auto] bg-blacks flex items-center justify-center py-[20px] px-[20px] flex-col">
                    {
                        loading?
                        <p className='text-[13px]'>Deleting Post, Please wait...</p>:
                        <>
                            <p className='text-[13px]'>Are you sure you want to delete this post</p>

                            <div className='flex justify-between items-center mt-[30px]'>
                                <div onClick={deletePost} className='w-[70px] h-[30px] bg-[#eee] rounded-full center mx-[20px] cursor-pointer'>
                                    <p className='text-[13px]'>Yes</p>
                                </div>      
                                <div className='flex justify-between items-center '>
                                    
                                </div>
                                <div onClick={modalToggle} className='w-[70px] h-[30px] bg-[red] rounded-full center mx-[20px] cursor-pointer'>
                                    <p className='text-[13px] text-white'>No</p>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </ReactModal>
        </div>
    )
}

export default ConfirmDelete

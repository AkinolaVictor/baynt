import { navs } from '@/utils/public_exports'
import { generalFunctions } from '@/utils/storeControllers/generalFunctions'
import axios from 'axios'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useRef, useState } from 'react'
import ReactModal from 'react-modal'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import { storage } from '@/firebase'


function CreatePost() {
    const storedData = useSelector(state=>state.generalSlice)
    const {userData, userID} = useSelector(state=>state.generalSlice)
    const {setGeneralAlpha} = generalFunctions()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState(null)
    const image = useRef()
    // const path = usePathname()
    // console.log(uuidv4());
    
    function createToggle(){
      setGeneralAlpha("createPost", (val)=>{
        
        return !val
      })
    }

    function done(){
        createToggle()
    }


    function updateTitle(text){
        setTitle((prev)=>{
            if(text.length>=51) return prev
            return text
        })
        setError("")
    }

    function updateContent(text){
        setContent((prev)=>{
            if(text.length>=5001) return prev
            return text
        })
        setError("")
    }

    function validator(){
        if(title.length<4){
            setError("Title must be more than 3 characters")
            return true
        }

        if(content.length<11){
            setError("Content must be more than 10 characters")
            return true
        }

        return false
    }

    async function create(){
        if(loading) return
        if(validator()) return


        setLoading(true)
        const postID = uuidv4()

        const payload = {
            name: userData.name,
            postID,
            userID,
            title,
            content,
            imageUrl: "/images/blogpost4.jpg",
            date: new Date().toISOString()
        }

        await axios.post("/api/blog/createBlogPost", {...payload}).then((resp)=>{
            const {successful, message} = resp.data
            if(successful){
                setGeneralAlpha("posts", (prev)=>{
                    return [payload, ...prev]
                })
                setContent("")
                setTitle("")
                createToggle()
            } else {
                setError(message)
            }
        }).catch((e)=>{
            console.log(e)
            console.log("Error Encountered")
            setError("Error encountered while trying to create post")
        })
        setLoading(false)
    }

    // async function create(){
    //     if(loading) return
    //     if(validator()) return


    //     setLoading(true)
    //     if(!file){
    //         await createWithoutUpload()
    //     } else {
    //         await createWithUpload()
    //     }
    //     setLoading(false)
    // }

    async function selectFile(e){
        let thisFile = e.target.files[0]
        const type = e.target.files[0].type.split('/')[0]
        const fullType = e.target.files[0].type.split('/')
        const maxFileMb = 5.1
        const fileSize = e.target.files[0].size

        if(fileSize/(1024*maxFileMb)>1024){
            alert('Large file sIze: file size should be between 0MB and 5MB')
            return
        }

        if(type!=='image'){
            alert('invalid file type, please ensure to choose an image file')
            return
        }
        console.log(thisFile)
        setFile(thisFile)
    }

    async function createWithoutUpload({url}){
        const postID = uuidv4()

        const payload = {
            name: userData.name,
            postID,
            userID,
            title,
            content,
            imageUrl: url||"/images/blogpost4.jpg",
            date: new Date().toISOString()
        }

        await axios.post("/api/blog/createBlogPost", {...payload}).then((resp)=>{
            const {successful, message} = resp.data
            if(successful){
                setGeneralAlpha("posts", (prev)=>{
                    return [payload, ...prev]
                })
                setContent("")
                setTitle("")
                createToggle()
            } else {
                setError(message)
            }
        }).catch((e)=>{
            console.log(e)
            console.log("Error Encountered")
            setError("Error encountered while trying to create post")
        })
    }

    async function createWithUpload(){
        // let file = "working on it"
        console.log("called uploaded");
        const imageFileRef = ref(storage, `images/${userID}`) 
        await uploadBytes(imageFileRef, file).then(async(snapshot)=>{
            console.log("uploaded");
            await getDownloadURL(snapshot.ref).then(async(url)=>{
                console.log("got url");
                // await createWithoutUpload({url})
            })
        }).catch((e)=>{
            console.log(e);
            console.log("Unable to upload");
            setError("Error encountered while trying to upload photo")
        })

        setLoading(false)
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
                        height: "490px",
                        display: "flex"
                    }
                }}
            >
                <div className="w-[100%] py-[20px] px-[10px] h-[auto] bg-blacks flex flex-col items-center justify-Start">
                    <p className='opacity-70 text-[12px] font-[600]'>Create Post</p>
                    <div className='flex justify-between items-center w-[100%] mt-[15px]'>
                        <div className='flex justify-center items-center'>
                            <div className='w-[25px] h-[25px] bg-[gray] rounded-full'/>
                            <p className='text-[13px] ml-[7px] font-600'>{userData?.name || "Error"}</p>
                        </div>
                        <p className='text-[blue] text-[13px] cursor-pointer' onClick={createToggle}>Close</p>
                    </div>

                    <div className='py-[20px] bg-[white] rounded-[10px] w-full'>
                        <div className='flex justify-between w-full'>
                            <input 
                                type="title" 
                                name="name" 
                                value={title}
                                onChange={(e)=>updateTitle(e.target.value)}
                                placeholder="Title"
                                    className="w-[100%] text-[12px] bg-[#eee] h-[40px] rounded-[10px] px-[15px]"
                                // style={{border: "1px solid rgba(41,41,41,0.7)"}}
                            />
                        </div>
                        {title.length>0 && <p className='text-[12px] mt-[10px] w-full text-right text-[rosybrown] font-[600]'>{50 - title.length}</p>}
                        
                        <textarea 
                            rows="5" cols="5" 
                            value={content}
                            onChange={(e)=>{updateContent(e.target.value)}}
                            className='w-full bg-[#eee] rounded-[10px] mt-[20px] p-[15px] text-[12px]'
                            placeholder='Content'
                        />
                        {content.length>0 && <p className='text-[12px] mt-[10px] w-full text-right text-[rosybrown] font-[600]'>{5000 - content.length}</p>}
                        
                        <p className='text-[12px] mt-[10px] w-full text-center font-[600] text-[rosybrown]'>{error}</p>
                        {/* <button onClick={()=>{image.current.click()}} className='w-[100%] my-[10px] cursor-pointer p-[10px] bg-[gray] rounded-[15px]'>
                            <p className='text-[12px] text-white'>Add Image</p>
                        </button> */}
                        <button onClick={create} className='w-[100%] mt-[5px] cursor-pointer p-[10px] bg-[red] rounded-[15px]'>
                            {
                                loading?
                                <p className='text-[12px] text-white'>Creating...</p>:
                                <p className='text-[12px] text-white'>Done</p>
                            }
                        </button>

                        <p className='opacity-70 text-[12px] mt-[20px] text-center'>Create and share your posts on <span className='text-[red]'>Baynt</span></p>
                        <input ref={image} onChange={selectFile} type="file" accept='.jpg, .png, .gif' multiple={false} style={{display: 'none'}}/>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}

export default CreatePost

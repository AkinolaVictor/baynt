import { logOut } from '@/utils/dbFunction'
import { navs } from '@/utils/public_exports'
import { generalFunctions } from '@/utils/storeControllers/generalFunctions'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'
import ReactModal from 'react-modal'
import { useSelector } from 'react-redux'

function Menu_Modal() {
    const storedData = useSelector(state=>state.generalSlice)
    const {userID, userData} = useSelector(state=>state.generalSlice)
    const userActive = userID && userData
    const {setGeneralAlpha} = generalFunctions()
    const path = usePathname()
    const router = useRouter();

    function modalToggle(){
      setGeneralAlpha("modal", (val)=>{
        return !val
      })
    }

    function decideblog(item){
        if (item.title==="Blog"){
            return path.includes("blog")
        } else {
            return path===item.href
        }
    }
    
    return (
        // <div style={{width:"100%", height: "100%"}}>
        <div style={{}}>
            <ReactModal
                isOpen={storedData?.modal}
                onRequestClose={modalToggle}
                contentLabel='Mobile Menu'
                style={{
                    overlay: {background: "rgba(0,0,0,0.7)"},
                    content: {
                        maxWidth: "400px",
                        margin: "auto",
                        borderRadius: "20px",
                        marginTop: "70px",
                        height: "350px",
                        display: "flex"
                    }
                }}
            >
                <div className="w-[100%] h-[auto] bg-blacks flex flex-col items-center justify-center">
                    {
                        navs.map((item, index)=>{
                            return (
                                <Link key={index} href={item.href} onClick={modalToggle} style={{height: "auto"}}>
                                    <div style={{padding: "15px 10px", cursor: "pointer", position: "relative", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <p style={{fontSize: "13px", fontWeight: path===item.href?"600":400}}>{item.title}</p>
                                        <div style={{width: "100%", height: "2px", position: "absolute", bottom: "0px", borderRadius: "40px", backgroundColor: decideblog(item)&&"#414141"}}></div>
                                    </div>
                                </Link>
                            )
                        })
                    }

                    <div className='flex justify-between items-center w-[90%] rounded-full '>
                        {
                            userActive?
                            <div onClick={()=>{logOut({router, setGeneralAlpha}); modalToggle()}} className='w-auto h-auto px-[25px] ml-auto mr-auto mt-[10px] py-[6px] rounded-full cursor-pointer text-[12px] text-center' style={{background: "rgb(200, 179, 179)"}}>
                                Sign Out
                            </div>:
                            <>
                                <Link href={"/signin"} onClick={modalToggle} className='w-auto h-auto px-[25px] py-[6px] rounded-full cursor-pointer text-[12px] text-center' style={{background: "rgb(200, 179, 179)"}}>
                                    Sign In
                                </Link>

                                <Link href={"/signup"} onClick={modalToggle} className='w-auto h-auto px-[25px] py-[6px] rounded-full cursor-pointer text-[12px] text-center' style={{background: "rgb(200, 179, 179)"}}>
                                    Sign Up
                                </Link>
                            </>
                        }
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}

export default Menu_Modal

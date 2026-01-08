import { auth } from '@/firebase'
import { logOut } from '@/utils/dbFunction'
import { navs } from '@/utils/public_exports'
import { generalFunctions } from '@/utils/storeControllers/generalFunctions'
import axios from 'axios'
import { onAuthStateChanged } from 'firebase/auth'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const path = usePathname()
    const router = useRouter();
    const storedData = useSelector(state=>state.generalSlice)
    const {userID, userData} = useSelector(state=>state.generalSlice)
    const userActive = userID && userData
    const {setGeneralAlpha} = generalFunctions()

    function openModal(){
        setGeneralAlpha("modal", (val)=>{
          return !val
        })
    }
    // console.log({userActive, userData, userID});
    
    function decideblog(item){
        if (item.title==="Blog"){
            return path.includes("blog")
        } else {
            return path===item.href
        }
    }
    // let fi = [1,2,3,4,5,6,7,8]
    // console.log(fi);
    // for(let i=0; i<fi.length; i++){
    //     const curr = fi[i]
    //     if(curr == 2){
    //         fi.splice(i, 1)
    //     }
    // }
    // console.log(fi);
    
    async function getUserDetails(userID) {
        // setGeneralAlpha("userData", {})

        const getUserID = localStorage.getItem("userID")
        if(getUserID) setGeneralAlpha("userID", getUserID)
        const id = userID || getUserID
        if(!id) return
    
        await axios.post("/api/user/getUserData", {userID: id}).then((result)=>{
            const {successful, user} = result.data
            // console.log({user})
            if(successful) {
                setGeneralAlpha("userData", {...user})
                const userD = JSON.stringify(user)
                localStorage.setItem("userData", userD)
            }
        }).catch((e)=>{
            console.log(e);
            console.log("Error");
        })
    }

    function authListener(){
        onAuthStateChanged(auth, async(userz)=>{
            if(userz){
                await getUserDetails(userz.uid)
                setGeneralAlpha("userID", userz.uid)
                localStorage.setItem("userID", userz.uid)
            } else {
                setGeneralAlpha("userID", null)
                setGeneralAlpha("userData", null)
            }
        })
    }

    function restoreAuth(){
        const getUserID = localStorage.getItem("userID")
        const getUserData = localStorage.getItem("userData")

        if(!getUserID) return
        if(!getUserData) return

        setGeneralAlpha("userID", getUserID)

        const convertUserData = JSON.parse(getUserData)
        setGeneralAlpha("userData", {...convertUserData})
    }

    useEffect(()=>{
        authListener()
    }, [])

    useEffect(()=>{
        restoreAuth()
        getUserDetails()
    }, [])

    return (
        <div
            // onClick={()=>getUserDetails()}
            className='w-[95%] text-[black] h-[66px] rounded-[100px] bg-[white] ml-auto mr-auto sticky z-[2] top-[20px] flex justify-center items-center py-0 px-[6px] '
        >
            <div 
                className='w-[100%] text-[black] h-[54px] rounded-[100px] bg-[white] ml-auto mr-auto sticky z-[2] top-[20px] flex justify-center items-center py-0 px-[20px] '
                style={{
                    border: "1px solid rgba(41,41,41,0.10)"
                }}
            >
                <Link href={"/"} className='h-[100%] flex justify-center items-center'>
                    <div style={{ position: "absolute", left: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div style={{width: "20px", height: "20px", borderRadius: "50px", display: "flex", justifyContent: "center", alignItems: "center", marginRight: "7px"}}>
                            <img src="/images/logo.jpg" alt="baynt logo" />
                        </div>
                        <p style={{fontSize: "17px",}}>Baynt</p>
                    </div>
                </Link>

                <div 
                    className='w-auto h-[100%] bk5:flex hidden justify-center items-center ml-auto mr-auto'
                    // style={{width: "auto", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "auto", marginRight: "auto"}}
                >
                    {
                        navs.map((item, index)=>{
                            return (
                                <Link key={index} href={item.href} style={{height: "100%"}}>
                                    <div style={{padding: "0px 10px", cursor: "pointer", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
                                        <p style={{fontSize: "13px"}}>{item.title}</p>
                                        <div style={{width: "100%", height: "4px", position: "absolute", bottom: "0px", borderRadius: "40px", backgroundColor: decideblog(item)&&"#414141"}}></div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>

                <div 
                    className='w-[auto] h-[100%] bk5:flex hidden justify-center items-center absolute right-[20px]'
                    // style={{width: "auto", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", right: "20px"}}
                >
                    {
                        userActive?
                        <div onClick={()=>{logOut({router, setGeneralAlpha})}} className='w-auto h-[30px] text-[12px] font-[500] text-[rgba(41,41,41,1)] cursor-pointer py-0 px-[15px] mr-[10px] rounded-[25px] flex justify-center items-center' style={{border: "1px solid rgba(41,41,41,0.13)"}}>
                            Sign Out
                        </div>:
                        <>
                            <Link href={"/signin"} className='w-auto h-[30px] text-[12px] font-[500] text-[rgba(41,41,41,1)] cursor-pointer py-0 px-[15px] mr-[10px] rounded-[25px] flex justify-center items-center' style={{border: "1px solid rgba(41,41,41,0.13)"}}>
                                Sign In
                            </Link>

                            <Link href={"/signup"} className='w-auto h-[30px] text-[12px] font-[500] text-[rgba(41,41,41,1)] cursor-pointer py-0 px-[15px] rounded-[25px] flex justify-center items-center' style={{border: "1px solid rgba(41,41,41,0.13)"}}>
                                Sign Up
                            </Link>
                        </>

                    }
                </div>
                <div
                    className='w-[auto] h-[100%] flex bk5:hidden cursor-pointer justify-center items-center absolute right-[20px]'
                    onClick={openModal}
                >
                    <div 
                        className='w-[40px] h-[40px] rounded-full flex justify-center items-center'
                    >
                        {
                            storedData?.modal?
                            <p className='text-[30px] text-[rgba(0,0,0,0.5)]'>X</p>:
                            <img src="/menu1.svg" alt="menu" className='' />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

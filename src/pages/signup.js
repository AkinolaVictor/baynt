import React, { useState } from 'react'
import Freetrials from './components/Freetrials'
import Menu_Modal from './components/Menu_Modal'
import Link from 'next/link'
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"
import { auth } from '@/firebase'
import { useRouter } from 'next/router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import axios from 'axios'
import { generalFunctions } from '@/utils/storeControllers/generalFunctions'


function Signup() {
    const router = useRouter();
    const [createUser] = useCreateUserWithEmailAndPassword(auth)
    const [errMsg, setErrMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const {setGeneralAlpha} = generalFunctions()
    const [password2, setPassword2] = useState("")
    const [payload, setPayload] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    })

    const validation = ()=> {
        if(payload.name.length<3){
            setErrMsg("Name should be more than 2 characters")
            return true
        }

        if(
            payload.email.length<=5 || 
            !payload.email.includes("@") || 
            payload.email.includes(" ") || 
            !payload.email.includes(".")
        ){
            setErrMsg("Please ensure to input a valid email address")
            return true
        }
        
        if(payload.password.length<8){
            setErrMsg("Password should be more than 6 characters")
            return true
        }
        
        if(payload.password !== payload.password2){
            setErrMsg("Password do not match")
            return true
        }

        return false
    }

    function handleChange(key, value){
        setErrMsg("")
        setPayload((prev)=>{
            const curr = {...prev}
            curr[key] = value
            return curr
        })
    }

    const submit = async () => {
        if(loading) return
        if(validation()) return

        setErrMsg("")
        setLoading(true)
        const {email, password, name} = payload

        // await createUserWithEmailAndPassword(auth, payload.email, payload.password).then((res)=>{
        await axios.post("/api/user/createAccount", {email, password, name}).then((result)=>{
            const {message, successful, userID, userData} = result.data
            if(successful){
                console.log(userID);
                // console.log("account created");

                const userD = JSON.stringify(userData)
                localStorage.setItem("userData", userD)
                localStorage.setItem("userID", userID)

                setGeneralAlpha("userData", {...userData})
                setGeneralAlpha("userID", userID)

                router.push("/blog")
            } else {
                setErrMsg(message)
            }
        }).catch((err)=>{
            // console.log("signup error");
            // console.log(err.code);
        })
        setLoading(false)
    }
    
    return (
        <div className='w- py-[0px]'>
            <div className='w-full flex justify-center items-center bg-white flex-wrap'>
                <div className={`w-full max-w-[400px] py-[20px] px-[20px] flex flex-col justify-start items-start bk7:ml-[70px]`}>
                    <p className='text-[brown] text-[12px] mt-[30px]'>Sign Up</p>
                    <p className='text-[30px] my-[20px]'>Get Started!</p>

                    <div className='w-full'>
                        <input 
                            type="name" 
                            name="name" 
                            placeholder="Name"
                            value={payload.name}
                            onChange={(e)=>{handleChange("name", e.target.value)}}
                            className="w-full text-[12px] bg-[#eee] h-[45px] rounded-full px-[15px] mb-[20px]"
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            value={payload.email}
                            onChange={(e)=>{handleChange("email", e.target.value)}}
                            className="w-full text-[12px] bg-[#eee] h-[45px] rounded-full px-[15px] mb-[20px]"
                        />
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            value={payload.password}
                            onChange={(e)=>{handleChange("password", e.target.value)}}
                            className="w-full text-[12px] bg-[#eee] h-[45px] rounded-full px-[15px] mb-[20px]"
                        />
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Confirm Password"
                            value={payload.password2}
                            onChange={(e)=>{handleChange("password2", e.target.value)}}
                            className="w-full text-[12px] bg-[#eee] h-[45px] rounded-full px-[15px] mb-[20px]"
                        />
                        <p className="text-center text-[12px] text-[rosybrown]">{errMsg}</p>
                        <button onClick={submit} className='w-[100%] mt-[15px] cursor-pointer p-[12px] bg-red-500 rounded-full'>
                            {
                                loading?
                                <p className='text-[12px] text-white'>Loading...</p>:
                                <p className='text-[12px] text-white'>Sign Up</p>
                            }
                        </button>
                    </div>

                    {/* <div className='w-full flex justify-between items-center my-[40px]'>
                        <div className='w-[45%] h-[1px] bg-[rosybrown] opacity-30'/>
                        <p className='mx-[20px] opacity-50 text-[12px]'>or</p>
                        <div className='w-[45%] h-[1px] bg-[rosybrown] opacity-30'/>
                    </div>

                    <div className='bg-[#eee] w-full py-[10px] rounded-full flex justify-center items-center cursor-pointer mb-[20px]'>
                        <img 
                            src="/images/googleicon.jpg" alt="phone with baynt logo on it" 
                            className="w-[25px] h-[25px] mr-[15px] rounded-full" 
                        />

                        <p className='text-[14px]'>Continue with Google</p>
                    </div>

                    <div className='bg-[#eee] w-full py-[10px] rounded-full flex justify-center items-center cursor-pointer'>
                        <img 
                            src="/images/twittericon.jpg" alt="phone with baynt logo on it" 
                            className="w-[25px] h-[25px] mr-[15px] rounded-full" 
                        />

                        <p className='text-[14px]'>Continue with Twitter</p>
                    </div> */}
                    
                    <p className='text-[12px] my-[40px]'>Already have an account? <Link href={"/signin"} className='text-[red] cursor-pointer'>Sign In</Link></p>
                </div>

                <div className='bk2:ml-auto'>
                    <img 
                        src="/images/signupbanner.jpg" alt="phone with baynt logo on it" 
                        className="w-[100%] h-auto mr-[0px] " 
                    />
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <Freetrials style={"w-full max-w-[1100px] px-[10px]"}/>
            </div>

            <Menu_Modal />
        </div>
    )
}

export default Signup

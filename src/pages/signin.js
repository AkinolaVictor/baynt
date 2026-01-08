import React, {useState} from 'react'
import Freetrials from './components/Freetrials'
import Menu_Modal from './components/Menu_Modal'
import Link from 'next/link'
// import {signIn} from "next-auth/client"
import {signIn, useSession} from "next-auth/react"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'
import { useRouter } from 'next/router'


function Signin() {
    // const {data} = useSession()
    const router = useRouter();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState("")
    

    // const halfInnerWidth = (window.innerWidth||1000)/2
    // console.log({halfInnerWidth});
    const signInGoogle = async () => {
        try {
            const data = await signIn("google", {
                
            })
            console.log(data);
            
        } catch (err) {
            console.log("encountered some error");
            console.log(err);
        } finally {
            console.log("Completed");
        }
    }

    async function submit(){
        setLoading(true)
        await signInWithEmailAndPassword(auth, email, password)
        .then(async(result)=>{
            router.push("/blog")
            const {uid} = result.user
        }).catch((err)=>{
            console.log("error encountered");
            console.log(err);

            if(err.code === 'auth/invalid-email') setErrMsg('incorrect username or password')
            else if(err.code === 'auth/invalid-password') setErrMsg('incorrect username or password')
            else if(err.code === 'auth/wrong-password') setErrMsg('incorrect username or password')
            else if(err.code === 'auth/network-request-failed') setErrMsg('Kindly check your network, there seem to be a network problem')
            else if(err.code === 'auth/user-not-found') setErrMsg('Sorry, you have no account, sign up to create a new account')
            else return setErrMsg(`An error was encountered ${err.code}`)
        })
        setLoading(false)
    }

    return (
        <div className='w- py-[0px]'>
            <div className='w-full flex justify-center items-center bg-white flex-wrap'>
                <div className={`w-full max-w-[400px] py-[20px] px-[20px] flex flex-col justify-start items-start bk7:ml-[70px]`}>
                    <p className='text-[brown] text-[12px] mt-[30px]'>Login</p>
                    <p className='text-[30px] my-[20px]'>Welcome to Baynt!</p>
                    {/* <div onClick={signInGoogle} className='bg-[#eee] w-full py-[10px] rounded-full flex justify-center items-center cursor-pointer mb-[20px]'>
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
                    </div>

                    <div className='w-full flex justify-between items-center my-[40px]'>
                        <div className='w-[45%] h-[1px] bg-[rosybrown] opacity-30'/>
                        <p className='mx-[20px] opacity-50 text-[12px]'>or</p>
                        <div className='w-[45%] h-[1px] bg-[rosybrown] opacity-30'/>
                    </div> */}

                    <div className='w-full'>
                        <input 
                            type="email" 
                            name="email" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Email Address"
                            className="w-full text-[12px] bg-[#eee] h-[45px] rounded-full px-[15px] mb-[20px]"
                        />
                        <input 
                            type="password" 
                            name="password" 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full text-[12px] bg-[#eee] h-[45px] rounded-full px-[15px] mb-[20px]"
                        />
                        <p className="text-center text-[12px] text-[rosybrown]">{errMsg}</p>
                        <button onClick={submit} className='w-[100%] mt-[15px] cursor-pointer p-[12px] bg-red-500 rounded-full'>
                            {
                                loading?
                                <p className='text-[12px] text-white'>Loading...</p>:
                                <p className='text-[12px] text-white'>Login</p>
                            }
                        </button>

                        <p className='text-[12px] mt-[70px]'>Don't have an account? <Link href={"/signup"}  className='text-[red] cursor-pointer'>Register</Link></p>
                    </div>
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

export default Signin

import React from 'react'
import Freetrials from './components/Freetrials'
import Menu_Modal from './components/Menu_Modal'
import Link from 'next/link'

function Signup() {
    return (
        <div className='w- py-[0px]'>
            <div className='w-full flex justify-center items-center bg-white flex-wrap'>
                <div className={`w-full max-w-[400px] py-[20px] px-[20px] flex flex-col justify-start items-start bk7:ml-[70px]`}>
                    <p className='text-[brown] text-[12px] mt-[30px]'>Sign Up</p>
                    <p className='text-[30px] my-[20px]'>Get Started!</p>

                    <div className='w-full'>
                        <input 
                            type="email" 
                            name="email" 
                            value="" 
                            placeholder="Email Address"
                            className="w-full text-[12px] bg-[#eee] h-[45px] rounded-full px-[15px] mb-[20px]"
                        />
                        <input 
                            type="password" 
                            name="password" 
                            value="" 
                            placeholder="Password"
                            className="w-full text-[12px] bg-[#eee] h-[45px] rounded-full px-[15px] mb-[20px]"
                        />
                        <button className='w-[100%] mt-[15px] cursor-pointer p-[12px] bg-red-500 rounded-full'>
                            <p className='text-[12px] text-white'>Login</p>
                        </button>
                    </div>

                    <div className='w-full flex justify-between items-center my-[40px]'>
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
                    </div>
                    
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

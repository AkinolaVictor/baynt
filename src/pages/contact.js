import React from 'react'
import Menu_Modal from './components/Menu_Modal'
import Customer_Report from './components/Customer_Report'
import FAQs from './components/FAQs'
import Freetrials from './components/Freetrials'

function Contact() {
    return (
        <div className={`relative w-full py-[20px] px-[0px] flex justify-center flex-col items-center m-0`}>
            <div className='flex flex-wrap w-full max-w-[900px] justify-center items-center mb-[30px] px-[10px]'>
                <div className='w-full  mx-[10px] max-w-[350px]'>
                    <p className='text-[brown] text-[12px] mt-[30px]'>Baynt Contact</p>
                    <p className='text-[30px] my-[20px]'>Contact Sales</p>
                    <p className='text-[13px] opacity-70'>Baynt is more than just a SaaS and technology software - it's a complete digital transformation solution</p>
                    
                    <p className='opacity-70 text-[12px] mt-[30px]'>How can we help:</p>

                    <div className='flex items-center mt-[10px]'>
                        <img src="/images/dev.jpg" alt="phone with baynt logo on it" 
                            className="w-[15px] h-[15px] mr-[10px]" />
                        <p className='text-[12px] opacity-70'>24/7 support via (358) 50 123 4567</p>
                    </div>
                    <div className='flex items-center mt-[10px]'>
                        <img src="/images/dev.jpg" alt="phone with baynt logo on it" 
                            className="w-[15px] h-[15px] mr-[10px]" />
                        <p className='text-[12px] opacity-70'>Message us via mail: support@baynt.com</p>
                    </div>
                    <div className='flex items-center mt-[10px]'>
                        <img src="/images/dev.jpg" alt="phone with baynt logo on it" 
                            className="w-[15px] h-[15px] mr-[10px]" />
                        <p className='text-[12px] opacity-70'>Innovatio 12B, Heisinki, Finland, 00100</p>
                    </div>

                    <div className='flex my-[30px] justify-start items-center'>
                        <img 
                            src="/images/ceoIcon.jpg" alt="phone with baynt logo on it" 
                            className="w-[50px] h-[50px] mr-[10px]" 
                        />

                        <div>
                            <p className='text-[12px] opacity-70'>Fig Nelson</p>
                            <p className='text-[12px] opacity-70'>CEO & Founder of Flexyl</p>
                        </div>
                    </div>
                    <p className='text-[12px] opacity-70 '>
                        Baynt has truly transformed our online presence. With its powerful analytics and seamless integration, 
                        we've gained valuable insights and improved our SEO ranking, resulting in significant business growth.
                    </p>
                    <img 
                        src="/images/flexylLogo.jpg" alt="phone with baynt logo on it" 
                        className="mt-[30px]" 
                    />
                </div>

                <div 
                    className='rounded-[10px] p-3px w-full max-w-[350px] mx-[10px] mt-[30px] bk5:mt-0 bk5:ml-auto'
                    style={{border: "1px solid rgba(41,41,41,0.10)"}}
                >
                    <div className='p-[20px] bg-[white] rounded-[10px] w-full'>
                        <div className='flex justify-between w-full'>
                            <input 
                                type="name" 
                                name="name" 
                                value="" 
                                placeholder="Name"
                                    className="w-[45%] text-[12px] bg-[#eee] h-[40px] rounded-[10px] px-[15px]"
                                // style={{border: "1px solid rgba(41,41,41,0.7)"}}
                            />
                            <input 
                                type="email" 
                                name="email" 
                                value="" 
                                placeholder="Email"
                                    className="w-[45%] text-[12px] bg-[#eee] h-[40px] rounded-[10px] px-[15px]"
                                // style={{border: "1px solid rgba(41,41,41,0.7)"}}
                            />
                        </div>
                        <textarea 
                            rows="5" cols="5" 
                            className='w-full bg-[#eee] rounded-[10px] mt-[20px] p-[15px] text-[12px]'
                            placeholder='Message'
                        />
                        
                        <button className='w-[100%] mt-[15px] cursor-pointer p-[10px] bg-[red] rounded-[15px]'>
                            <p className='text-[12px] text-white'>Send</p>
                        </button>

                        <p className='opacity-70 text-[12px] mt-[20px]'><span className='text-[red]'>Baynt,</span> a software, accessible online with scalability and automatic updates.</p>
                    </div>
                </div>
            </div>

            <div className='w-full bg-white p-[50px] flex justify-center items-center flex-wrap'>
                <div className='w-[300px] h-[200px] rounded-[10px] bg-[#eee] m-[10px] flex justify-center items-center'>
                    <div className='flex justify-center flex-col items-center'>
                        <img 
                            src="/images/msgicon.jpg" alt="phone with baynt logo on it" 
                            className="w-[50px] h-[50px] mr-[10px] rounded-full" 
                        />

                        <p className='text-[16px] mt-[16px]'>Message Us</p>
                        <p className='text-[12px] opacity-70 mt-[5px]'>Support@baynt.com</p>
                    </div>
                </div>
                <div className='w-[300px] h-[200px] rounded-[10px] bg-[#eee] m-[10px] flex justify-center items-center'>
                    <div className='flex justify-center flex-col items-center'>
                        <img 
                            src="/images/callus.jpg" alt="phone with baynt logo on it" 
                            className="w-[50px] h-[50px] mr-[10px] rounded-full" 
                        />

                        <p className='text-[16px] mt-[16px]'>Call Us!</p>
                        <p className='text-[12px] opacity-70 mt-[5px]'>(358) 50 123 4567</p>
                    </div>
                </div>
                <div className='w-[300px] h-[200px] rounded-[10px] bg-[#eee] m-[10px] flex justify-center items-center'>
                    <div className='flex justify-center flex-col items-center'>
                        <img 
                            src="/images/address.jpg" alt="phone with baynt logo on it" 
                            className="w-[50px] h-[50px] mr-[10px] rounded-full" 
                        />

                        <p className='text-[16px] mt-[16px]'>Address</p>
                        <p className='text-[12px] opacity-70 mt-[5px]'>Innovatio 12B, Heisinki, Finland, 00100</p>
                    </div>
                </div>
            </div>

            <Customer_Report />
            <FAQs style={"bg-white mt-[0px]"}/>
            <Freetrials />

            <Menu_Modal />
        </div>
    )
}

export default Contact

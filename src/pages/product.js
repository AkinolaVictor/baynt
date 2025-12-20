import React from 'react'
import Menu_Modal from './components/Menu_Modal'
import Subscribe from './components/Subscribe'
import EachStory from './components/EachStory'

function Product() {
    return (
        <div
            // className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
            className={`relative w-100vw] p-0 m-0`}
            style={{padding: "20px 0px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center",}}
        >
            <div className='flex justify-center flex-col items-center'>
                <p className='mb-[15px]' style={{color: "brown", marginTop: "20px", fontSize: "12px"}}> Product Page</p>
                <p className="text-[23px] bs:text-[30px] bk:text-[40px] px-[10px]" style={{}}>This product will continue</p>
                <p className="text-[23px] bs:text-[30px] bk:text-[40px] px-[10px]" style={{}}>to evolve <span className="" style={{padding: "5px 20px", borderRadius: "60px", border: "2px solid #FF9689", color: "white", backgroundColor: "#A44A3F"}}>with you</span></p>
                
                <p className='px-[10px]' style={{maxWidth: "400px", textAlign: "center", lineHeight: "25px", fontSize: "15px", marginTop: "20px", opacity: "0.7"}}>
                    Embrace the future of technology with Baynt.
                </p>
                
                <p className='px-[10px]' style={{maxWidth: "400px", textAlign: "center", lineHeight: "25px", fontSize: "15px", marginTop: "0px", opacity: "0.7"}}>
                    Our innovative Saas template empowers business.
                </p>
            </div>

            <div
                className="flex flex-col justify-center items-center bk2:flex-row block mt-[25px] "
            >
                <div 
                    style={{border: "1px solid rgba(41,41,41,0.10)"}}
                    className='p-[10px] rounded-[10px] m-[10px]'
                >
                    <img 
                        src="/images/beautiful_design.jpg" 
                        alt="phone with baynt logo on it" 
                        className="w-full h-[auto] max-w-[420px] max-h-[368px]"
                    />
                </div>

                <div 
                    style={{border: "1px solid rgba(41,41,41,0.10)"}}
                    className='p-[10px] rounded-[10px] m-[10px] bg-[white]'
                >
                    <img 
                        src="/images/design_support.jpg" 
                        alt="phone with baynt logo on it" 
                        className="w-full h-[auto] h-[auto] max-w-[658px] max-h-[368px]"
                    />
                </div>
            </div>

            <div className="mt-[20px] bg-white w-full py-[100px]">
                <p className="text-center font-medium bk:text-[25px] text-[17px] mb-12 px-[10px]" >The world's best companies trust Baynt.</p>
                <div className="flex bk4:flex-row flex-col justify-center items-center">
                    <img src="/images/logos_1.jpg" alt="logo pac 1" className="mr-12 ml-[60px] w-[300px] bk:w-auto"/>
                    <img src="/images/logos_2.jpg" alt="logo pac 1" className="w-[300px] bk:w-auto" />
                </div>
            </div>

            <div className='flex justify-center flex-col items-center px-[10px]'>
                <p className='mb-[15px]' style={{color: "brown", marginTop: "50px", fontSize: "12px"}}>Our Product</p>
                <p className="text-[23px] bs:text-[30px] bk:text-[40px] px-[10px]" style={{}}>Communicate the story</p>

                <div className='flex flex-wrap justify-center items-center mt-[40px]'>
                    {/* <img src="/images/improved_seo.jpg" alt="logo pac 1" className="w-full h-[auto] max-w-[400px] bk7:max-w-[460px] max-h-[300px] bk7:max-h-[340px] p-[15px]"/>
                    <img src="/images/design_support_2.jpg" alt="logo pac 1" className="w-full h-[auto] max-w-[400px] bk7:max-w-[460px] max-h-[300px] bk7:max-h-[340px] p-[15px]"/>
                    <img src="/images/attachment.jpg" alt="logo pac 1" className="w-full h-[auto] max-w-[400px] bk7:max-w-[460px] max-h-[300px] bk7:max-h-[340px] p-[15px]"/>
                    <img src="/images/privacy_and_news.jpg" alt="logo pac 1" className="w-full h-[auto] max-w-[400px] bk7:max-w-[460px] max-h-[300px] bk7:max-h-[340px] p-[15px]"/> */}
                    


                    <EachStory 
                        icon={"story1"}
                        title={"Improved SEO"}
                        detail={`
                            Embrace the future of technology with Baynt. Our innivative SaaS solution empowers businesses to stay ahead.
                        `}
                    />

                    <EachStory 
                        icon={"story2"}
                        title={"Design Support"}
                        detail={`
                            Gain a competitive edge with our SEO optimization tools, ensuring your website ranks higher.
                        `}
                    />

                    <EachStory 
                        icon={"story3"}
                        title={"Attachments"}
                        detail={`
                            Baynt puts you in control, allowing you to monitor performance, measure success and adapt your strategy in real-time.
                        `}
                    />

                    <EachStory 
                        icon={"story4"}
                        title={"Privacy & News"}
                        detail={`
                            Unlock the power of analytics and gain actionable insights to make informed business decisions.
                        `}
                    />
                </div>
            </div>

            <div className='w-full bg-white flex justify-center items-center'>
                <Subscribe style={`w-full bg-white p-[40px] max-w-[1200px]`}/>
            </div>

            {/* ENSURE TO CONFIRM THIS SECTION */}
            <div className="mt-[0px] bg-white py-[50px] px-[10px] w-full ">
                <div className="max-w-[1000px] ml-auto mr-auto">
                    <p className="text-red-500 text-[14px] text-center bk2:text-start">Core Product Features</p>
                    <p className="bk:text-[35px] text-center bk2:text-start text-[28px] bk2:w-[400px] leading-[40px] mt-[20px]">Build a solution that wins you more customers.</p>
                    <div className="flex bk3:justify-between justify-center flex-wrap">

                        {/* <div className="w-auto bs:w-[450px] flex bs:justify-between justify-center items-start flex-wrap bk2:mr-[140px]"> */}
                        <div className="bk:w-[450px] flex bk:justify-between justify-center items-start flex-wrap bk2:mr-[140px]">
                            <div className="mt-[20px]">
                                <img 
                                    src="/images/feature4.jpg" 
                                    alt="faster icon" 
                                    className="ml-[-5px]"
                                />
                                <p className="my-[10px]">Deploy faster together</p>
                                <p className="text-[#414141] opacity-70 text-[13px] w-[200px]">Cutting-Edge Technology - Stay Ahead of the Curve</p>
                            </div>

                            <div className="mt-[20px]">
                                <img 
                                    src="/images/feature5.jpg" 
                                    alt="faster icon" 
                                    className="ml-[-5px]"
                                />
                                <p className="my-[10px]">Beautiful No-code</p>
                                <p className="text-[#414141] opacity-70 text-[13px] w-[200px]">SEO Optimization - Dominate Search Ranking</p>
                            </div>

                            <div className="mt-[20px]">
                                <img 
                                    src="/images/feature6.jpg" 
                                    alt="faster icon" 
                                    className="ml-[-5px]"
                                />
                                <p className="my-[10px]">Good Communication</p>
                                <p className="text-[#414141] opacity-70 text-[13px] w-[200px]">Intuitive Dashboard - Control at Your Fingertips</p>
                            </div>

                            <div className="mt-[20px]">
                                <img 
                                    src="/images/feature7.jpg" 
                                    alt="faster icon" 
                                    className="ml-[-5px]"
                                />
                                <p className="my-[10px]">Easily Customized</p>
                                <p className="text-[#414141] opacity-70 text-[13px] w-[200px]">Real-Time Visibility - Mentor Performance Instantly</p>
                            </div>
                        </div>

                        <div>
                            <img src="/images/feature9.jpg" alt="baynt logos in box" className='mt-[40px]'/>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bk2:mt-[220px] mt-[100px] bk2:flex block justify-between mx-auto bk2:mx-0">

                <div className="text-center bk2:text-start">
                    <p className="text-red-500 text-[14px]">Start building today!</p>
                    <p className="text-[30px] leading-[40px] mt-[20px]">Start your 7-day free trial</p>
                    <p className="bk2:w-[450px] text-[13px] text-[#414141] opacity-70 mt-[20px]">
                        Experience the Baynt difference ad unlock the true potential
                    </p>
                </div>

                <div className="flex flex-col bk2:flex-row bk2:mt-0 mt-[20px] bk2:justify-start justify-center items-center mx-auto bk2:mx-0">
                    <input 
                        type="email" 
                        name="subscribe" 
                        value="" 
                        placeholder="name@email.com"
                        className="bg-white w-[300px] h-[40px] rounded-full px-[15px] mx-auto bk2:mx-0"
                        style={{border: "1px solid rgba(41,41,41,0.7)"}}
                    />
                    <div className="bg-red-500 cursor-pointer flex justify-center items-center w-[200px] h-[40px] bk2:ml-[15px] mx-auto bk2:mx-0 mt-[15px] bk2:mt-0 rounded-full">
                        <p className="text-white text-[14px]">Get instant access</p>
                    </div>
                </div>
            
            </div>


            <Menu_Modal/>
        </div>
    )
}

export default Product

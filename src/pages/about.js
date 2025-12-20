import React from 'react'
import Menu_Modal from './components/Menu_Modal'
import Customer_Report from './components/Customer_Report'
import Freetrials from './components/Freetrials'
import EachTeamMenber from './components/EachTeamMenber'

function About() {
    return (
        <div
            className={`relative w-100vw] py-[20px] m-0 flex justify-center flex-col items-center`}
        >
            
            <div 
                className="flex bk4:flex-row px-[20px] flex-col justify-center items-center mt-[15px]"
            >
                <div className="mt-[10px] bk4:mt-0">
                    <p className="text-[#A44A3F] text-[12px] font-semibold mt-[20px] bk:mt-0 ">Our Values</p>
                    <p className="text-[30px] bk:text-[40px]" style={{}}>Our team shares</p>

                    {/* <p>{storedData?.name}</p>
                    <p onClick={changenum}>{storedData?.height}</p> */}

                    <p className="text-[30px] bk:text-[40px]" style={{}}>values to <span className="" style={{padding: "5px 20px", borderRadius: "60px", border: "2px solid #FF9689", color: "white", backgroundColor: "#A44A3F"}}>Success</span></p>

                    <p className="mt-[20px] opacity-70 bk2:w-[400px] text-[14px]">Baynt is more than just a SaaS and technology software. it's a complete solution.</p>
                    
                    <div className="flex justify-start items-center mt-[25px]">
                        <div className="bg-red-500 w-5.5 h-5.5 rounded-full"/>
                        <p className="ml-3 font-[600] text-[14px]">Good design and experience.</p>
                    </div>
                    <div className="flex justify-start items-center mt-4">
                        <div className="bg-red-500 w-5.5 h-5.5 rounded-full"/>
                        <p className="ml-3 font-[600] text-[14px]">Easily customized and clean development.</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div style={{border: "1px solid rgba(41,41,41,.5)"}} className="flex justify-center cursor-pointer items-center w-[120px] h-[40px] mt-9 rounded-[100px] mr-auto">
                            <p className="font-medium text-[13px]">Get Free Trial</p>
                        </div>
                        <div className='mt-9 mr-auto cursor-pointer'>
                            <p 
                                className='text-[12px]'
                                style={{fontWeight: 600}}>See How It Works</p>
                        </div>
                    </div>
                </div>

                <div className="bk4:ml-auto bk4:pl-[60px] mt-[30px] bk4:mt-0">
                    <img 
                        src="/images/team_value.jpg" 
                        alt="team_value image" 
                    />
                </div>
            </div>

            <div 
                className='flex flex-wrap py-[70px] bg-white w-full px-[20px] justify-evenly'
                style={{borderBottom: "1px solid rgba(0,0,0,0.12)"}}
            >
                <div className='text-center w-[200px] p-[10px] py-[20px]'>
                    <p className='mb-[15px] text-[22px]'
                        style={{fontWeight: 500}}
                    >22k <span className='text-[red]'>+</span></p>
                    <p className='opacity-70 text-[13px]'>A modest number to start off the metrics section</p>
                </div>
                <div className='text-center w-[200px] p-[10px] py-[20px]'>
                    <p className='mb-[15px] text-[22px]'
                        style={{fontWeight: 500}}
                    >64M <span className='text-[red]'>+</span></p>
                    <p className='opacity-70 text-[13px]'>A brief highlight to introduce the performance overview</p>
                </div>
                <div className='text-center w-[200px] p-[10px] py-[20px]'>
                    <p className='mb-[15px] text-[22px]'
                        style={{fontWeight: 500}}
                    >94 <span className='text-[red]'>%</span></p>
                    <p className='opacity-70 text-[13px]'>A concise stat to set the tone for insights ahead.</p>
                </div>
            </div>

            <div className='bg-white w-full py-[70px]'>
                <div className='flex flex-wrap pt-[0px] bg-white w-full px-[20px] justify-evenly w-[85%]'>
                    <p 
                        className='mb-[15px] text-[28px] w-[300px]'
                        style={{fontWeight: 500}}
                    >The best software teams ship quickly and often.</p>
                    <p className='mb-[15px] opacity-70 text-[13px] w-[300px]'>With its intuitive interface and powerful features, Baynt empowers businesses to leverage technology for growth.</p>
                </div>

                <div>
                    <img 
                        src="/images/playvideo.jpg" 
                        alt="playback video" 
                        className="ml-auto mr-auto"
                    />
                </div>
                <p className='px-[20px] text-center opacity-70 text-[13px] max-w-[330px] ml-auto mr-auto'>
                    Experience the baynt difference and unlock the true potential of your online business. Our state-of-the-art SaaS and technology
                </p>
            </div>

            <div className='w-full px-[20px] py-[70px]'>
                <p className='mb-[15px] text-[brown] mt-[50px] text-[12px] text-center'>Powerful Features</p>
                <p className="text-[23px] bs:text-[30px] bk:text-[40px] px-[10px] text-center" style={{}}>Our Company's Values</p>
                <p className='text-[12px] opacity-70 text-center w-[300px] my-[20px] ml-auto mr-auto'>
                    Our innovative solution empower businesses to stay ahead in the digital landscape.
                </p>

                <div className='w-full flex bk3:flex-row flex-col-reverse max-w-[800px] ml-auto mr-auto mt-[30px]'>
                    <div className='w-[100%] bg-[white] min-h-[220px] h-auto bk3:mr-[20px] p-[7px] rounded-[20px]' style={{boxShadow: "rgba(0,0,0,0.16) 0px 2px 7px"}}>
                        <div className='w-[100%] h-[100%] p-[25px] rounded-[20px] flex flex-col justify-center' style={{border: "1px solid rgba(0,0,0,0.12)"}} >
                            <div className='flex items-center'>
                                <div className='w-[50px] h-[50px] bg-[orange] rounded-full'>
                                    <img 
                                        src="/images/customericon.jpg" 
                                        alt="customer focus" 
                                        className="ml-auto mr-auto w-[50px] h-[50px] rounded-[20px]"
                                    />
                                </div>
                                <p className='ml-[20px] font-[600]'>Customer Focus</p>
                            </div>

                            <p className='mt-[20px] text-[14px] opacity-70'>
                                Baynt is the game changer you've been waiting for in the world of SaaS and technolgy. Gain unparalleled insights into your data with our robust analytics suite.
                            </p>

                            <div className='mt-[20px] rounded-full w-[130px] h-[35px] cursor-pointer flex justify-center items-center' style={{border: "1px solid rgba(0,0,0,0.12)"}}>
                                <p className='text-[13px] opacity-70'>Start Journey</p>
                            </div>
                        </div>
                    </div>

                    <div className='bk3:w-[350px] w-[300px] h-[270px] ml-auto mr-auto bk3:ml-0 bk3:mr-0 mb-[40px] bk3:mb-0 rounded-[20px]' style={{boxShadow: "rgba(0,0,0,0.16) 0px 2px 7px"}}>
                        <img 
                            src="/images/customerfocus.jpg" 
                            alt="customer focus" 
                            className="ml-auto mr-auto w-[300px] h-[270px] rounded-[20px]"
                        />
                    </div>
                </div>

                <div className='w-full flex bk3:flex-row-reverse flex-col-reverse max-w-[800px] ml-auto mr-auto mt-[30px]'>
                    <div className='w-[100%] bg-[white] min-h-[220px] h-auto bk3:ml-[20px] p-[7px] rounded-[20px]' style={{boxShadow: "rgba(0,0,0,0.16) 0px 2px 7px"}}>
                        <div className='w-[100%] h-[100%] p-[25px] rounded-[20px] flex flex-col justify-center' style={{border: "1px solid rgba(0,0,0,0.12)"}} >
                            <div className='flex items-center'>
                                <div className='w-[50px] h-[50px] bg-[orange] rounded-full'>
                                    <img 
                                        src="/images/growicon.jpg" 
                                        alt="customer focus" 
                                        className="ml-auto mr-auto w-[50px] h-[50px] rounded-[20px]"
                                    />
                                </div>
                                <p className='ml-[20px] font-[600]'>Keep Growing</p>
                            </div>

                            <p className='mt-[20px] text-[14px] opacity-70'>
                                Uncover hidden patterns, track user behaviour and make data-driven decisions to propel your business forward. Optimized for SEO. Baynt ensures your website stands out.
                            </p>

                            <div className='mt-[20px] rounded-full w-[130px] h-[35px] cursor-pointer flex justify-center items-center' style={{border: "1px solid rgba(0,0,0,0.12)"}}>
                                <p className='text-[13px] opacity-70'>Start Journey</p>
                            </div>
                        </div>
                    </div>

                    <div className='bk3:w-[350px] w-[300px] h-[270px] ml-auto mr-auto bk3:ml-0 bk3:mr-0 mb-[40px] bk3:mb-0 rounded-[20px]' style={{boxShadow: "rgba(0,0,0,0.16) 0px 2px 7px"}}>
                        <img 
                            src="/images/keepgrowing.jpg" 
                            alt="customer focus" 
                            className="ml-auto mr-auto w-[300px] h-[270px] rounded-[20px]"
                        />
                    </div>
                </div>
            </div>

            <div className='w-full px-[20px] py-[70px] bg-[white]'>
                <p className='mb-[15px] text-[brown] mt-[50px] text-[12px] text-center'>Available Baynt</p>
                <p className="text-[23px] bs:text-[30px] bk:text-[40px] px-[10px] text-center max-w-[550px] ml-auto mr-auto" style={{}}>Build a solution that wins you more customers.</p>

                <div className='flex flex-col bk8:flex-row justify-between w-[100%] max-w-[1000px] mt-[50px] items-center ml-auto mr-auto'>
                    <div className='max-w-[400px] py-[15px]'>
                        <div className="mt-[20px]">
                            <img 
                                src="/images/feature4.jpg" 
                                alt="faster icon" 
                                className="ml-[-5px]"
                            />
                            <p className="my-[10px]">Deploy faster together</p>
                            <p className="text-[#414141] opacity-70 text-[13px] w-[200px]">Gain a competitive edge with our SEO optimization tools</p>
                        </div>

                        <div className="mt-[20px]">
                            <img 
                                src="/images/feature5.jpg" 
                                alt="faster icon" 
                                className="ml-[-5px]"
                            />
                            <p className="my-[10px]">Beautiful No-code</p>
                            <p className="text-[#414141] opacity-70 text-[13px] w-[200px]">Enhance your website's visibility and drive targetted traffic</p>
                        </div>

                        <div className='bk8:hidden block'>
                            <div className="mt-[20px]">
                                <img 
                                    src="/images/feature6.jpg" 
                                    alt="faster icon" 
                                    className="ml-[-5px]"
                                />
                                <p className="my-[10px]">Good Communication</p>
                                <p className="text-[#414141] opacity-70 text-[13px] w-[200px]">Experience the baynt difference and unlock the true potential</p>
                            </div>

                            <div className="mt-[20px]">
                                <img 
                                    src="/images/feature7.jpg" 
                                    alt="faster icon" 
                                    className="ml-[-5px]"
                                />
                                <p className="my-[10px]">Easily Customized</p>
                                <p className="text-[#414141] opacity-70 text-[13px] w-[200px]">From content creation ad deployment to performance</p>
                            </div>
                        </div>
                    </div>

                    <div className='py-[15px]'>
                        <img 
                            src="/images/phone.jpg" 
                            alt="phone with baynt logo on it" 
                            className="h-[auto] min-w-[350px]"
                        />
                    </div>

                    <div className='max-w-[400px] py-[15px] bk8:block hidden'>
                        <div className="mt-[20px]">
                            <img 
                                src="/images/feature6.jpg" 
                                alt="faster icon" 
                                className="ml-[-5px]"
                            />
                            <p className="my-[10px]">Good Communication</p>
                            <p className="text-[#414141] opacity-70 text-[13px] w-[200px]">Experience the baynt difference and unlock the true potential</p>
                        </div>

                        <div className="mt-[20px]">
                            <img 
                                src="/images/feature7.jpg" 
                                alt="faster icon" 
                                className="ml-[-5px]"
                            />
                            <p className="my-[10px]">Easily Customized</p>
                            <p className="text-[#414141] opacity-70 text-[13px] w-[200px]">From content creation ad deployment to performance</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[white] w-full p-[10px]'>
                <div className="py-20">
                    <p className="text-center font-medium bk:text-[25px] text-[17px] mb-12" >The world's best companies trust Baynt.</p>
                    <div className="flex bk4:flex-row flex-col justify-center items-center">
                        <img src="/images/logos_1.jpg" alt="logo pac 1" className="mr-12 ml-[60px] w-[300px] bk:w-auto"/>
                        <img src="/images/logos_2.jpg" alt="logo pac 1" className="w-[300px] bk:w-auto" />
                    </div>
                    <p className="text-center mt-12 text-[15px]"><span className="font-bold text-[#A44A3F]">Baynt</span> is used by over 55,000+ companies across the globe</p>
                    <div style={{border: "1px solid rgba(41,41,41,.5)"}} className="flex justify-center items-center w-[250px] h-[40px] mt-9 rounded-[100px] ml-auto mr-auto">
                        <p className="font-medium text-[13px]">Start your Baynt Journey Today</p>
                    </div>
                </div>
            </div>

            <div className='py-[70px] px-[10px] w-full bg-white'>
                <div className='max-w-[700px] ml-auto mr-auto'>
                    <div>
                        <p className='mb-[15px] text-[brown] text-[12px] text-center'>Our Team</p>
                        <p className='text-[23px] bs:text-[30px] bk:text-[40px] text-center'>Baynt, Team</p>
                    </div>

                    <div>
                        <p className='mt-[20px] opacity-70 text-[13px] text-center'>Uncover hidden patterns, track user behaviour and make data-driven decisions to propel your business forward.</p>
                    </div>
                </div>

                <div className='flex flex-wrap w-full justify-center mt-[20px]'>
                    {/* <img 
                        src="/images/team1.jpg" 
                        alt="faster icon" 
                        className="p-[10px]"
                    />
                    <img 
                        src="/images/team2.jpg" 
                        alt="faster icon" 
                        className="p-[10px]"
                    />
                    <img 
                        src="/images/team3.jpg" 
                        alt="faster icon" 
                        className="p-[10px]"
                    />
                    <img 
                        src="/images/team4.jpg" 
                        alt="faster icon" 
                        className="p-[10px]"
                    />
                    <img 
                        src="/images/team5.jpg" 
                        alt="faster icon" 
                        className="p-[10px]"
                    />
                    <img 
                        src="/images/team6.jpg" 
                        alt="faster icon" 
                        className="p-[10px]"
                    /> */}
                                


                    <EachTeamMenber 
                        name={"Jake Weary"}
                        role={"Engineering Manager, Baynt"}
                        icon={1}
                    />

                    <EachTeamMenber 
                        name={"Sadie Berlin"}
                        role={"Lead Designer, Baynt"}
                        icon={2}
                    />

                    <EachTeamMenber 
                        name={"Dylan Meringu"}
                        role={"Head of Product, Baynt"}
                        icon={3}
                    />

                    <EachTeamMenber 
                        name={"Amaya Locosta"}
                        role={"Fullstack Developer, Baynt"}
                        icon={4}
                    />

                    <EachTeamMenber 
                        name={"Sam Smith"}
                        role={"UX Designer, Baynt"}
                        icon={5}
                    />

                    <EachTeamMenber 
                        name={"Cecilia Evans"}
                        role={"UI Designer, Baynt"}
                        icon={6}
                    />
                </div>
            </div>

            <Customer_Report />
            <Freetrials />
            <Menu_Modal />
        </div>
    )
}

export default About

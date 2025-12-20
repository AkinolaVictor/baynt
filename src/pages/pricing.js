import React from 'react'
import Menu_Modal from './components/Menu_Modal'
import Each_Pricing from './components/Each_Pricing'
import Each_Thread from './components/Each_Thread'
import Customer_Report from './components/Customer_Report'
import Dropdown from './components/Dropdown'
import Freetrials from './components/Freetrials'
import FAQs from './components/FAQs'

function Pricing() {
    return (
        <div
            // className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
            className={`relative w-full py-[20px] px-0 flex justify-center flex-col items-center m-0`}
        >
            <div className='flex justify-center flex-col items-center'>
                <p className='mb-[15px]' style={{color: "brown", marginTop: "30px", fontSize: "12px"}}> Our Pricing</p>
                <p className="text-[23px] bs:text-[30px] bk:text-[40px] px-[10px]" style={{}}>Pricing built to suit all</p>
                <p className="text-[23px] bs:text-[30px] bk:text-[40px] px-[10px]" style={{}}>types of <span className="" style={{padding: "5px 20px", borderRadius: "60px", border: "2px solid #FF9689", color: "white", backgroundColor: "#A44A3F"}}>Business</span></p>
                
                <p className='px-[10px]' style={{maxWidth: "400px", textAlign: "center", lineHeight: "25px", fontSize: "15px", marginTop: "20px", opacity: "0.7"}}>
                    Embrace the future of technology with Baynt.
                </p>
                
                <p className='px-[10px]' style={{maxWidth: "400px", textAlign: "center", lineHeight: "25px", fontSize: "15px", marginTop: "0px", opacity: "0.7"}}>
                    Our innovative Saas template empowers business.
                </p>
            </div>

            <div className='flex flex-wrap mt-[20px] justify-center items-center'>
                <Each_Pricing 
                    title={"Developer"}
                    description={"Unlock the power of data analytics and gain actionable insights"}
                    price={16}
                    save={15}
                    info1={"5GB"} info2={"Bandwidth"}
                    info3={"48"} info4={"Limit Support"}
                    mark1={"Developer Docs"} mark2={"Api status notification"} mark3={"Submit cases baynt web"}
                />

                <Each_Pricing 
                    title={"Essential"}
                    description={"Unlock the power of data analytics and gain actionable insights"}
                    price={24}
                    save={15}
                    info1={"10GB"} info2={"Bandwidth"}
                    info3={"56"} info4={"Limit Support"}
                    mark1={"Developer Docs"} mark2={"Api status notification"} mark3={"Submit cases baynt web"}
                />

                <Each_Pricing 
                    title={"Business"}
                    description={"Unlock the power of data analytics and gain actionable insights"}
                    price={32}
                    save={50}
                    info1={"15GB"} info2={"Bandwidth"}
                    info3={"64"} info4={"Limit Support"}
                    mark1={"Developer Docs"} mark2={"Api status notification"} mark3={"Submit cases baynt web"}
                />

                <Each_Pricing 
                    title={"Premium"}
                    description={"Unlock the power of data analytics and gain actionable insights"}
                    price={40}
                    save={15}
                    info1={"20GB"} info2={"Bandwidth"}
                    info3={"72"} info4={"Limit Support"}
                    mark1={"Developer Docs"} mark2={"Api status notification"} mark3={"Submit cases baynt web"}
                />
            </div>

            <div className='px-[20px] bg-[white] w-full py-[70px]'>
                <p className='mb-[25px] text-[12px] text-[brown] text-center'> Product Page</p>

                <div className='max-w-[900px] ml-auto mr-auto flex flex-wrap justify-around'>
                    <p className='max-w-[400px] text-[35px]'>See which is the best Price Plan for you</p>
                    <p className='max-w-[400px] text-[13px] opacity-60 mt-[20px] bk5:mt-0 flex items-center'>With its intuitive interface and powerful features, Baynt empowers businesses to leverage technology for maximum growth and efficiency.</p>
                </div>

                <div className='px-[10px] flex flex-wrap justify-center'>
                    <Each_Thread 
                        title={"Threads Enterprise"}
                        description={"Experience the Baynt differnece and unlock the true potential of your online business"}
                        icon={1}
                    />
                    <Each_Thread 
                        title={"Threads Community"}
                        description={"Baynt is more than just a SaaS technology software - it's a complete digital transformation solution"}
                        icon={2}
                    />
                </div>
            </div>

            <Customer_Report />
            <FAQs style={"bg-white mt-[0px]"}/>

            <Freetrials />

            <Menu_Modal />
        </div>
    )
}

export default Pricing

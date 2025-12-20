import React from 'react'
import BlogIntro from './components/BlogIntro'
import { blog_posts } from '@/utils/public_exports'
import Customer_Report from './components/Customer_Report'
import FAQs from './components/FAQs'
import Freetrials from './components/Freetrials'
import Menu_Modal from './components/Menu_Modal'
import CreatePost from './components/CreatePost'
import { generalFunctions } from '@/utils/storeControllers/generalFunctions'
import { useSelector } from 'react-redux'

function Blog() {
    // const {createPost} = useSelector(state=>state.generalSlice)
    const {setGeneralAlpha} = generalFunctions()
    
    function openCreate(){
        // console.log("working");
        // setModalToggle(!modalToggle)
        setGeneralAlpha("createPost", (val)=>{
          return !val
        })
    }

    return (
        <div className={`relative w-full py-[20px] px-[0px] flex justify-center flex-col items-center m-0`}>
            <div className='w-full px-[10px] bg-white flex justify-center items-center'>
                <div className='flex flex-wrap w-full max-w-[1200px] justify-center items-center mb-[30px] px-[10px]'>
                    <div className='w-full  mx-[10px] max-w-[350px]'>
                        <p className='text-[brown] text-[12px] mt-[30px]'>Our Blog Page</p>
                        <p className='text-[30px] my-[20px]'>Insight and Advice from our expert team.</p>
                        <p className='text-[13px] opacity-70'>Baynt is more than just a SaaS and technolgy software - it's a digital transformation solution.</p>

                        <div className='flex'>
                            <div className='flex my-[30px] justify-start items-center'>
                                <img 
                                    src="/images/cart.jpg" alt="phone with baynt logo on it" 
                                    className="w-[25px] h-[25px] mr-[4px]" 
                                />
                                <p className='text-[12px] opacity-70'>Smart real estate service</p>
                            </div>

                            <div className='flex my-[30px] justify-start items-center ml-[20px] '>
                                <img 
                                    src="/images/pin.jpg" alt="phone with baynt logo on it" 
                                    className="w-[25px] h-[25px] mr-[4px]" 
                                />
                                <p className='text-[12px] opacity-70'>Low taxes and interests</p>
                            </div>
                        </div>


                    </div>

                    <div 
                        className='rounded-[10px] p-3px w-full max-w-[350px] mx-[10px] mt-[30px] bk5:mt-0 bk5:ml-auto'
                        // style={{border: "1px solid rgba(41,41,41,0.10)"}}
                    >
                        <div className='p-[20px] bg-[white] rounded-[10px] w-full'>
                            <img 
                                src="/images/blogbanner.jpg" alt="phone with baynt logo on it" 
                                className="w-[500px] h-[auto] rounded-[10px]" 
                            />
                        </div>
                    </div>
                </div>
                
            </div>

            <div 
                className='w-full bg-white px-[10px] py-[40px]'
                style={{
                    borderTop: "0.5px solid rgba(173, 160, 160, 0.7)",
                    borderBottom: "0.5px solid rgba(173, 160, 160, 0.7)"
                }}
            >
                <div className='flex w-full justify-evenly flex-wrap'>
                    <div className='flex my-[30px] justify-start items-center w-full max-w-[300px]'>
                        <img 
                            src="/images/bloglogo1.jpg" alt="phone with baynt logo on it" 
                            className="w-[50px] h-[50px] mr-[15px]" 
                        />
                        <p className='text-[12px] opacity-70'>Enhance your website visibility and drive targeted trafic with Baynt's advanced SEO capabilities</p>
                    </div>
                    <div className='flex my-[30px] justify-start items-center w-full max-w-[300px]'>
                        <img 
                            src="/images/bloglogo2.jpg" alt="phone with baynt logo on it" 
                            className="w-[50px] h-[50px] mr-[15px]" 
                        />
                        <p className='text-[12px] opacity-70'>Unlock the power of data analysis and gain actionable insights to make informed business decisions.</p>
                    </div>
                    <div className='flex my-[30px] justify-start items-center w-full max-w-[300px]'>
                        <img 
                            src="/images/bloglogo3.jpg" alt="phone with baynt logo on it" 
                            className="w-[50px] h-[50px] mr-[15px]" 
                        />
                        <p className='text-[12px] opacity-70'>Baynt is more than just a SaaS and technolgy software - it's a digital transformation solution.</p>
                    </div>
                </div>
            </div>

            <div className='bg-white py-[50px] px-[20px] w-full flex flex-col justify-center items-center'>
                <div className='w-full bk:px-[20px] px-[10px] flex justify-between items-center'>
                    <div className='flex'>
                        <div className='max-w-[100px] w-auto px-[20px] cursor-pointer'>
                            <p className='text-[12px] font-[600] opacity-70'>All Posts</p>
                            <div className='w-full h-[4px] mt-[4px] bg-black rounded-full opacity-70'/>
                        </div>
                        <div className='max-w-[100px] w-auto px-[20px] cursor-pointer'>
                            <p className='text-[12px] font-[600] opacity-70'>My Posts</p>
                            <div className='w-full h-[4px] mt-[4px] bg-black rounded-full opacity-0'/>
                        </div>
                    </div>

                    <div className='max-w-[200px] w-auto px-[20px] cursor-pointer' onClick={openCreate}>
                        <p className='text-[12px] font-[600] text-[blue]'>Create post</p>
                        <div className='w-full h-[4px] mt-[4px] bg-black rounded-full opacity-0'/>
                    </div>
                    {/* <div className='w-[30px] h-[30px] flex justify-center items-center bg-[#eee] rounded-full mt-[-20px]'>
                        <p className='text-[20px]'>+</p>
                    </div> */}
                </div>
                <div className='w-full h-[1px] mt-[0px] bg-black rounded-full opacity-10'/>
                {
                    blog_posts.map((item, index)=>{
                        const {title, creator, icon, body} = item
                        return (
                            <BlogIntro 
                                key={index}
                                num={`${index+1<10?"0":""}${index+1}`}
                                creator={creator}
                                title={title}
                                // description={description}
                                body={body}
                                icon={icon}
                                item={item}
                            />
                        )
                    })
                }
            </div>


            <Customer_Report />
            <FAQs style={"bg-white mt-[0px]"}/>
            <Freetrials />
            <CreatePost />

            <Menu_Modal />
        </div>
    )
}

export default Blog

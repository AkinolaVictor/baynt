import { Geist, Geist_Mono } from "next/font/google";
import { useSelector } from "react-redux";
import { generalFunctions } from "@/utils/storeControllers/generalFunctions";
import Menu_Modal from "./components/Menu_Modal";
import Customer_Report from "./components/Customer_Report";
import Freetrials from "./components/Freetrials";
import Subscribe from "./components/Subscribe";
import Features from "./components/Features";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Comp1(){
  return (
    <div className="flex flex-col bk2:mr-auto bk2:pr-[80px] mr-0 pr-0 bk2:items-end items-center bk2:mt-[-60px] mt-[60px]">
      <div style={{width: "150px", height: "150px", borderRadius: "20px", boxShadow: "rgba(0,0,0,0.35) 0px 5px 15px", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column"}}>
        <div style={{ width: "calc(100% - 10px)", height: "calc(100% - 10px)", marginLeft: "auto", 
          marginRight: "auto", padding: "20px", borderRadius: "20px", border: "1px solid rgba(41,41,41,0.08)"}}>
          <div style={{width: "35px", height: "35px", backgroundColor: "blue", backgroundColor: "#AC5A50", borderRadius: "20px"}}></div>
          <p style={{fontSize: "15px", marginTop: "15px"}}>12k</p>
          <p style={{fontSize: "13px", opacity: "0.7"}} className="">Customers</p>
        </div>
      </div>

      <div style={{marginTop: "40px", width: "250px", height: "220px", borderRadius: "20px", boxShadow: "rgba(0,0,0,0.35) 0px 5px 15px", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column"}}>
        <div style={{ width: "calc(100% - 10px)", height: "calc(100% - 10px)", marginLeft: "auto", marginRight: "auto", padding: "20px", borderRadius: "20px", border: "1px solid rgba(41,41,41,0.08)"}}>
          <p className="font-medium" style={{fontSize: "15px", marginTop: "15px"}}>Hi Sarah Smith,</p>
          <p 
            className="text-[11px] opacity-80"
            style={{ marginTop: "10px"}
          }>What would you like to explore today?</p>
          
          <div className="flex justify-start items-start mt-5">
            <div style={{width: "35px", height: "35px", backgroundColor: "blue", borderRadius: "20px"}}></div>
            <div className="ml-2">
              <p className="font-medium text-[13.5px]">Sarah Smith</p>
              <p className="opacity-80 text-[10.5px] mt-0.5">July 27, 2023</p>
            </div>

          </div>
            <div className="h-[1px] w-[100%] bg-gray-200 mt-4 mb-4"/>

          <div className="flex justify-start items-center">
            <div style={{width: "15px", height: "15px", backgroundColor: "#AC5A50", borderRadius: "20px"}}></div>
            <p className="ml-2 text-[12px] text-[#414141]">Sydney, Austrailia, 2000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Comp2(){
  return (
    <div className="bk2:ml-auto bk2:mt-[-60px] bk2:pl-[80px] ml-0 pl-0 mt-[60px] flex flex-col bk2:items-start items-center">
      
      <div style={{width: "150px", height: "150px", borderRadius: "20px", boxShadow: "rgba(0,0,0,0.35) 0px 5px 15px", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column"}}>
        <div style={{ width: "calc(100% - 10px)", height: "calc(100% - 10px)", marginLeft: "auto", 
          marginRight: "auto", padding: "20px", borderRadius: "20px", border: "1px solid rgba(41,41,41,0.08)"}}>
          <p style={{fontSize: "14px", marginTop: "5px"}}>Sales Meeting</p>
          <p style={{fontSize: "12px", opacity: "0.7"}} className="">11:00 - 1:30</p>
          <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center", flexDirection: "row-reverse", marginTop: "20px"}}>
            <div style={{width: "28px", height: "28px", marginLeft: "-10px", border: "2px solid rgba(41,41,41,0.3)", backgroundColor: "white", borderRadius: "20px",
                display: "flex", justifyContent: "center", alignItems: "center"
            }}>
              <p style={{fontSize: "10px", marginLeft: "5px"}}>+8</p>
            </div>
            <div style={{width: "32px", height: "32px", marginLeft: "-10px", border: "2px solid white", backgroundColor: "#AC5A50", borderRadius: "20px"}}></div>
            <div style={{width: "32px", height: "32px", marginLeft: "-10px", border: "2px solid white", backgroundColor: "#AC5A50", borderRadius: "20px"}}></div>
            <div style={{width: "32px", height: "32px", border: "2px solid white", backgroundColor: "#AC5A50", borderRadius: "20px"}}></div>
          </div>
        </div>
      </div>

      <div style={{marginTop: "40px", width: "250px", height: "220px", borderRadius: "20px", boxShadow: "rgba(0,0,0,0.35) 0px 5px 15px", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column"}}>
        <div style={{ width: "calc(100% - 10px)", height: "calc(100% - 10px)", marginLeft: "auto", marginRight: "auto", padding: "20px", borderRadius: "20px", border: "1px solid rgba(41,41,41,0.08)"}}>
          <p className="font-medium" style={{fontSize: "15px", marginTop: "5px"}}>Baynt Highlights</p>
          <div className="h-[1px] w-[100%] bg-gray-200 mt-4 mb-4"/>
          
          <div className="flex justify-start items-center">
            <p className="text-[12px] opacity-70">Avg. Client Rating</p>
            <div className="flex justify-start items-center ml-auto">
              <div style={{width: "15px", height: "15px", backgroundColor: "#AC5A50", borderRadius: "20px", marginRight: "7px"}}></div>
              <p className="opacity-70 text-[12px]"><span className="font-medium opacity-100">8.8</span>/10</p>
            </div>
          </div>
          
          <div className="flex justify-start items-center mt-3">
            <p className="text-[12px] opacity-70">Avg. Quotes</p>
            <div className="flex justify-start items-center ml-auto">
              <div style={{width: "15px", height: "15px", backgroundColor: "#AC5A50", borderRadius: "20px", marginRight: "7px"}}></div>
              <p className="opacity-70 text-[12px]"><span className="font-medium opacity-100">748</span></p>
            </div>
          </div>
          
          <div className="flex justify-start items-center mt-3">
            <p className="text-[12px] opacity-70">Avg. Agent Earnings</p>
            <div className="flex justify-start items-center ml-auto">
              <div style={{width: "15px", height: "15px", backgroundColor: "#AC5A50", borderRadius: "20px", marginRight: "7px"}}></div>
              <p className="opacity-70 text-[12px]"><span className="font-medium opacity-100">$4.500</span></p>
            </div>
          </div>
          
          <div className="flex justify-start items-center mt-3">
            <p className="text-[12px] opacity-70">Avg. Client Baynt</p>
            <div className="flex justify-start items-center ml-auto">
              <div style={{width: "15px", height: "15px", backgroundColor: "#AC5A50", borderRadius: "20px", marginRight: "7px"}}></div>
              <p className="opacity-70 text-[12px]"><span className="font-medium opacity-100">%92</span></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const storedData = useSelector(state=>state.generalSlice)
  const {setGeneralAlpha, getGeneralData} = generalFunctions()
  // console.log({storedData});
  function changenum(){
    // setGeneralAlpha("height", 10000000)
    
    setGeneralAlpha("height", (val)=>{
      return val+1
    })

    // const num = getGeneralData("height")
    // console.log({num});
    
  }

  function modalToggle(){
    setGeneralAlpha("modal", (val)=>{
      return !val
    })
  }
  return (
    <div
      // className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
      className={`relative w-100vw] p-0 m-0`}
      style={{padding: "20px 20px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center",}}
    >
      <p style={{color: "brown", marginTop: "20px", fontSize: "12px"}}> <span style={{color: "orange", fontSize: "20px"}}>✌</span> BAYNT BETA</p>

      <p className="text-[30px] bk:text-[40px]" style={{}}>Save time and build</p>

      {/* <p>{storedData?.name}</p>
      <p onClick={changenum}>{storedData?.height}</p> */}

      <p className="text-[30px] bk:text-[40px]" style={{}}>better with <span className="" style={{padding: "5px 20px", borderRadius: "60px", border: "2px solid #FF9689", color: "white", backgroundColor: "#A44A3F"}}>Baynt</span></p>

      <p style={{maxWidth: "400px", textAlign: "center", lineHeight: "25px", fontSize: "15px", marginTop: "20px", opacity: "0.7"}}>Gain Unparalleled Insight into your data with our robost analytics suite and Baynt</p>


      <div 
        className="bk2:flex block mt-[25px]"
        style={{}}
      >
        {/* FOR SMALL SCREEN */}
        <>
          <div className="bk2:hidden block">
            <img 
              src="/images/phone.jpg" 
              alt="phone with baynt logo on it" 
              className="w-[100%] h-[auto]"
            />
          </div>
        </>

        
        <Comp1 />

        <div className="bk2:block hidden">
          <img 
            src="/images/phone.jpg" 
            alt="phone with baynt logo on it" 
            className="w-full h-[auto]"
          />
        </div>

        <Comp2 />

      </div>

      <div>
        <div className="mt-20">
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

        <div 
          className="flex bk4:flex-row flex-col justify-center items-center mt-15"
          // style={{width: "calc(100% - 0px)"}}
        >
          <div className="mt-[90px] bk4:mt-0">
            <p className="text-[#A44A3F] text-[12px] font-semibold mt-[50px] bk:mt-0 ">Meet Baynt</p>
            <p className="mt-[20px] font-semibold text-[35px] bk2:w-[400px] leading-[45px]">Provide Powerful Solutions at all times</p>
            <p className="mt-[20px] opacity-70 bk2:w-[400px] text-[14px]">Baynt is more than just a SaaS and technology platform-it's a digital transformative solution.</p>
            <div className="flex justify-start items-center mt-[25px]">
              <div className="bg-red-500 w-5.5 h-5.5 rounded-full"/>
              <p className="ml-3 font-[600] text-[14px]">Share the extra text you want to add as a feature.</p>
            </div>
            <div className="flex justify-start items-center mt-4">
              <div className="bg-red-500 w-5.5 h-5.5 rounded-full"/>
              <p className="ml-3 font-[600] text-[14px]">Add your feature text here.</p>
            </div>
            <div className="flex justify-start items-center mt-4">
              <div className="bg-red-500 w-5.5 h-5.5 rounded-full"/>
              <p className="ml-3 font-[600] text-[14px]">Add the text you'll like to iclude as a feature.</p>
            </div>
            <div style={{border: "1px solid rgba(41,41,41,.5)"}} className="flex justify-center items-center w-[120px] h-[40px] mt-9 rounded-[100px] mr-auto">
              <p className="font-medium text-[13px]">Get Free Trial</p>
            </div>
          </div>

          <div className="bk4:ml-auto mt-[30px] bk4:mt-0">
            <img 
              src="/images/stock.jpg" 
              alt="image of stock activities" 
            />
          </div>
        </div>
        <Subscribe />
      </div>

      <div className="mt-[150px]">
          <p className="text-center text-red-500 text-[14px]">Powerful Features</p>
          <p
            className="bk2:w-[400px] text-center ml-auto mr-auto bk:text-[40px] text-[30px]" 
          >
            Our product has these big <span style={{padding: "5px 20px", borderRadius: "60px", border: "2px solid #FF9689", color: "white", backgroundColor: "#A44A3F"}}>features</span>
          </p>

          <div className="bk:mt-[50px] mt-[80px] flex bk:justify-between justify-center items-center flex-wrap w-full">

            <Features 
              style={"bk2:mr-[60px] mt-[0px]"}
              icon1={"dashboard"}
              icon2={"bdes"}
              title={"Beautiful Design"}
              detail={"Gain a competitive edge with our SEO optimization tools, ensuring your website ranks."}
            />

            <Features 
              style={"bk2:mr-[60px] mt-[0px]"}
              icon1={"cleandevmain"}
              icon2={"cleandev"}
              title={"Clean Development"}
              detail={"Unlock the power of data analytics and gain actionable insights to make informed decisions."}
            />

            <Features 
              style={"bk2:ml-[60px]"}
              icon1={"dataanalysis"}
              icon2={"custo"}
              title={"Easily Customized"}
              detail={"From content creation and deployment to performance monitoring and optimization"}
            />
            
          </div>
      </div>

      {/* ENSURE TO CONFIRM THIS SECTION */}
      <div className="mt-[200px] ">
        <p className="text-red-500 text-[14px] text-center bk2:text-start">Our key features</p>
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

          <div>
            <img src="/images/feature8.jpg" alt="baynt logos in box" />
          </div>

        </div>
      </div>
      
      <div className="mt-[100px]">
        <p className="text-red-500 text-[14px] text-center">Our Primary Integrations</p>
        <p className="bk2:text-[35px] text-[28px] bk2:w-[400px] leading-[45px] mt-[20px] text-center ml-auto mr-auto">
          Make Productivity easier with <span className="text-red-500">70+ Integrations</span>
        </p>
        <img 
          src="/images/integrations.jpg" 
          alt="baynt integrations" 
          className="mt-[50px] ml-auto mr-auto"
        />
        <p className="text-[#414141] text-[12.3px] text-center opacity-70 bk2:w-[450px] ml-auto mr-auto mt-[50px]">
          Gain a competitive edge with our SEO optimization tools, ensuring your website ranks higher, 
          attracts more visitors, and generates leads like never before.
        </p>
        <div>
          <div className="bg-red-500 flex justify-center items-center w-[300px] h-[40px] mt-[30px]  ml-auto mr-auto rounded-full">
            <p className="text-white text-[14px]">The Process is Simple</p>
          </div>
        </div>
      </div>

      <Customer_Report />

      {/* <div className="mt-[150px] bk3:text-start text-center">
        <p className="text-red-500 text-[14px]">Our Blog</p>
        <p className="text-[35px] leading-[40px] mt-[20px]">Blog & Articles</p>
        <p className=" bk3:w-[450px] text-[13px] text-[#414141] opacity-70 mt-[20px]">
          Unlock the power of data analytics and gain actionable insights to make 
          informed business decisions.Enhance your website visibility.
        </p>
        <div className=" flex flex-wrap bk3:justify-between justify-center mt-[40px]">
          <img src="/images/article1.jpg" alt="blog article 1" className="my-[10px] bk3:mx-[30px]"/>
          <img src="/images/article2.jpg" alt="blog article 2" className="my-[10px] bk3:mx-[30px]"/>
          <img src="/images/article3.jpg" alt="blog article 3" className="my-[10px] bk3:mx-[30px]"/>
        </div>
      </div> */}
      <Freetrials />


      {/* Last for layers */}
      <div className="w-full h-[1550px] bg-white absolute top-[500px] left-0 z-[-1]"/>
      <div className="w-full h-[1400px] bg-white absolute top-[2800px] left-0 z-[-1]"/>
      <div className="w-full h-[850px] bg-white absolute top-[4850px] left-0 z-[-1]"/>
      <div className="w-full h-[200px] bg-white absolute top-[6050px] left-0 z-[-1]"/>


      <Menu_Modal />
    </div>
  );
}

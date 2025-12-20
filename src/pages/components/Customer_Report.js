import React from 'react'

function Customer_Report() {
    return null
    return (

        <div className="bk:mt-[200px] mt-[50px]">
            <p className="text-red-500 text-[14px] text-center">Our Customers</p>
            <p className="text-[30px] bk:text-[40px] bk2:w-[400px] leading-[45px] mt-[20px] text-center ml-auto mr-auto">See what our customers are saying</p>
            <div className=" flex flex-wrap justify-center bk:justify-between mt-[40px]">
                <img src="/images/customer1.jpg" alt="what customer says 1"  className="bk2:mx-[20px] bk4:mx-[40px]"/>
                <img src="/images/customer2.jpg" alt="what customer says 2"  className="bk2:mx-[20px] bk4:mx-[40px]"/>
                <img src="/images/customer3.jpg" alt="what customer says 3" className="bk2:mx-[20px] bk4:mx-[40px]" />
            </div>
            <div className="bg-red-500 cursor-pointer flex justify-center items-center w-[300px] h-[40px] mt-[40px]  ml-auto mr-auto rounded-full">
                <p className="text-white text-[14px]">Follow us on Social Media</p>
            </div>
        </div>
        
    )
}

export default Customer_Report

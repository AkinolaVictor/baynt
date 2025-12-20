import React from 'react'
import Dropdown from './Dropdown'

function FAQs({style}) {
    return (
        <div className={`py-[70px] px-[10px] w-full ${style}`}>
            <p className="text-red-500 text-[14px] text-center">Baynt's FAQ</p>
            <p className="text-[30px] bk:text-[40px] bk2:w-[400px] leading-[45px] mt-[20px] text-center ml-auto mr-auto">Frequently Asked Questions</p>
            <div className='relative flex flex-col justify-center items-center mt-[15px]'>
                {/* <div className='w-[300px] h-[300px] rounded-full bg-[#eee] absolute z-[1] top-[70px]'/> */}
                {/* <div className='w-full '> */}
                    <Dropdown
                        question={"Can i export my data reports"}
                        answer={"This section shows the answer to the question asked above, it would also be reusable, to accommodate more questions."}
                    />
                    <Dropdown 
                        question={"Can i customize my report"}
                        answer={"This section shows the answer to the question asked above, it would also be reusable, to accommodate more questions."}
                    />
                    <Dropdown 
                        question={"Can a company create multiple accounts"}
                        answer={"This section shows the answer to the question asked above, it would also be reusable, to accommodate more questions."}
                    />
                {/* </div> */}
            </div>
        </div>
    )
}

export default FAQs

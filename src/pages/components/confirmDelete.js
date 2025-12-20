import React from 'react'
import ReactModal from 'react-modal'

function ConfirmDelete({openModal, modalToggle}) {

    return (
        <div style={{}}>
            <ReactModal
                isOpen={openModal}
                onRequestClose={modalToggle}
                contentLabel='Mobile Menu'
                style={{
                    overlay: {background: "rgba(0,0,0,0.7)"},
                    content: {
                        maxWidth: "400px",
                        margin: "auto",
                        borderRadius: "20px",
                        marginTop: "70px",
                        height: "150px",
                        display: "flex"
                    }
                }}
            >
                <div className="w-[100%] h-[auto] bg-blacks flex items-center justify-center py-[20px] px-[20px] flex-col">
                    <p className='text-[13px]'>Are you sure you want to delete this post</p>

                    <div className='flex justify-between items-center mt-[30px]'>
                        <div onClick={modalToggle} className='w-[70px] h-[30px] bg-[#eee] rounded-full center mx-[20px] cursor-pointer'>
                            <p className='text-[13px]'>Yes</p>
                        </div>      
                        <div className='flex justify-between items-center '>
                            
                        </div>
                        <div onClick={modalToggle} className='w-[70px] h-[30px] bg-[red] rounded-full center mx-[20px] cursor-pointer'>
                            <p className='text-[13px] text-white'>No</p>
                        </div>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}

export default ConfirmDelete

import React from 'react'
import arrow from '../../assets/img/arrow-form.png';
import './registerForm.css'



export default function Motivation() {
    return (
        <div className='h-screen md:w-[85%] w-full  ml-auto'>
        <div className="form-container h-full w-full relative flex items-center justify-center md:px-[20px] md:py-[100px] text-white ">
            <div className="bg-black w-full h-full xl:h-[460px] xl:w-[460px] md:h-[380px] md:w-[380px] lg:h-[400px] lg:w-[400px]  flex md:items-center items-start justify-center md:p-5 px-2 md:px-0 relative md:rotate-45">
                <div className='md:rotate-[-45deg] flex md:items-center items-start justify-start flex-col h-fit md:w-[70%]  md:translate-x-[-20px] md:translate-y-[-20px] p-2 md:p-0'>
                    <div className="md:p-2 md:border-[1.3px] md:border-[#f5f5f5] md:border-dashed items-center justify-center md:rotate-45 md:mb-5 flex">
                        <div className='xl:h-[50px] xl:w-[50px] lg:h-[40px] lg:w-[40px] h-[35px] w-[35px] bg-[#fd3434] md:flex hidden items-center justify-center'>
                            <img src={arrow} alt="time" className='md:rotate-[-45deg]'/>
                        </div>
                        <div className='cursor-pointer flex items-center md:hidden'>
                            <img src={arrow} alt="" className='w-[24px] h-[24px]'/>
                            <h2 className='capitalize text-[13px] text-[#bbbbbb]'>Go Back</h2>
                        </div>
                    </div>
                    <div className='md:text-center mt-2 pt-4 md:py-0'>
                        <h1 className='capitalize text-white xl:text-[32px] lg:text-[24px] md:text-[22px] text-[32px]  font-bold'>now let's <br />Talk <span className='text-[#FD3434]'>chesstin</span></h1>
                    </div>
                    <div className='flex items-center flex-col justify-center xl:py-4 lg:py-2 w-full md:px-0 px-3 py-4 mt-10  md:py-0'>
                        <input type="text" className='outline-none xl:text-[16px] text-[14px] py-1 bg-transparent border-b-[1px] border-[#FD3434] border-solid w-full mb-4' placeholder="Why do you want to participate in Chesstin?" id='email' />
                    </div>
                    <div className="w-full py-2 px-2 md:px-0">
                        
                    </div>
                    <div className="w-full md:p-2 mt-4 md:mt-0 lg:p-4 ">
                        <p className='capitalize font-bold xl:text-[15px] lg:text-[13px] md:text-[13px] md:text-center text-[12px]'><span className='text-[#fd3434]'>NB:</span>Motivation is an important factor in this selection criteria</p>
                    </div>
                    <div className="w-full flex items-center justify-center mt-8">
                        <div className="border-[1.3px] border-[#f5f5f5] border-dashed p-[3px]">
                            <button className='xl:py-[10px] xl:px-[60px] py-[6px] px-[40px] lg:py-[8px] lg:px-[40px] bg-[#fd3434] text-white text-[13px]'>Next</button>
                            {/* <Link to="/">hi zojfdsjq</Link> */}
                        </div>
                    </div>
                </div>
            </div>
	    </div>
    </div>
    )
}
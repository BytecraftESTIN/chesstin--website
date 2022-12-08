import React from 'react'
import arrow from '../../assets/img/arrow-form.png';
import './registerForm.css'


export default function Comfirmation() {
  return (
    <div className='h-screen md:w-[85%] w-full  ml-auto'>
        <div className="form-container h-full w-full relative flex items-center justify-center md:px-[20px] md:py-[100px] text-white ">
            <div className="bg-black w-full h-full xl:h-[460px] xl:w-[460px] md:h-[380px] md:w-[380px] lg:h-[400px] lg:w-[400px]  flex md:items-center items-start justify-center md:p-5 px-2 md:px-0 relative md:rotate-45">
                <div className='md:rotate-[-45deg] flex md:items-center items-start justify-start  flex-col h-fit md:w-[70%]  md:translate-x-[-20px] md:translate-y-[-20px] p-2 md:p-0'>
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
                        <h1 className='capitalize text-white xl:text-[32px] lg:text-[24px] md:text-[22px] text-[32px]  font-bold'>Do you confirm <br /> your<span className='text-[#FD3434]'> Presentation</span> in CHESSTIN 2nd edition?</h1>
                    </div>
                    <div className="w-full py-4 px-2 md:px-0 mt-8 ">
                        <div className='w-full bg-[#F5F5F5] p-2 md:p-1'>
                            <select className='outline-none bg-transparent text-black w-full px-4 border-none '>
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center mt-8">
                        <div className="border-[1.3px] border-[#f5f5f5] border-dashed p-[3px] md:hidden">
                            <button className='py-[6px] px-[40px] bg-[#fd3434] text-white text-[13px]'>Submit</button>
                        </div>
                        <div className="md:p-2 md:border-[1.3px] md:border-[#f5f5f5] md:border-dashed items-center justify-center md:rotate-45 md:mb-5 md:flex hidden">
                            <div className='h-[60px] w-[60px] bg-[#fd3434] md:flex hidden items-center justify-center'>
                                <button className='rotate-[-45deg]'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	    </div>
    </div>
  )
}

import React from 'react'
import cross from '../../assets/img/cross.png';
import arrow from '../../assets/img/arrow-form.png';
import './registerForm.css'

export default function Finalform() {
  return (
    <div className='h-screen md:w-[85%] w-full  ml-auto'>
        <div className="form-container h-full w-full relative flex items-center justify-center md:px-[20px] md:py-[100px] text-white ">
            <div className="md:bg-[#FD3434] bg-black w-full h-full xl:h-[460px] xl:w-[460px] md:h-[380px] md:w-[380px] lg:h-[400px] lg:w-[400px]  flex md:items-center items-center justify-center md:p-5 px-2 md:px-0 relative md:rotate-45">
                <div className='md:rotate-[-45deg] flex md:items-center items-start justify-start  flex-col h-fit md:w-[70%]  md:translate-x-[-20px] md:translate-y-[-20px] p-2 md:p-0'>
                    <div className="md:p-2 md:border-[1.3px] md:border-[#f5f5f5] md:border-dashed items-center justify-center md:rotate-45 md:mb-10 flex">
                        <div className='xl:h-[50px] xl:w-[50px] lg:h-[40px] lg:w-[40px] h-[35px] w-[35px] bg-black md:flex hidden items-center justify-center'>
                            <img src={cross} alt="time" className='md:rotate-[-45deg]'/>
                        </div><div className='cursor-pointer flex items-center md:hidden'>
                            <img src={arrow} alt="" className='w-[24px] h-[24px]'/>
                            <h2 className='capitalize text-[13px] text-[#bbbbbb]'>Go Back to website</h2>
                        </div>
                    </div>
                    <div className='md:text-center mt-2 pt-4 md:py-0'>
                        <h1 className='capitalize text-white xl:text-[55px] lg:text-[50px] md:text-[45px] text-[40px] font-bold'>Thank you <br />for Your <br /><span className='md:text-black text-[#FD3434]'> Registering</span></h1>
                    </div>
                </div>
            </div>
	    </div>
    </div>
  )
}

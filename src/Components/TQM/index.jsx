import React from 'react'
import './index.css'
import {BiPencil} from 'react-icons/bi';
import Insights from './insights'


function index() {
  return (
    <section className='mt-[25px] w-[85%] pl-12 h-[100vh]'>
      <div className='flex justify-center gap-32'>
    <div className='flex justify-center'>
      <div className='quality'>
        <h3>Quality</h3>
      </div> {/** Quality */}
      <div>  {/** Performance */}
      <h3 className='performance'>Performance</h3>
      </div> 
      </div>
      <div className='bg-[#283848] p-2 rounded-full'> <BiPencil className='w-[30px] h-[30px] rounded text-white'/></div>
    </div>
    <div className='mt-[35px] insights'>
    <h3 >Company Insights</h3>
    </div>
    
    <Insights/>
    </section>
  )
}

export default index
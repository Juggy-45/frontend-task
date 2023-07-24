import React from 'react'
import topCustomer from '../../assets/topCustomer.png'
import { BsArrowUpShort } from "react-icons/bs";

function ranking() {
  return (
    <section className='flex justify-between gap-4 mt-[30px]'>
      {/**************************  Top Customer  **********************/}
    {/* Badge for Top Customer */}
    <div className='bg-white top-box'>
       <div className='badge'>
        <p>Top Customer</p>
      </div>
        <div className=' flex gap-16 pt-[25px] pb-[25px] pl-[25px] pr-[25px] mt-[15px]'>      {/**Top Customer */}
            <div>    {/**left content */}
                <div className='flex gap-4'>
                    <img src={topCustomer} alt="Top Customer" width={75} />
                    <p className='m-auto'>Christina <br /> Ambrosia</p>
                </div>
                <div>
                    <h2 className='mt-4'>REVENUE / MONTH</h2>
                    <div className='flex'>
                    <h3>$ 13469.80 &nbsp;</h3>
                    <BsArrowUpShort style={{color:'#4EB862', margin:'auto'}} />
                    <h2 style={{color: '#4EB862', margin:'auto', font:'16px'}}>12%</h2>
                    </div>
                    
                </div>
            </div>
            <div>  {/**right content */}
                <div className='mt-[18px]' >
                    <h1 >$ 49,137</h1>
                    <h2 className='mt-[32px]'>PROCESSED ORDERS / MONTH</h2>
                </div>
                <div className='flex justify-between'>
                <h3>182</h3>
                <div className='flex'>
                    <BsArrowUpShort style={{color:'#FF134A', margin:'auto'}} />
                    <h2 style={{color: '#FF134A', margin:'auto', font:'16px'}}>8%</h2>
                    </div>
                </div>
            </div>
        </div> 
        </div>

      {/**************************  Top Rider  **********************/}

          {/* Badge for Top Customer */}
          <div className='bg-white top-box'>
       <div className='badge'>
        <p>Top Customer</p>
      </div>
        <div className=' flex gap-16 pt-[25px] pb-[25px] pl-[25px] pr-[25px] mt-[15px]'>      {/**Top Customer */}
            <div>    {/**left content */}
                <div className='flex gap-4'>
                    <img src={topCustomer} alt="Top Customer" width={75} />
                    <p className='m-auto'>Christina <br /> Ambrosia</p>
                </div>
                <div>
                    <h2 className='mt-4'>REVENUE / MONTH</h2>
                    <div className='flex'>
                    <h3>$ 13469.80 &nbsp;</h3>
                    <BsArrowUpShort style={{color:'#4EB862', margin:'auto'}} />
                    <h2 style={{color: '#4EB862', margin:'auto', font:'16px'}}>12%</h2>
                    </div>
                    
                </div>
            </div>
            <div>  {/**right content */}
                <div className='mt-[18px]' >
                    <h1 >$ 49,137</h1>
                    <h2 className='mt-[32px]'>PROCESSED ORDERS / MONTH</h2>
                </div>
                <div className='flex justify-between'>
                <h3>182</h3>
                <div className='flex'>
                    <BsArrowUpShort style={{color:'#FF134A', margin:'auto'}} />
                    <h2 style={{color: '#FF134A', margin:'auto', font:'16px'}}>8%</h2>
                    </div>
                </div>
            </div>
        </div> 
        </div>
      
      {/**************************  Top Rider  **********************/}
        
       {/* Badge for Top Customer */}
       <div className='bg-white top-box'>
       <div className='badge'>
        <p>Top Customer</p>
      </div>
        <div className=' flex gap-16 pt-[25px] pb-[25px] pl-[25px] pr-[25px] mt-[15px]'>      {/**Top Customer */}
            <div>    {/**left content */}
                <div className='flex gap-4'>
                    <img src={topCustomer} alt="Top Customer" width={75} />
                    <p className='m-auto'>Christina <br /> Ambrosia</p>
                </div>
                <div>
                    <h2 className='mt-4'>REVENUE / MONTH</h2>
                    <div className='flex'>
                    <h3>$ 13469.80 &nbsp;</h3>
                    <BsArrowUpShort style={{color:'#4EB862', margin:'auto'}} />
                    <h2 style={{color: '#4EB862', margin:'auto', font:'16px'}}>12%</h2>
                    </div>
                    
                </div>
            </div>
            <div>  {/**right content */}
                <div className='mt-[18px]' >
                    <h1 >$ 49,137</h1>
                    <h2 className='mt-[32px]'>PROCESSED ORDERS / MONTH</h2>
                </div>
                <div className='flex justify-between'>
                <h3>182</h3>
                <div className='flex'>
                    <BsArrowUpShort style={{color:'#FF134A', margin:'auto'}} />
                    <h2 style={{color: '#FF134A', margin:'auto', font:'16px'}}>8%</h2>
                    </div>
                </div>
            </div>
        </div> 
        </div>

    </section>
  )
}

export default ranking

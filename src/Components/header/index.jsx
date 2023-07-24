import React from 'react'
import Logo from '../../assets/logo.jpeg'
import Profile from '../../assets/profile.png'
import {FiMenu} from 'react-icons/fi';
import {CgSearch} from 'react-icons/cg';


function header() {
  return (
    <div className='bg-[#273848] flex pl-4 pr-8 pt-5 pb-5 justify-between'>   {/*  Top Menu bar  */}

        <div className='flex gap-10'>                                  {/*  Left Menu   */}
        <img src={Logo} alt="logo" width={65}/>
        <FiMenu style={{ width: '30px', height: '30px', margin: 'auto', color: 'white'  }} />
        </div>

        <div className='flex gap-10'>                                  {/*  Right Menu   */}
        <CgSearch style={{ width: '30px', height: '30px', margin: 'auto', marginLeft: "35px", color: 'white'  }} />
        <img className='rounded-full w-[45px] h-[45px] m-auto' src={Profile} alt="profile"/>
        </div>

    </div>
  )
}

export default header

import React from 'react'
import {VscHome} from 'react-icons/vsc';
import Doc from '../../assets/doc.png'
import {GoStack} from 'react-icons/go'
import {FaRegAddressCard} from 'react-icons/fa'
import {IoStorefrontOutline} from 'react-icons/io5'
import {BsBoxSeam} from 'react-icons/bs'
import {CiPercent} from 'react-icons/ci'
import {BsCreditCard} from 'react-icons/bs'
import {LiaBellSolid} from 'react-icons/lia'
import {LiaAwardSolid} from 'react-icons/lia'
import {TbHeadset} from 'react-icons/tb'
import {MdOutlineMenu} from 'react-icons/md'
import {IoIosPeople} from 'react-icons/io'
import { Link } from "react-router-dom";
import "./index.css"
 
 function sidebar() {
   return (
    <section className='bg-[#273848] mt-1 w-[95px] pt-4'>
    <div className='m-auto'>
    <Link to="/"> <VscHome className='sidebar-icon' style={{color: '#E11E25', width:'40px', height: '40px', cursor:'pointer'}} /></Link>
   <img className= "sidebar-img" src={Doc} alt="icon" />
   <GoStack className='sidebar-icon' style={{marginTop: '30px'}}/>
   <FaRegAddressCard className='sidebar-icon' style={{marginTop: '30px'}}/>
   <IoStorefrontOutline className='sidebar-icon' style={{marginTop: '30px'}}/>
   <BsBoxSeam className='sidebar-icon' style={{marginTop: '30px'}}/>
   <CiPercent className='sidebar-icon' style={{marginTop: '30px'}}/>
   <BsCreditCard className='sidebar-icon' style={{marginTop: '30px'}}/>
   <LiaBellSolid className='sidebar-icon' style={{marginTop: '30px'}}/>
   <TbHeadset className='sidebar-icon' style={{marginTop: '30px'}}/>
   <LiaAwardSolid className='sidebar-icon' style={{marginTop: '30px'}}/>
   <MdOutlineMenu className='sidebar-icon' style={{marginTop: '30px'}}/>
   <IoIosPeople className='sidebar-icon' style={{marginTop: '30px'}}/>
   </div>
  </section>
   )
 }
 
 export default sidebar
 
import React from 'react'
//logo
import logo from '../../assets/logoo.png'
import cta from "../../assets/CTA.png"
// icons
import { TfiDashboard } from "react-icons/tfi"
import { GoSettings } from "react-icons/go"
import { TbActivity } from "react-icons/tb"
import { AiOutlineUsergroupAdd } from "react-icons/ai"
import { BiUserPlus } from "react-icons/bi"
import { BiNetworkChart } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import { AiOutlineUsergroupDelete } from "react-icons/ai"

const SideBar = () => {
  return (
    <>
         <div className="w-72 h-[1042px] bg-bg-Primary">
            <div className="flex justify-center mt-6 mb-7">
                <img
                  className="w-auto h-auto cursor-pointer"
                  src={logo}
                  alt="company logo"
                />
            </div>
    
            <div className="flex flex-col px-0">
              <a href="/">
                <div className='pl-6 py-0 mx-5 text-center cursor-pointer mb-3 flex items-center transition-colors text-whitish-Gray hover:text-light-white'>
                  <div className="mr-2">
                    <TfiDashboard className="h-5 w-5 text-grayish-White" />
                  </div>
                  <div>
                    <p>Dashboard</p>
                  </div>
                </div>
              </a>
              <a href="/">
                <div className='pl-6 py-3 mx-5 text-center cursor-pointer mb-3 flex items-center transition-colors text-whitish-Gray hover:text-light-white'>
                  <div className="mr-2">
                    <GoSettings className="h-5 w-5 text-grayish-White" />
                  </div>
                  <div>
                    <p>Settings</p>
                  </div>
                </div>
              </a>
              <a href="/">
                <div className='pl-6 py-3 mx-5 text-center cursor-pointer mb-3 flex items-center transition-colors text-whitish-Gray hover:text-light-white'>
                  <div className="mr-2">
                    <TbActivity className="h-5 w-5 text-grayish-White" />
                  </div>
                  <div>
                    <p>Activities</p>
                  </div>
                </div>
              </a>
              <a href="/">
                <div className='pl-6 py-3 mx-5 text-center cursor-pointer mb-3 flex items-center transition-colors text-whitish-Gray hover:text-light-white'>
                  <div className="mr-2">
                    <AiOutlineUsergroupAdd className="h-5 w-5 text-grayish-White" />
                  </div>
                  <div>
                    <p>User</p>
                  </div>
                </div>
              </a>
              <a href="/">
                <div className='pl-6 py-3 mx-5 text-center cursor-pointer mb-3 flex items-center transition-colors text-whitish-Gray hover:text-light-white'>
                  <div className="mr-2">
                    <BiUserPlus className="h-5 w-5 text-grayish-White" />
                  </div>
                  <div>
                    <p>Added User</p>
                  </div>
                </div>
              </a>
              <a href="/">
                <div className='pl-6 py-3 mx-5 text-center cursor-pointer mb-3 flex items-center transition-colors text-whitish-Gray hover:text-light-white'>
                  <div className="mr-2">
                    <BiNetworkChart className="h-5 w-5 text-grayish-White" />
                  </div>
                  <div>
                    <p>Affliate</p>
                  </div>
                </div>
              </a>
              <hr className='bg-[#555] mx-6'/>
              <a href="/">
                <div className='pl-6 py-3 mx-5  text-center cursor-pointer mb-3 flex items-center transition-colors text-grayish-White hover:text-light-white'>
                  <div className="mr-2">
                    <CgProfile className="h-5 w-5 text-grayish-White" />
                  </div>
                  <div>
                    <p>Profile</p>
                  </div>
                </div>
              </a>
              <a href="/">
                <div className='pl-6 py-3 mx-5 text-center cursor-pointer mb-3 flex items-center transition-colors text-grayish-White hover:text-light-white'>
                  <div className="mr-2">
                    <AiOutlineUsergroupDelete className="h-5 w-5 text-grayish-White" />
                  </div>
                  <div>
                    <p>Logout</p>
                  </div>
                </div>
              </a>
            </div>
          <div className="flex justify-center  mt-[350px]">
              <img
                className="w-auto h-auto cursor-pointer"
                src={cta}
                alt="cta"
              />
          </div>
      </div>
    </>
  );
}
export default SideBar
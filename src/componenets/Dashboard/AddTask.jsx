import React from 'react'
//icon
import icon from "../../assets/icons/icon-plus-black.svg"

const AddTask = () => {
  return (
    <button className='flex justify-center items-center gap-4 bg-[#F2F4F5] py-3 px-6 rounded-xl mt-4 border border-dashed border-[#D5D5D5]'>
        <img src={icon} alt="add" />
        <span className='text-base text-[#7D8088] font-medium'>Add Task</span>
    </button>
  )
}

export default AddTask

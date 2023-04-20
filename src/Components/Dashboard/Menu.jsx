import React from 'react'
//component
import Card from './Card'
import AddedTask from './AddTask'
//images
import Img from "../../assets/🖼️ Card-Image.png"
import Img2 from "../../assets/🖼️ Card-Image-2.png"
import Img3 from "../../assets/🖼️ Card-Image -3.png"

const Todos = [
    {title: 'Highfidelity Design', subTitle: 'Make clear design and color', img: Img, progress: 0, message: 7, totalShare: 2 },
    {title: 'Usability testing', subTitle: 'Make clear design and color', img: null, progress: 0, message: 7, totalShare: 2 },
    {title: 'Highfidelity Design', subTitle: 'Make clear design and color', img: Img2, progress: 60, message: 7, totalShare: 2 },
    {title: 'Usability testing', subTitle: 'Make clear design and color', img: null, progress: 100, message: 7, totalShare: 2 },
    {title: 'Highfidelity Design', subTitle: 'Make clear design and color', img: Img3, progress: 100, message: 7, totalShare: 2 }
  ]
  

const Menu = () => {
  return (
    <section className='flex justify-between px-16 mt-16 gap-8'>
      <div className='flex flex-col'>
            <div className='flex justify-between items-center w-[312px] bg-[#F4F6F8] py-2 px-4'>
              <span className='font-medium text-[#858A93]'>To Do</span>
              <span className='py-2 px-3 bg-black rounded text-white'>3</span>
            </div>

            <div className='mt-6'>
              {Todos.map((todo, index) => { return todo.progress === 0 ? (
                  <Card title={todo.title} subTitle={todo.subTitle} img={todo.img} progress={todo.progress} message={todo.message} totalShare={todo.totalShare} bgColor={'#EBEBEB'} key={index} />
              ) : null })}
            </div>
            <AddedTask/>
      </div>
      <div className='flex flex-col'>
          <div className='flex justify-between items-center w-[312px] bg-[#F4F6F8] py-2 px-4'>
              <span className='font-medium text-[#858A93]'>Inprogress</span>
              <span className='py-2 px-3 bg-black rounded text-white'>1</span>
          </div>
          
          <div className='mt-6'>
            {Todos.map((todo, index) => { return todo.progress > 0 && todo.progress <= 99 ? (
                <Card title={todo.title} subTitle={todo.subTitle} img={todo.img} progress={todo.progress} message={todo.message} totalShare={todo.totalShare} bgColor={'#FF5F37'} key={index} />
            ) : null })}
          </div>
          <AddedTask/>
      </div>
      <div className='flex flex-col'>
            <div className='flex justify-between items-center w-[312px] bg-[#F4F6F8] py-2 px-4'>
              <span className='font-medium text-[#858A93]'>Completed</span>
              <span className='py-2 px-3 bg-black rounded text-white'>2</span>
            </div>
    
           <div className='mt-6'>
            {Todos.map((todo, index) => { return todo.progress === 100 ? (
                <Card title={todo.title} subTitle={todo.subTitle} img={todo.img} progress={todo.progress} message={todo.message} totalShare={todo.totalShare} bgColor={'#8BC488'} key={index} />
            ) : null })}
          </div>
          <AddedTask/>
      </div>
    </section>
  )
}

export default Menu

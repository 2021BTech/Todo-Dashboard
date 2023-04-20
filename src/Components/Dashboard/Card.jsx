import React from 'react'
//images
import Avatars from '../Features/WidgetSm'
//icons
import iconBullet from '../../assets/icons/icon-bullet.svg'
import iconMessage from '../../assets/icons/icon-message.svg'
import iconShare from '../../assets/icons/icon-share.svg'
import IconthreeDots from '../../assets/icons/icon-three-dots.svg'
// Component
import ProgressBar from '../Features/WidgetLg'


const Card = ({title, subTitle, img, progress, message, totalShare, key, bgColor}) => {
  return (
    <section className='flex flex-col gap-2 mt-4 p-4 bg-white rounded-xl' key={key}>
        {img ? (<img src={img} alt="cardimage" />) : null}
        <div className='flex justify-between'>
            <div>
                <h3 className='font-semibold text-base'>{title}</h3>
                <p className='text-sm text-[#B8B9BD]'>{subTitle}</p>
            </div>
            <img src={IconthreeDots} alt="icon"/>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex gap-1'>
                <img src={iconBullet} alt="icon" />
                <span className='text-sm text-[#B8B9BD]'>Progress </span>
            </div>
            <span className='text-sm font-medium'>2/10</span>
        </div>
        <ProgressBar completed={progress} bgColor={bgColor} />
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
                <span className='flex gap-1 text-xs text-[#B8B9BD]'><img src={iconMessage} alt="icon" />{message}</span>
                <span className='flex gap-1 text-xs text-[#B8B9BD]'><img src={iconShare} alt="icon" />{totalShare}</span>
            </div>
            <Avatars w={6}/>
        </div>
</section>
  )
}

export default Card

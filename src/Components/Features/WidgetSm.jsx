import React from 'react'
//images
import img from "../../assets/image.png"


const WidgetSm = ({w}) => {
  return (
      <div className="flex items-center justify-center">
        <img
            src={img}
            alt="img-name"
            className={`object-contain rounded-full w-${w} border-2 border-[#fff]`}
          />
          <img
            src={img}
            alt="img-name"
            className={`object-contain rounded-full w-${w} ml-[-10px] border-2 border-[#fff]`}
          />
          <img
            src={img}
            alt="avatar-name"
            className={`object-contain rounded-full w-${w} ml-[-10px] border-2 border-[#fff]`}
          />
      </div>
  )
}

export default WidgetSm

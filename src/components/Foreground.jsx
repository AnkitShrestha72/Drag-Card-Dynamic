import React, { useRef } from 'react'
import Card from './Card'



const Foreground = () => {
    const ref = useRef(null);
    const data = [
        {
            desc: "This data is comming from the array of objects",
            size: ".9mb",
            download: true,
            tag: {
                downloadOption: true,
                tagTitle: 'Download Now',
                tagColor: 'bg-green-600',
            }
        },
        {
            desc: "This data is comming from the array of objects",
            size: ".9mb",
            download: true,
            tag: {
                downloadOption: false,
                tagTitle: 'Download Now',
                tagColor: 'bg-green-600',
            }
        },
        {
            desc: "This data is comming from the array of objects",
            size: ".9mb",
            download: false,
            tag: {
                downloadOption: true,
                tagTitle: 'Download Now',
                tagColor: 'bg-red-600',
            }
        },
    ]
  return (
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5">
       {data.map((item, index)=> {
           return <Card data={item} key={index} reference={ref}/>
       })}
      </div>
  )
}

export default Foreground

import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"



const Card = ({ data , reference }) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={1} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-8 overflow-hidden">
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className="footer absolute bottom-0  w-full   left-0 ">
                <div className='flex items-center justify-between py-3 px-8 mb-3'>
                    <h5>{data.size}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.download ? <LuDownload size=".7em" color='#fff' /> : <IoMdClose />
                        }

                    </span>
                </div>
                {
                    data.tag.downloadOption && (
                        <div className={`tag w-full py-4 ${data.tag.downloadOption ? data.tag.tagColor : 'bg-sky-500'} flex items-center justify-center`}>
                            <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
                        </div>
                    )
                }
                
            </div>
        </motion.div>
    )
}

export default Card

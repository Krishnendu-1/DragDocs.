import React from 'react'
import { FaPager } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineDownloading } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"
function Cards({data, refer}) {
  return (
    <motion.div drag dragConstraints={refer} whileDrag={{scale:1.2}} className='w-48 h-52 bg-slate-700 rounded-2xl m-5 relative text-white flex-shrink-0'>
        <div>
          <div className='p-2'>
            <FaPager/>
            <p className=' leading-tight font-serif pt-2 text-sm tracking-tighter	'>{data.descript}
            </p>
            </div>
            <div className={`w-full h-[8vh] ${data.color} rounded-b-2xl p-2 absolute bottom-0 flex justify-between items-center`} >
        <FaExternalLinkAlt fontSize="0.9em" color='black'/>
        <p className='font-serif text-[2.5vh]'>{data.download}</p> 
        {data.icon ? <MdOutlineDownloading fontSize="1.2em" color='black'/> : <IoIosCloseCircle fontSize="1.3em" color='black'/>} 
{/* above is the use of conditional in jsx */}
        </div>
        
        </div>
      
        
    </motion.div>
  )
}

export default Cards

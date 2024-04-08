import React, { useRef } from 'react'
import Cards from './Cards'

function Foreground() {
  const reference= useRef("null");
  const data=[{
    descript:"This is a practice React project. It effeciently uses the use of React with Tailwind CSS to style the page.",
    download:"Download",
    icon:true,
    color: "bg-green-500",

  },
  {
    descript:"This is a practice React project. It effeciently uses the use of React with Tailwind CSS to style the page.",
    download:"Downloading...",
    icon:false,
color:"bg-blue-500"
  },
  {
    descript:"This is a practice React project. It effeciently uses the use of React with Tailwind CSS to style the page.",
    download:"Download",
    icon:true,
    color: "bg-green-500",

  },
] //"map" always work in array, thats why we used [] in the variable
  return (
   
      <div className='z-[3] w-screen h-screen left-0 top-0 fixed flex flex-wrap gap-10' ref={reference}>
        {data.map((item,index)=> (<Cards data={item} refer={reference}/>)
         )}
      </div>

  )
}

export default Foreground

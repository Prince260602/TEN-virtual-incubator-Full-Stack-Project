import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CartPages = () => {
  const [courses,setCourses] = useState(null)
  const {id} = useParams()
  console.log(id);
  useEffect(()=>{
      axios.get(`https://ten-0wfv.onrender.com/api/users/userbyId/${id}`)
      .then((res)=>console.log(res))
      .catch((error)=>console.log(error))
  },[])
  return (
    <div className=' md:w-[25%] p-4 shadow-lg cursor-pointer cart-page' >
        <img src='https://th.bing.com/th/id/OIP.4UVo1H7NZDA58csoTsj-PgAAAA?rs=1&pid=ImgDetMain' className='' />
        <div className=' font-bold text-base'>Name Of Course</div>
        <div className='text-sm'>Sandeep kumaar </div>
        <div className='font-bold'>4.4</div>
        <div className='flex flex-row'>
            <div className=' font-bold pr-2'>₹399 </div>

            <div> ₹3000</div>
        </div>
    </div>
  )
}

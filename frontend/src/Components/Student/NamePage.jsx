import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const NamePage = () => {
  const [name,setName] = useState(null)
  const {id} = useParams()
  console.log(id);
  useEffect(()=>{
      axios.get(`https://ten-official-1.onrender.com/api/users/userbyId/${id}`)
      .then((res)=>setName(res.data.data.username))
      .catch((error)=>console.log(error))
  },[])
  return (
    <div className="">
      <h1 className=" font-bold text-black text-2xl py-2 px-4 name-page ">
          <p> {name} </p>
      </h1>
    </div>
  );
};

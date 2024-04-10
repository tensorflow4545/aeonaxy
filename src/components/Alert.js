"use client";
import { FaRegBell } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
export default function Alert(){
    const [cross,setcross]=useState("true");
  return(
    <> 
        <div className="sm:grid hidden">
        <div className={`w-full ${cross=="true"?"h-[50px]":"h-[0px]"} ${cross=="true"?"visible":"invisible"} bg-blue-500 flex items-center px-[10px]`}>

            <div className="flex justify-center basis-5/6"><p className="text-[13px] text-white">Enable browser Notification to avoid missing out on important activities</p></div>

            <button><div className="w-max h-[30px] bg-blue-600 px-[10px] py-[10px] flex justify-center items-center rounded-sm basis ml-[40px]">
                <p className="text-[13px] text-white mt-[2px] mr-[5px]"><FaRegBell /></p>
                <p className="text-[13px] text-white">Enable notification</p>
            </div></button>

            <button onClick={()=>{setcross("false")}}><div className="text-white ml-[10px] basis"><RxCross1 /></div></button>

        </div>
        </div>
    </>
  )
}
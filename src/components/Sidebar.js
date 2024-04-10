"use client";
import collapse from "@/src/assets/sidebar.png";
import { Input } from "@material-tailwind/react";
import Image from "next/image";
import { FaUserCircle,FaRegBell } from "react-icons/fa";
import { CiSearch,CiClock1,CiChat1,CiLock  } from "react-icons/ci";
import { PiHandWaving,PiNotebookLight} from "react-icons/pi";
import { BiUserPlus } from "react-icons/bi";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { BsDownload } from "react-icons/bs";
import { LiaArchiveSolid } from "react-icons/lia";
import { IoMdArrowDropdown,IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
export default function Sidebar(){
    const [drop1,setdrop1]=useState("false");
    const [drop2,setdrop2]=useState("false");
    const [drop3,setdrop3]=useState("false");
    return(
        <>
           <aside className="h-screen">
             <nav className="h-max flex-col bg-slate-50 shadow-sm py-[10px]">

                <div className="w-full pb-[2px] pl-[10px] pr-[20px] flex items-center">
                  
                  <div className="pr-[10px] basis"><FaUserCircle /></div>

                  <p className="text-black font-bold lg:text-[14px] text-[7px] md:text-[10px] basis">Refro Team</p>
 
                  <div className=" basis ml-auto"><FaRegBell /></div>

                </div>

                <div className="flex pl-[10px] pt-[30px]">
                  
                <div className="basis-2/3 flex  bg-white text-black font-light text-[14px] rounded-lg">
                  
                  <Input
                    placeholder="Ask Your Assistant"
                    type="text"
                    className="pl-[5px]"
                  />
                </div>

                <div className="basis w-[40px] flex items-center justify-center  bg-white text-black font-light rounded-lg ml-[30px] mr-[10px]">
                <CiSearch />
                </div>

                </div>
             
                <div className=" bg-gray-200 items-center mx-[10px] mt-[20px] py-[5px] rounded-lg">
                <p className="text-[10px] text-black font-bold px-[10px] pb-[3px]">Your team has used 8/50 free docs</p>
                <p className="text-[10px] text-gray-600 t px-[10px] pb-[5px]">Upgrade to create unlimited docs</p>
                </div>
              

                <div className="px-[20px] py-[20px]">
                 
                 <div className="flex">
                 <CiClock1 />
                 <p className="text-[12px] text-black font-semibold ml-[10px]">Catch Up</p>
                 </div>

                </div>

                <div className="px-[20px] pb-[30px]">
                 
                 <div className="flex">
                 <CiChat1 />
                 <p className="text-[12px] text-black font-semibold ml-[10px]">Discussion</p>
                 </div>

                </div>


                <p className="text-[14px] text-black font-bold mx-[20px] mb-[20px]">Favorites</p>
                
                <div className="px-[20px] pb-[30px]">
                 
                 <div className="flex">
                 <p className="text-[14px]">👋</p>
                 <p className="text-[12px] text-black font-semibold ml-[10px]">Getting Started</p>
                 </div>

                </div>


                <p className="text-[14px] text-black font-bold mx-[20px] mb-[20px]">My Channels</p>
                
                <div className="px-[20px] pb-[20px]">
                 
                 <div className="flex" onClick={()=>{drop1=="true"?setdrop1("false"):setdrop1("true")}}>
                 <p className="text-[14px] mr-[10px]">{drop1=="true"?<IoMdArrowDropdown />:<IoMdArrowDropright />}</p>
                 <p className="text-[14px]"><CiLock /></p>
                 <p className="text-[12px] text-black font-semibold ml-[10px]">My Private Channel</p>
                 </div>
                 {/* dropdown */}
                 <Link href="/getstarted"><div className={`flex h-[30px] items-center justify-center bg-blue-100 rounded-lg  ${drop1=="false"?"hidden":" "} `}>
                 <p className="text-[14px]">👋</p>
                 <p className="text-[12px] text-black font-semibold ml-[10px]">Getting Started</p>
                 </div></Link>

                </div>

                <div className="px-[20px] pb-[20px]">
                 
                 <div className="flex" onClick={()=>{drop2=="true"?setdrop2("false"):setdrop2("true")}}>
                 <p className="text-[14px] mr-[10px]">{drop2=="true"?<IoMdArrowDropdown />:<IoMdArrowDropright />}</p>
                 <p className="text-[14px]"><PiNotebookLight /></p>
                 <p className="text-[12px] text-black font-semibold ml-[10px]">Enginnering</p>
                 </div>
                 {/* dropdown */}
                 <Link href="/getstarted"><div className={`flex h-[30px] items-center justify-center bg-blue-100 rounded-lg  ${drop2=="false"?"hidden":" "} `}>
                 <p className="text-[14px]">👋</p>
                 <p className="text-[12px] text-black font-semibold ml-[10px]">Getting Started</p>
                 </div></Link>

                </div>

                <div className="px-[20px]">
                 
                 <div className="flex" onClick={()=>{drop3=="true"?setdrop3("false"):setdrop3("true")}}>
                 <p className="text-[14px] mr-[10px]">{drop3=="true"?<IoMdArrowDropdown />:<IoMdArrowDropright />}</p>
                 <p className="text-[14px]"><PiNotebookLight /></p>
                 <p className="text-[12px] text-black font-semibold ml-[10px]">Product</p>
                 </div>
                 {/* dropdown */}
                 <Link href="/getstarted"><div className={`flex h-[30px] items-center justify-center bg-blue-100 rounded-lg  ${drop3=="false"?"hidden":" "} `}>
                 <p className="text-[14px]">👋</p>
                 <p className="text-[12px] text-black font-semibold ml-[10px]">Getting Started</p>
                 </div></Link>

                </div>


                {/* Lower part */}

                <div className="bottom-0 mt-[80px]">
                    
                <div className="px-[20px] pb-[20px]">
                 
                 <div className="flex">
                 <p className="text-[14px] mt-[3px]"><BiUserPlus /></p>
                 <p className="text-[12px] text-black font-semibold ml-[10px]">Add People</p>
                 </div>

                </div>

                <div className="px-[20px] pb-[20px]">
                 
                 <div className="flex">
                 <p className="text-[14px] mt-[3px]"><FaCircleHalfStroke /></p>
                 <p className="text-[12px] text-black font-semibold ml-[10px]">Templates</p>
                 </div>

                </div>

                <div className="px-[20px] pb-[20px]">
                 
                 <div className="flex">
                 <p className="text-[14px] mt-[3px]"><BsDownload /></p>
                 <p className="text-[12px] text-black font-semibold ml-[10px]">Shared with me</p>
                 </div>

                </div>

                <div className="px-[20px] pb-[20px]">
                 
                 <div className="flex">
                 <p className="text-[14px] mt-[3px]"><LiaArchiveSolid /></p>
                 <p className="text-[12px] text-black font-semibold ml-[10px]">Archived</p>
                 </div>

                </div>
                </div>

             </nav>
           </aside>
        </>
    )
}
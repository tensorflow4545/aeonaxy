"use client";
import Sidebar from "./Sidebar";
import Alert from "./Alert";
import img from "@/src/assets/image.png";
import Image from "next/image";
import { TbLayoutSidebarLeftCollapse,TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { useState } from "react";
export default function Home(){
  const [collapse,setcollapse]=useState("true");
    return(
      <>

          {/* Desktop view */}
          <div className="sm:grid hidden">
          <div className="w-full h-max">

           <Alert/>

            <div className="flex flex-row">
            <div className="lg:basis-1/6 sm:basis-1/3"><Sidebar/></div>


            <div className="lg:basis-5/6 bg-white lg:px-[150px] px-[40px] md:px-[80px] py-[40px]">
                
                <p className="text-[50px] text-black font-extrabold pb-[20px]">Getting Started</p>

                <div className="bg-slate-50 px-[20px] py-[20px] mb-[40px]">
                  <div className="flex justify-center">
                   
                   <div className="basis mr-[3px] top-0">🔒</div>
                    
                   <div className="basis text-[14px] text-[black] font-normal">
                     <p className="text-gray-600 font-semilight">This doc is in you <span className="font-bold">private channel</span> , where you can store your private work. You can share socs one by one from here ,  but to properly organize your team's knowledge base , use <span className="font-bold">workspace channels</span></p>
                     <p className="text-gray-600 font-semilight pt-[20px]">You can make channels <span className="font-bold">public</span> to make all docs visible to everyone on the teams, or <span className="font-bold">private</span> if you want the channel's docs to only vsible by a selection of teammates.</p>
                   </div>

                  </div>
                </div>

                <p className="text-[40px] text-black font-extrabold pb-[20px]">Collaborating with you teams with these three features</p>
               
                 <div className="flex"><span className="text-[20px] pr-[8px]">✍️</span> <p className="text-[20px] text-black font-extrabold pb-[20px]">Docs</p></div>
                
                <div className="w-full h-[350px] relative mb-[20px]">
                 <Image src={img} layout="fill" alt="image"></Image>
                </div>

                <div className="flex">
                <div className="basis-5/6 relative bg-blue-100 h-[30px]">
                  <input type="text" className=" rounded-md px-10 py-2 w-full" placeholder="Give it a go by typing / below"/>
                  <div className="absolute inset-y-0 left-0 flex items-center pr-3">
                   <div className="rounded-md px-[3px] pt-[5px]">
                   💡
                   </div>
                  </div>
                </div>

                <div className="basis-1/6 relative">
                 <div className="w-[30px] h-[30px] rounded-md bg-blue-200 ml-auto text-[20px] flex items-center justify-center">  ?</div>
                 <span className="absolute top-0 right-0 h-2 w-2 bg-blue-400 rounded-full"></span>                
                </div>

                </div>
            
            </div>
            </div>

          </div>
          </div>


          {/* Mobile view */}
          <div className="sm:hidden">
             <div className="w-full h-max relative">
               
               {/* <div className={`top-0  ${collapse=="false"?"invisible mt-[0px]":"visible mt-[10px]"}`} onClick={()=>{setcollapse("false")}}><TbLayoutSidebarRightCollapse /></div> */}
              
              <div className="bg-blue-300 h-[40px] w-full py-[5px] px-[10px]">
              <div className="my-[10px]" onClick={()=>{collapse=="true"?setcollapse("false"):setcollapse("true")}}><TbLayoutSidebarLeftCollapse /></div>
              </div>

              <div className="absolute">
              
              <div className={`z-50`}>
                <div className={`basis-1/3 flex ${collapse=="true"?"hidden":""}`}><Sidebar/></div>
              </div>
               
              {/* content */}
              <div className="px-[20px] py-[30px]">

              <p className="text-[20px] text-black font-extrabold pb-[20px]">Getting Started</p>

              <div className="bg-slate-50 px-[20px] py-[20px] mb-[40px]">
                  <div className="flex justify-center">
                   
                   <div className="basis mr-[3px] top-0">🔒</div>
                    
                   <div className="basis text-[10px] text-[black] font-normal">
                     <p className="text-gray-600 font-semilight">This doc is in you <span className="font-bold">private channel</span> , where you can store your private work. You can share socs one by one from here ,  but to properly organize your team's knowledge base , use <span className="font-bold">workspace channels</span></p>
                     <p className="text-gray-600 font-semilight pt-[20px]">You can make channels <span className="font-bold">public</span> to make all docs visible to everyone on the teams, or <span className="font-bold">private</span> if you want the channel's docs to only vsible by a selection of teammates.</p>
                   </div>

                   </div>
                  </div>

                <p className="text-[20px] text-black font-extrabold pb-[20px]">Collaborating with you teams with these three features</p>   
              
                <div className="flex"><span className="text-[10px] pr-[8px]">✍️</span> <p className="text-[10px] text-black font-extrabold pb-[20px]">Docs</p></div>
              
                <div className="w-full h-[200px] relative mb-[20px]">
                 <Image src={img} layout="fill" alt="img"></Image>
                </div>

                <div className="flex">
                <div className="basis-5/6 relative bg-blue-100 h-[30px]">
                  <input type="text" className=" rounded-md px-10 py-2 w-full" placeholder="Give it a go by typing / below"/>
                  <div className="absolute inset-y-0 left-0 flex items-center pr-3">
                   <div className="rounded-md px-[3px] pt-[5px]">
                   💡
                   </div>
                  </div>
                </div>

                <div className="basis-1/6 relative">
                 <div className="w-[30px] h-[30px] rounded-md bg-blue-200 ml-auto text-[20px] flex items-center justify-center">  ?</div>
                 <span className="absolute top-0 right-0 h-2 w-2 bg-blue-400 rounded-full"></span>                
                </div>

                </div>

              </div>

              </div>

             </div>
          </div>
      
      </>
    )
};
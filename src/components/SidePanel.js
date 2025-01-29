"use client";

import Link from "next/link";
import { useState } from "react";

const SidePanel = (toggle) => {
  const [open, setOpen] = useState(false);

  return open ? (
    <div className="sidepanel h-full fixed flex w-full max-w-[12rem] flex-col rounded-r-xl bg-white text-gray-700 shadow-xl shadow-gray-900/5 backdrop-blur-[3px] bg-opacity-90 p-0">
      <div className="flex items-center justify-between p-2 m-0">
      
        {/*<img className="w-[36] h-[36]" src={"./../favicon.ico"}></img>*/}
        <strong className="block font-sans text-l antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          kpunno
        </strong>
        <svg
          className="transition-transform ease-linear focus:-translate-x-1 hover:-translate-x-1"
          onClick={()=>setOpen(false)}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FA0FFF"
        >
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-80h280v-560H480v560Z" />
        </svg>
      </div>
      <hr />
      <nav className="flex min-w-[120px] flex-col font-sans text-base font-normal text-blue-gray-700">
        <div
          role="button"
          className="flex items-center w-full p-3 transition-all rounded-lg outline-none hover:text-[#FA0FFF] focus:text-[#FA0FFF] hover:translate-x-1"
        >
          <Link onClick={()=>setOpen(false)} href="./">Home</Link>
        </div>
        <div
          role="button"
          className="disabled flex items-center w-full p-3 transition-all rounded-lg outline-none hover:text-[#FA0FFF] focus:text-[#FA0FFF] hover:translate-x-1"
        >
          About
        </div>
        <div
          role="button"
          className="flex items-center w-full p-3 transition-all rounded-lg outline-none hover:text-[#FA0FFF] focus:text-[#FA0FFF] hover:translate-x-1"
        >
          <Link onClick={()=>setOpen(false)} href="/projects">Projects</Link>
        </div>
      </nav>
    </div>
  ) : (
    <div className="flex fixed justify-between items-center p-2 mb-1 hover:text-[#FA0FFF] focus:text-[#FA0FFF]">
  <svg
    className="transition-transform ease-in focus:translate-x-1 hover:translate-x-1"
    onClick={() => setOpen(true)}
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="#FA0FFF"
  >
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-80h280v-560H480v560Z" />
  </svg>
</div>

  );
};

export default SidePanel;

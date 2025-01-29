"use client";

import Link from "next/link";
import { useState } from "react";

const SidePanel = (toggle) => {
  const [open, setOpen] = useState(false);

  return open ? (
    <div className="sidepanel fixed flex w-full max-w-[12rem] flex-col rounded-r-xl bg-white text-gray-700 shadow-xl shadow-gray-900/5">
      <div className="flex items-center justify-between p-2 mb-1">
        {/*<img className="w-[36] h-[36]" src={"./../favicon.ico"}></img>*/}
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          &raquo; kpunno
        </h5>
        <svg
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
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        <div
          role="button"
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <Link onClick={()=>setOpen(false)} href="/">Home</Link>
        </div>
        <div
          role="button"
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          About
        </div>
        <div
          role="button"
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <Link onClick={()=>setOpen(false)} href="/projects">Projects</Link>
        </div>
      </nav>
    </div>
  ) : (
    <div className="p-2 mb-1 fixed flex w-full max-w-[12rem] flex-col rounded-xl text-gray-700">
      <svg
          onClick = {() => setOpen(true)}
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

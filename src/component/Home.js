import React from "react";
//import First from "./First";
import { useState, useEffect } from "react";
import pic1 from'./images/1.jpg'
import NavBar from "./NavBar";

const Home = () => {
  return (

    <div>
    <NavBar />
 


<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white py-6 sm:py-12">
  <div class="mx-auto max-w-4xl rounded-3xl bg-[#092540] p-20 text-center">
    <h2 class="text-5xl font-bold leading-tight text-white">Grow rapidly with our unlimited Web Design & development</h2>
    <p class="mt-5 text-xl leading-8 text-white">Get unlimited design & development requests for a flat monthly rate. Fast turnaround. No contracts or surprises. Cancel anytime.</p>
    <div class="mt-6 flex items-center justify-center gap-4">
      <button class="flex items-center justify-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-lg font-medium text-white">
        <span> Book a demo</span>
        <span
          ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6.00156 13.4016L4.60156 12.0016L8.60156 8.00156L4.60156 4.00156L6.00156 2.60156L11.4016 8.00156L6.00156 13.4016Z" fill="white" /></svg
        ></span>
      </button>
      <button class="flex items-center justify-center gap-2 rounded-full border border-white/50 px-5 py-3 text-lg font-medium text-white">
        <span> See Pricing</span>
        <span
          ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6.00156 13.4016L4.60156 12.0016L8.60156 8.00156L4.60156 4.00156L6.00156 2.60156L11.4016 8.00156L6.00156 13.4016Z" fill="white" /></svg
        ></span>
      </button>
    </div>
  </div>
</div>

    
    </div>
  )
}

export default Home
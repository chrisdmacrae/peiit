import { useRef, useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'

export const Spanner = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  })
  const [hookedYPostion, setHookedYPosition] = useState(0)
  useEffect(()=>{
    // hook into the onChange, store the current value as state.
    scrollYProgress.onChange(v=> setHookedYPosition(v - 0.5));
  },[scrollYProgress])

  return (
    <div className="w-screen overflow-hidden">
      <div className="w-[calc(200vw)] -translate-x-1/4 flex flex-col gap-2 lg:gap-10 items-center text-2xl lg:text-6xl dark:text-white py-10" ref={ref}>
        <motion.div 
          initial={{ transform: `translateX(${hookedYPostion * -10}rem)` }}
          whileInView={{ transform: `translateX(${hookedYPostion * -10}rem)` }}
          className="relative lg:-left-[5rem] basis-full shrink-0 flex flex-row flex-wrap items-center gap-10 mx-auto"
        >
          <ul className="underline col-start-1 flex flex-row gap-4">
            <li>Software developers</li>
            <li className="rounded-full bg-yellow-200 p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </li>
            <li>Remote workers</li>
          </ul>
          <span className="self-center bg-sky-700 rounded-full p-6 py-2 text-white">We've</span>
          <ul className="underline col-start-3 flex flex-row gap-4">
            <li>Local workers</li>
            <li className="rounded-full bg-green-200 p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </li>
            <li>Business analysts</li>
          </ul>
        </motion.div>
        <motion.div 
          initial={{ transform: `translateX(${hookedYPostion * -10}rem)` }}
          whileInView={{ transform: `translateX(${hookedYPostion * 10}rem)` }}
          className="relative left-[4.5rem] lg:left-[6.5rem] basis-full shrink-0 flex flex-row flex-wrap gap-10 mx-auto"
        >
          <ul className="underline col-start-3 flex flex-row items-center gap-4">
            <li>Designers</li>
            <li className="rounded-full bg-pink-200 p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
            </li>
            <li>Local companies</li>
          </ul>
          <span className="self-center bg-sky-700 rounded-full p-6 py-2 text-white">got</span>
          <ul className="underline col-start-3 flex flex-row items-center gap-4">
            <li>Remote companies</li>
            <li className="rounded-full bg-purple-200 p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </li>
            <li>Project managers</li>
          </ul>
        </motion.div>
        <motion.div 
          initial={{ transform: `translateX(${hookedYPostion * -10}rem)` }}
          whileInView={{ transform: `translateX(${hookedYPostion * -10}rem)` }}
          className="relative left-[0.5rem] lg:-left-[3rem] basis-full shrink-0 flex flex-row flex-wrap gap-10 mx-auto"
        >
          <ul className="underline col-start-3 flex flex-row items-center gap-4">
            <li>Teachers</li>
            <li className="rounded-full bg-sky-200 p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </li>
            <li>Remote organizations</li>
          </ul>
          <span className="self-center bg-sky-700 rounded-full p-6 py-2 text-center text-white">you</span>
          <ul className="underline col-start-3 flex flex-row items-center gap-4">
            <li>Local organizations</li>
            <li className="rounded-full bg-sky-200 p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </li>
            <li>Students</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
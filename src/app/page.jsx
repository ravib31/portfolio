"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration:1}}
    >

  <div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
  <div className="h-1/2 lg:h-full lg:w-1/2  relative ">
   <Image src="/web1.png" alt="me"  fill className="object-contain"/>
  </div>
  <div className="h-1/2  lg:h-full lg:w-3/4 flex flex-col gap-8 items-center justify-center">
  <h5
  className="text-2xl md:text-4xl font-bold overflow-hidden relative"
  style={{
    display: 'inline-block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    position: 'relative',
  }}
>
  <span
    style={{
      display: 'inline-block',
      animation: 'slide 5s linear infinite',
      position: 'relative',
    }}
  >
    HY! I AM RAVI BHASHKAR
  </span>
  <style>
    {`
      @keyframes slide {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    `}
  </style>
</h5>

      <h6 className="md:text-xl">Frontend Developer</h6>
      <div className="flex w-full gap-4 justify-center">
        <Link href="/portfolio">
        <button className="p-4 rounded-lg ring-1 ring-yellow-400 bg-black text-white">View My Work</button>
        </Link>
        <Link href="/contact">
        <button className="p-4 rounded-lg ring-1 ring-yellow-400">Contact Me</button>
        </Link>

      </div>
  </div>
  </div>
    </motion.div>
  );
};

export default Homepage;

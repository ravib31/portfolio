"use client";
import { motion } from "framer-motion"

import Link from "next/link";
import { links } from "../links";
import { useState } from "react";
import Image from "next/image";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const topVariants = {
    closed:{
      rotate:0,
    },
    opened:{
      rotate:45,
      backgroundColor:"rgb(255,255,255)"
    }
  }

  const centerVariants={
    closed:{
      opacity:1,
    },
    opened:{
      opacity:1,
      backgroundColor:"#20a251"
    }
  }

  const bottomVariants={
    closed:{
      rotate:0,
    },
    opened:{
      rotate:-45,
       backgroundColor:"rgb(255,255,255)"
    }
  };

  const listVariants={
    closed:{
      x:"100vw",
    },
    opened:{
      x:0,
      transition:{
        when:"beforeChildren",
        staggerChildren:0.2,

      }
    }
  }

  const listItemsVariants={
    closed:{
      x:-10,
      opacity:0
    },
    opened:{
      x:0,
      opacity:1,
    }

  }
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="group relative h-[40px]  lg:flex w-20 xl:justify-center ">
      
            <Link href="/" className="text-sm w-full bg-slate-600 rounded-md p-1 font-semibold flex items-center justify-center">
            <span className="text-white text-xl mr-2">र</span>
            <span className="w-22 h-6 px-1 rounded bg-white text-black flex items-center justify-center">V</span>
            </Link>
       
      </div>
      <div className="hidden md:flex gap-4 w-1/2 justify-center">
        {links.map((link) => (
         <NavLinks link={link} key={link.title}/>
        ))}
      </div>

      <div className="hidden md:flex gap-4 w-1/5">
        <Link href="https://github.com/ravib31">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/ravi-bhashkar/">
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
      </div>

      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div variants={topVariants} animate={open?"opened":"closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div variants={centerVariants} animate={open?"opened":"closed"} className="w-10 h-1 bg-black rounded"></motion.div>
          <motion.div variants={bottomVariants} animate={open?"opened":"closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>
        {open && (
          <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-green-600 text-white flex flex-col items-center justify-center gap-8  text-4xl z-40">
            {links.map((link) => (
              <motion.div variants={listItemsVariants} className="" key={link.title}>

              <Link href={link.url} >
                {link.title}
              </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

"use client";
import Brain from "@/components/brain";
import { mouse } from "@/mouse";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef(); // Ref for the container
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef(); // Ref for the skill section
  const isSkilledRefInView = useInView(skillRef, { margin: "-100px" });

  const toolsRef = useRef(); // Ref for the skill section
  const isToolsRefInView = useInView(toolsRef, { margin: "-100px" });

  const experienceRef = useRef(); // Ref for the experience section
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const skillsCss =
    "rounded p-2 text-sm cursor-pointer bg-green-500 text-white hover:bg-green-800 border border-yellow-400";

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div   className="h-full overflow-auto lg:flex no-scrollbar scroll-smooth"
       ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">About Me</h1>
            <p className="text-lg">
              A Fullstack Web Developer, skilled in web designing utilities such
              as HTML, CSS, JavaScript, React, NodeJS, MongoDB. Proficient in
              creating responsive and secure websites. Have worked on individual
              and collaborative projects. Eager to learn upcoming new
              technologies and acquiring more knowledge. Currently looking
              forward to enhancing my skill in a challenging work environment.
            </p>
            {mouse}
          </div>
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkilledRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Skills
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkilledRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="flex gap-4 flex-wrap"
            >
              <div className={skillsCss}>HTML</div>
              <div className={skillsCss}>CSS</div>
              <div className={skillsCss}>JavaScript</div>
              <div className={skillsCss}>React JS</div>
              <div className={skillsCss}>Redux</div>
              <div className={skillsCss}>Next JS</div>
              <div className={skillsCss}>Bootstrap</div>
              <div className={skillsCss}>Material UI</div>
              <div className={skillsCss}>Tailwind CSS</div>
              <div className={skillsCss}>AntDesign</div>
              <div className={skillsCss}>ShadCN</div>
              <div className={skillsCss}>Dashkit</div>
              <div className={skillsCss}>Firebase</div>
              <div className={skillsCss}>Node JS</div>
              <div className={skillsCss}>Express JS</div>
              <div className={skillsCss}>MongoDB</div>
              <div className={skillsCss}>My SQL</div>
            </motion.div>
            {mouse}
          </div>
          <div className="flex flex-col gap-12 justify-center" ref={toolsRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isToolsRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Tools
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isToolsRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="flex gap-4 flex-wrap"
            >
              <div className={skillsCss}>Github</div>
              <div className={skillsCss}>Git</div>
              <div className={skillsCss}>Netlify</div>
              <div className={skillsCss}>Vercel</div>
              <div className={skillsCss}>Render</div>
              <div className={skillsCss}>Postman</div>
              <div className={skillsCss}>ThunderClient</div>
              <div className={skillsCss}>Npm</div>
            </motion.div>
            {mouse}
          </div>
          <div className="flex flex-col gap-12 justify-center pb-40" ref={experienceRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Experience
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              <div className="flex justify-between h-48">
                <div className="">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    FullStack Developer
                  </div>
                  <div className="p-2 text-green-800 text-sm font-semibold">
                    2021 - 2024
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Tecvolo Labs
                  </div>
                </div>
                <div className="w-1/6 px-4">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-green-600 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;

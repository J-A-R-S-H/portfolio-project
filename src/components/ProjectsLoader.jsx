import { motion, useCycle } from "framer-motion";
import { useEffect } from "react";

const ProjectsLoader = ({word}) => {
  const slideUp = {
    initial: { x: "0" },
    exit: { x: "100vw", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }
  };



  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen inset-0 flex items-center justify-center fixed z-50 bg-gray-900 bg-background"
    >
      <motion.p
        className="text-white font-bold text-3xl"
      >
        {word}
      </motion.p>
    </motion.div>
  );
};

export default ProjectsLoader;

import { motion, useCycle } from "framer-motion";
import { useEffect } from "react";

const Preloader = () => {
  const slideUp = {
    initial: { y: "0" },
    exit: { y: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }
  };

  const words = ["Loading...", "Please wait...", "Fetching data...", "Almost there...", "Hang tight..."];
  const [currentWord, cycleWord] = useCycle(...words);

  useEffect(() => {
    const intervalId = setInterval(() => {
      cycleWord();
    }, 300); 
    return () => clearInterval(intervalId);
  }, [cycleWord]);

  const textAnimation = {
    animate: { opacity: [0.5, 1, 0.5], transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } }
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen inset-0 flex items-center justify-center fixed z-50 bg-gray-900 bg-background"
    >
      <motion.p
        variants={textAnimation}
        animate="animate"
        className="text-white font-bold text-3xl"
      >
        {currentWord}
      </motion.p>
    </motion.div>
  );
};

export default Preloader;

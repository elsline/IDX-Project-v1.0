/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { animate, motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

const Transition = ({ children }) => {
  return (
    <>
      <motion.div
        className="transition-page"
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.7,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Transition;

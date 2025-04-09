import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Page = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="min-h-screen p-4"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}


export default Page;
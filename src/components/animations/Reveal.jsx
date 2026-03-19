import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const Reveal = ({ children, width = 'fit-content', animationType = 'fadeUp', delay = 0.1, duration = 0.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  // Define diverse animation variants
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  const selectedVariant = variants[animationType] || variants.fadeUp;

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={selectedVariant}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration, delay, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;

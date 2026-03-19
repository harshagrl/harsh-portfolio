import { useRef } from 'react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';

export default function VariableProximity({
  text,
  className = '',
  delay = 0,
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 40%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        // Compute staggered opacity and y translation based on scroll progress
        const start = i * 0.02;
        const end = start + 0.3;
        const wordOpacity = useTransform(smoothProgress, [start, end], [0.1, 1]);
        const wordY = useTransform(smoothProgress, [start, end], [20, 0]);

        return (
          <motion.span
            key={i}
            className="mr-3 mb-2 inline-block"
            style={{ opacity: wordOpacity, y: wordY }}
          >
            {word}&nbsp;
          </motion.span>
        );
      })}
    </div>
  );
}

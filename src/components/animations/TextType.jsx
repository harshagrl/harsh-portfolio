import { motion } from 'framer-motion';

export default function TextType({
  text,
  className = '',
  delay = 0,
  speed = 0.05,
  cursorClassName = '',
}) {
  const characters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speed,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, display: 'none' },
    visible: { opacity: 1, display: 'inline-block' },
  };

  return (
    <motion.span
      className={`inline-block whitespace-pre-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={childVariants}>
          {char}
        </motion.span>
      ))}
      <motion.span
        className={`inline-block ml-1 ${cursorClassName}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
      >
        |
      </motion.span>
    </motion.span>
  );
}

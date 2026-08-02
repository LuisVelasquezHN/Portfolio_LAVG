import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const itemVariantsLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const itemVariantsScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/**
 * AnimatedSection - Wrapper that triggers staggered animations when section enters viewport
 * @param {string} direction - "up" | "left" | "scale" (animation direction)
 * @param {string} className - additional classNames
 * @param {number} threshold - viewport threshold (0-1)
 */
export const AnimatedSection = ({
  children,
  className = "",
  direction = "up",
  threshold = 0.15,
  once = true,
}) => {
  const getVariant = () => {
    switch (direction) {
      case "left":
        return itemVariantsLeft;
      case "scale":
        return itemVariantsScale;
      default:
        return itemVariants;
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
    >
      {children}
    </motion.div>
  );
};

/**
 * AnimatedItem - Individual item inside AnimatedSection that animates with the stagger
 */
export const AnimatedItem = ({ children, className = "", direction = "up" }) => {
  const getVariant = () => {
    switch (direction) {
      case "left":
        return itemVariantsLeft;
      case "scale":
        return itemVariantsScale;
      default:
        return itemVariants;
    }
  };

  return (
    <motion.div className={className} variants={getVariant()}>
      {children}
    </motion.div>
  );
};

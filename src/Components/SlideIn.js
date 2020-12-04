import { motion, AnimatePresence } from 'framer-motion'

export const SlideIn = ({
  children,
  isActive = false,
  slide = 30,
  key = 'auniquestring',
}) => (
  <AnimatePresence>
    {isActive && (
      <motion.div
        key={key}
        exit={{ opacity: 0, x: slide }}
        initial={{ opacity: 0, x: slide }}
        animate={{ opacity: 1, x: 0 }}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
)
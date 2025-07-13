import { motion } from "framer-motion";

export default function AnimatedButton({ label }: { label: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2 mt-4 border-2 border-neon-pink text-neon-pink rounded-full font-synth shadow-neon transition-all duration-300 hover:bg-neon-pink hover:text-black"
    >
      {label}
    </motion.button>
  );
}

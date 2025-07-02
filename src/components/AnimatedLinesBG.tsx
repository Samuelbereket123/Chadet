import { motion } from 'framer-motion';

const LINES = 12;

export default function AnimatedLinesBG() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 w-full h-full overflow-hidden">
      {Array.from({ length: LINES }).map((_, i) => {
        const left = `${(i / (LINES - 1)) * 100}%`;
        const delay = i * 0.4;
        const duration = 8 + (i % 3); // randomize for variety

        return (
          <motion.div
            key={i}
            className="absolute top-0 w-[1px] h-full bg-green-500 opacity-10 blur-sm"
            style={{ left }}
            initial={{ y: 0 }}
            animate={{ y: [-20, 20, -20] }}
            transition={{
              duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }}
          />
        );
      })}
    </div>
  );
}

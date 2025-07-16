import { motion } from 'framer-motion';

const pillars = [
  {
    title: "Education",
    description: "Empowering children through quality education and learning opportunities that build a foundation for their future success."
  },
  {
    title: "Healthcare",
    description: "Ensuring access to essential healthcare services and promoting healthy development for children and communities."
  },
  {
    title: "Protection",
    description: "Safeguarding children's rights and providing safe environments where they can grow and thrive without fear."
  },
  {
    title: "Community Development",
    description: "Strengthening communities through sustainable development initiatives and capacity building programs."
  },
  {
    title: "Advocacy",
    description: "Advocating for children's rights and influencing policies that create lasting positive change in society."
  }
];

export default function PillarsSection() {
  return (
    <section className="relative w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft glowing gradients and blurred shapes (same as Hero) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Left Glow */}
        <div className="absolute left-0 top-1/4 w-[40vw] h-[60vw] max-w-[500px] bg-green-200 opacity-40 blur-3xl rounded-full" />
        {/* Right Glow (now matches left) */}
        <div className="absolute right-0 top-1/4 w-[40vw] h-[60vw] max-w-[500px] bg-green-200 opacity-40 blur-3xl rounded-full" />
        {/* Top Right Abstract Shape */}
        <div className="absolute right-10 top-0 w-60 h-60 bg-green-100 opacity-30 blur-2xl rounded-full rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-800 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Pillars
        </motion.h2>

        {/* First row: 2 pillars */}
        <div className="flex flex-col items-center gap-8 mb-8">
          <div className="w-full flex flex-col sm:flex-row justify-center gap-8">
            {pillars.slice(0, 2).map((pillar, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg hover:shadow-xl border border-green-100 hover:scale-[1.05] transition-all duration-500 p-8 lg:p-10 xl:p-12 w-64 h-64 flex flex-col justify-center items-center mx-auto"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <h3 className="text-green-700 font-bold text-xl md:text-2xl lg:text-3xl text-center mb-6">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg lg:text-xl text-center px-2 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second row: 3 pillars */}
        <div className="flex flex-col items-center gap-8">
          <div className="w-full flex flex-col sm:flex-row justify-center gap-8">
            {pillars.slice(2, 5).map((pillar, index) => (
              <motion.div
                key={index + 2}
                className="bg-white shadow-lg hover:shadow-xl border border-green-100 hover:scale-[1.05] transition-all duration-500 p-8 lg:p-10 xl:p-12 w-64 h-64 flex flex-col justify-center items-center mx-auto"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: (index + 2) * 0.15, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <h3 className="text-green-700 font-bold text-xl md:text-2xl lg:text-3xl text-center mb-6">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg lg:text-xl text-center px-2 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
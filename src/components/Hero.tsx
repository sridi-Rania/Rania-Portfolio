import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20"></div>
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '5%', left: '5%' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-l from-secondary/30 to-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '5%', right: '5%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '50%', right: '20%' }}
        />
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,23,42,0.7)_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Decorative element above name */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 flex justify-center"
          >
            <div className="relative">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-5 h-5 border-2 border-primary rounded-full bg-dark"></div>
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 relative"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
                Rania Sridi
              </span>
              {/* Subtle glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent blur-2xl opacity-30">
                Rania Sridi
              </span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6"
          >
            <p className="text-2xl md:text-3xl font-light text-gray-200 mb-2">
              Ingénieure en Intelligence Artificielle
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <motion.div
                className="w-2 h-2 bg-primary rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Passionnée par la création de modèles d'IA performants et innovants.
            <br />
            <span className="text-primary/80">Transformons les données en solutions intelligentes.</span>
          </motion.p>

          <motion.div
            className="flex gap-5 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: FaGithub, href: "https://github.com/sridi-Rania", label: "GitHub" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/rania-sridi", label: "LinkedIn" },
              { icon: FaEnvelope, href: "mailto:raniasridi25@gmail.com", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group relative w-14 h-14 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Background with gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="absolute inset-[2px] bg-slate-900 rounded-xl"></div>
                
                {/* Icon */}
                <social.icon className="relative text-2xl text-gray-400 group-hover:text-white transition-colors duration-300 z-10" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 overflow-hidden rounded-xl font-semibold text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600"></div>
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              ></motion.div>
              <span className="relative z-10 flex items-center gap-2">
                Voir mes projets
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              className="group relative px-8 py-4 overflow-hidden rounded-xl font-semibold border-2 border-primary/50 text-white transition-all duration-300 hover:border-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
              <span className="relative z-10">Me contacter</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaArrowDown className="text-2xl text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

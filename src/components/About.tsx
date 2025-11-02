import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-slate-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          À Propos
        </motion.h2>

        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl w-full"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-3xl font-bold mb-4 text-white">Hello! 👋</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
Je suis une ingénieure en intelligence artificielle passionnée par ce domaine, avec plus de trois ans d’expérience sur divers projets liés à l’IA. Curieuse, rigoureuse et motivée par l’apprentissage continu, je cherche constamment à perfectionner mes compétences et à relever de nouveaux défis technologiques.                </p>
                <p className="text-gray-300 leading-relaxed">
                 Mon parcours m’a permis de maîtriser diverses technologies liées à l’intelligence artificielle et de participer à des projets variés, allant du développement de modèles d’apprentissage automatique à l’intégration de solutions IA dans des applications web complètes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

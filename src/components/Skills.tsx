import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaPython, FaGitAlt } from 'react-icons/fa';
import { 
  SiTypescript, 
  SiJavascript, 
  SiTensorflow, 
  SiPytorch, 
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiDjango,
  SiNextdotjs,
  SiFastapi,
  SiHuggingface
} from 'react-icons/si';
import { TbBrandPython } from 'react-icons/tb';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, color: 'text-yellow-400' },
        { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-300' },
        { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-500' },
      ]
    },
    {
      title: 'ML/AI Frameworks',
      skills: [
        { name: 'TensorFlow', icon: <SiTensorflow />, color: 'text-orange-500' },
        { name: 'PyTorch', icon: <SiPytorch />, color: 'text-red-500' },
        { name: 'Keras', icon: <TbBrandPython />, color: 'text-red-400' },
        { name: 'Scikit-Learn', icon: <SiScikitlearn />, color: 'text-orange-400' },
        { name: 'Hugging Face', icon: <SiHuggingface />, color: 'text-yellow-500' },
      ]
    },
    {
      title: 'Data & Computer Vision',
      skills: [
        { name: 'Pandas', icon: <SiPandas />, color: 'text-blue-400' },
        { name: 'NumPy', icon: <SiNumpy />, color: 'text-cyan-500' },
        { name: 'Matplotlib', icon: <TbBrandPython />, color: 'text-purple-400' },
        { name: 'OpenCV', icon: <SiOpencv />, color: 'text-green-500' },
        { name: 'YOLO', icon: <TbBrandPython />, color: 'text-pink-500' },
        { name: 'OCR', icon: <TbBrandPython />, color: 'text-indigo-400' },
      ]
    },
    {
      title: 'Web Frameworks',
      skills: [
        { name: 'Django', icon: <SiDjango />, color: 'text-green-600' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
        { name: 'FastAPI', icon: <SiFastapi />, color: 'text-teal-500' },
        { name: 'Beautiful Soup', icon: <FaPython />, color: 'text-yellow-500' },
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-500' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Compétences
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6 text-center md:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="card text-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + index * 0.05 }}
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                  >
                    <div className={`text-5xl mb-4 ${skill.color} group-hover:scale-125 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-sm md:text-base font-semibold text-white">{skill.name}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

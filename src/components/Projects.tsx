import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
  company?: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [
      {
      title: 'ScentMatch',
      description: 'ScentMatch est un projet innovant qui combine un site web regroupant les parfums de luxe et de moyenne gamme avec des modèles d’IA avancés basés sur les embeddings. L’intelligence artificielle permet aux clients de scanner les notes olfactives d’un parfum de luxe et de leur proposer instantanément des alternatives similaires de moyenne gamme, offrant ainsi une expérience personnalisée et économique.',
      technologies: ['Python', 'Prisma', 'Embeddings','Matching',  'Intelligent search',  'Postgress' , ],
      image: "https://imgs.search.brave.com/js_JExybGsgyZwTJR3kBY_tVXHhO1BuMh_-rH9nfaoI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/MzU4MDI5MC9mci9w/aG90by9wdWx2JUMz/JUE5cmlzYXRpb24t/JUMzJUEwLWxhLW1h/aW4tZHUtcGFyZnVt/LXN1ci1jYXJ0ZS1w/b3VyLXRlc3Rlci1s/ZS1wYXJmdW0tZW4t/dnVlLXJhcHByb2No/JUMzJUE5ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9OTJB/ZEo5YXFPWUJfbllw/MmJLYVk5ZnhIT2hv/THl2ZUZDUWFBM0xH/SEhzTT0",
      github: 'https://github.com/sridi-Rania/ScentMatch',
      live: '#',
    },
    {
      title: 'Healthcare OCR & TTS System',
      description: 'Application full-stack pour professionnels de santé : lecture automatique et vocalisation de documents médicaux avec OCR arabe et TTS.',
      technologies: ['Python', 'PyTorch', 'Doctr', 'FastAPI', 'React', 'OpenCV'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      github: '#',
      live: '#',
      company: 'Data2Innov (Fév 2025 – Août 2025)',
    },
    {
  title: 'RAG Insurance Assistant',
  description: 'RAG Insurance Assistant est un chatbot intelligent spécialisé dans le domaine de l’assurance, conçu pour fournir des réponses précises et contextualisées en temps réel. Il s’appuie sur une base vectorielle FAISS pour effectuer des recherches sémantiques rapides et sur Sentence-Transformers pour générer des embeddings de haute qualité. Le modèle DeepSeek, intégré via OpenRouter API, permet une génération de réponses contextualisée et fiable. Une interface interactive développée avec Streamlit offre une expérience conversationnelle fluide, tandis que l’utilisation de Docker garantit une déployabilité simple, reproductible et portable.',
  technologies: ['Python', 'FAISS', 'Sentence-Transformers', 'LangChain', 'Streamlit', 'Docker', 'Git', 'OpenRouter API', 'TensorFlow', 'PyTorch'],
  image: 'https://www.hashstudioz.com/blog/rag-in-artificial-intelligence/',
  github: '#',
  live: '#',
},

    {
      title: 'Road Sign Detection Mobile App',
      description: 'Système de détection de panneaux routiers en temps réel avec YOLOv11 intégré dans une application mobile React Native.',
      technologies: ['Python', 'YOLOv11', 'React Native', 'TensorFlow Lite', 'OpenCV'],
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop',
      github: '#',
      live: '#',
    },
    {
      title: 'Vibratory Sound Analysis System',
      description: 'Système de classification de sons vibratoires pour détection de pannes avec CNN atteignant 99% de précision.',
      technologies: ['Python', 'NumPy', 'Matplotlib', 'Keras', 'TensorFlow', 'CNN'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      github: '#',
      live: '#',
    },
    {
      title: 'Tunisian Dialect Speech Recognition',
      description: 'Algorithmes de transcription et analyse vocale en dialecte tunisien pour applications médicales avec collecte de dataset personnalisé.',
      technologies: ['Python', 'PyTorch', 'NumPy', 'Pandas', 'Librosa'],
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop',
      github: '#',
      live: '#',
      company: 'Hope Horizon (Juin 2024 - Août 2024)',
    },
    {
      title: 'Arabic OCR Fine-tuning',
      description: 'Adaptation du modèle Doctr pour reconnaissance OCR arabe avec dataset  généré .',
      technologies: ['Python', 'PyTorch', 'Doctr', 'OpenCV'],
      image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=600&fit=crop',
      github: 'https://github.com/sridi-Rania/Doctr-finetune-for-arabic',
      live: '#',
    },
  
   
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Mes Projets
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="card group overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              {project.company && (
                <p className="text-sm text-secondary mb-2 font-semibold">
                  📍 {project.company}
                </p>
              )}
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-700 text-primary text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, Database, Code, BarChart, FileText, ChevronRight, MapPin } from "lucide-react";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } },
};

const STAGGER_CHILDREN_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans relative overflow-x-hidden">
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(100,100,255,0.05)_0%,transparent_70%)] pointer-events-none z-0" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-[60px] py-6 md:py-10 bg-[#0A0A0A]/90 backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[18px] font-bold tracking-[-0.5px]"
        >
          AB.
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-8 text-[14px] uppercase tracking-[1px] text-[#666666]"
        >
          <a href="mailto:butaravnish1@gmail.com" className="hover:text-[#E5E5E5] transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-[#E5E5E5] transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-[#E5E5E5] transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </nav>

      <main className="px-8 md:px-[60px] max-w-7xl mx-auto pt-40 pb-24 space-y-32 relative z-10">
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="show"
          variants={STAGGER_CHILDREN_VARIANTS}
          className="max-w-4xl pt-12 md:pt-24"
        >
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="text-[14px] uppercase tracking-[4px] text-[#666666] mb-5 block">
            Available for opportunities
          </motion.div>
          <motion.h1 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-6xl md:text-[100px] lg:text-[120px] leading-[0.9] font-semibold tracking-[-0.04em] md:-ml-2 mb-10"
          >
            Avnish<br />Butar
          </motion.h1>
          <motion.p 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-[18px] leading-[1.6] text-[#666666] max-w-[450px] mb-10"
          >
            Data Science Student specializing in Machine Learning, Data Analytics, and Python. Passionate about transforming raw data into actionable insights and building intelligent systems.
          </motion.p>
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-wrap items-center gap-6">
            <a href="mailto:butaravnish1@gmail.com" className="text-[18px] font-light underline underline-offset-8 hover:text-[#E5E5E5] text-[#E5E5E5] transition-colors">
              Get in touch
            </a>
            <a href="#projects" className="text-[18px] font-light underline underline-offset-8 hover:text-[#E5E5E5] text-[#666666] transition-colors">
              View Projects
            </a>
          </motion.div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER_CHILDREN_VARIANTS}
          className="border-t border-white/10 pt-12"
        >
          <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-[11px] uppercase tracking-[2px] text-[#666666] mb-8">Education</motion.h2>
          <div className="space-y-4">
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="bg-white/[0.03] border border-white/5 rounded-[4px] p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-[16px] font-medium mb-1">Noida Institute of Engineering and Technology</h3>
                <p className="text-[12px] text-[#666666]">Data Science B. Tech · GR. Noida</p>
              </div>
              <div className="flex flex-col md:items-end gap-2">
                <span className="text-[12px] text-[#666666]">Nov 2022 - July 2026</span>
                <span className="px-3 py-1 border border-white/10 rounded-full text-[12px] text-[#666666]">CGPA: 8.31</span>
              </div>
            </motion.div>

            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="bg-white/[0.03] border border-white/5 rounded-[4px] p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-[16px] font-medium mb-1">Jawahar Navodaya Vidyalaya</h3>
                <p className="text-[12px] text-[#666666]">PCM Intermediate · Sardhana, Meerut</p>
              </div>
              <div className="flex flex-col md:items-end gap-2">
                <span className="text-[12px] text-[#666666]">April 2019 - July 2020</span>
                <span className="px-3 py-1 border border-white/10 rounded-full text-[12px] text-[#666666]">Percentage: 87.8%</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER_CHILDREN_VARIANTS}
          className="border-t border-white/10 pt-12"
        >
          <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-[11px] uppercase tracking-[2px] text-[#666666] mb-8">Expertise</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Languages", icon: <Code className="w-5 h-5 mb-4 text-[#666666]" />, skills: ["C++", "Python"] },
              { title: "Libraries", icon: <Database className="w-5 h-5 mb-4 text-[#666666]" />, skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"] },
              { title: "Tools", icon: <BarChart className="w-5 h-5 mb-4 text-[#666666]" />, skills: ["Tableau", "Google Colab"] },
              { title: "Databases", icon: <FileText className="w-5 h-5 mb-4 text-[#666666]" />, skills: ["SQL"] },
            ].map((category, idx) => (
              <motion.div key={idx} variants={FADE_UP_ANIMATION_VARIANTS} className="bg-white/[0.03] border border-white/5 rounded-[4px] p-6">
                {category.icon}
                <h3 className="text-[16px] font-medium mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1.5 border border-white/10 rounded-full text-[12px] text-[#666666]">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER_CHILDREN_VARIANTS}
          className="border-t border-white/10 pt-12"
        >
          <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-[11px] uppercase tracking-[2px] text-[#666666] mb-8">Featured Projects</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Car Price Prediction",
                tags: ["Machine Learning", "Streamlit", "Python"],
                description: "Built a machine learning regression model to predict used car prices using features like brand, year, fuel type, and kilometers driven. Handled data cleaning, one-hot encoding, and deployed via Streamlit for real-time predictions.",
              },
              {
                title: "NewsFeed Analysis",
                tags: ["SQL", "Tableau", "Data Analytics"],
                description: "Analyzed user engagement data from a news feed platform. Cleaned and transformed raw data using SQL and developed an interactive Tableau dashboard to uncover trends in user activity and sentiment distribution.",
              },
              {
                title: "Fake News Detection",
                tags: ["Machine Learning", "NLP", "Streamlit"],
                description: "Built a classification system using NLP to identify misleading news articles. Performed text preprocessing (TF-IDF vectorization) and trained Logistic Regression and Random Forest classifiers.",
              }
            ].map((project, idx) => (
              <motion.div 
                key={idx} 
                variants={FADE_UP_ANIMATION_VARIANTS} 
                className="bg-white/[0.03] border border-white/5 rounded-[4px] p-6 flex flex-col justify-between hover:bg-white/[0.05] transition-colors"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-[16px] font-medium">{project.title}</h3>
                    <a href="#" className="text-[20px] opacity-50 hover:opacity-100 transition-opacity">
                      ↗
                    </a>
                  </div>
                  <p className="text-[14px] leading-[1.6] text-[#666666] mb-8">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1.5 border border-white/10 rounded-full text-[12px] text-[#666666]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER_CHILDREN_VARIANTS}
          className="border-t border-white/10 pt-12"
        >
          <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-[11px] uppercase tracking-[2px] text-[#666666] mb-8">Certifications</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Google Data Analytics", issuer: "Coursera" },
              { title: "Data Analytics Job Simulation", issuer: "Forage" },
              { title: "Python Project for Data Science", issuer: "Coursera" },
            ].map((cert, idx) => (
              <motion.div 
                key={idx} 
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="bg-white/[0.03] border border-white/5 rounded-[4px] p-6 flex flex-col justify-between"
              >
                <div className="mb-4">
                  <FileText className="w-5 h-5 text-[#666666] mb-4" />
                  <h3 className="text-[16px] font-medium">{cert.title}</h3>
                </div>
                <p className="text-[12px] text-[#666666]">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-8 md:px-[60px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="text-[11px] uppercase tracking-[2px] text-[#666666] block mb-2">Let's Talk</span>
          <a href="mailto:butaravnish1@gmail.com" className="text-[18px] font-light underline underline-offset-8 hover:text-[#E5E5E5] transition-colors">
            butaravnish1@gmail.com
          </a>
        </div>
        <div className="text-[12px] text-[#666666]">
          © {new Date().getFullYear()} Avnish Butar.
        </div>
      </footer>
    </div>
  );
}

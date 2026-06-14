import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronRight, Lock, Mail, Menu, Server, Shield, Terminal, X } from 'lucide-react';
import { Methodology } from './components/Methodology';
import { Toolstack } from './components/Toolstack';

const navLinks = ['Services', 'Methodology', 'Projects', 'Contact'];
const contactEmail = 'hello@nulltrace.security';
const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
];

export default function App() {
  return (
    <div className="min-h-screen terminal-scroll overflow-x-hidden relative bg-[#0D1117]">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      
      <main id="main-content" className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-32">
        <Hero />
        <Services />
        <Methodology />
        <Toolstack />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" onClick={closeMenu} className="flex items-center gap-2 text-[#00FF00] font-mono" aria-label="NULLTRACE home">
            <Terminal size={20} />
            <span className="font-bold tracking-tight">./NULLTRACE</span>
          </a>

          <nav aria-label="Primary navigation" className="hidden md:flex gap-6 font-mono text-sm shadow-sm backdrop-blur-none">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-[#00FF00] transition-colors drop-shadow-md">
                <span className="text-gray-600 mr-1" aria-hidden="true">~/</span>{item.toLowerCase()}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="md:hidden flex h-10 w-10 items-center justify-center border border-gray-800 text-[#00FF00] transition-colors hover:border-[#00FF00]/50 hover:bg-[#00FF00]/10"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden h-dvh overflow-hidden bg-[#0D1117] px-6 pt-24 pb-6"
          >
            <motion.nav
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="flex h-full flex-col justify-between font-mono"
            >
              <div>
                <p id="mobile-menu-title" className="mb-8 text-xs uppercase tracking-widest text-gray-500">navigation index</p>
                <div className="space-y-2">
                  {navLinks.map((item, i) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={closeMenu}
                      className="group flex items-center justify-between border border-gray-800 bg-[#161B22]/40 px-4 py-5 text-2xl uppercase text-gray-200 transition-colors hover:border-[#00FF00]/50 hover:text-[#00FF00]"
                    >
                      <span>
                        <span className="mr-3 text-sm text-gray-500" aria-hidden="true">0{i + 1}</span>
                        {item}
                      </span>
                      <ChevronRight aria-hidden="true" size={20} className="text-gray-600 transition-colors group-hover:text-[#00FF00]" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="border border-gray-800 bg-[#05080D]/80 p-4">
                <a href={`mailto:${contactEmail}`} className="mb-4 flex items-center gap-3 text-sm text-[#00FF00]">
                  <Mail size={16} />
                  {contactEmail}
                </a>
                <div className="grid grid-cols-2 gap-2 text-xs uppercase tracking-widest text-gray-500">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center justify-center border border-gray-800 py-3 transition-colors hover:border-[#00FF00]/50 hover:text-[#00FF00]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative pt-20 lg:pt-32 flex flex-col items-start min-h-[60vh] justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <p className="font-mono text-[#00FF00] mb-4">
          &gt;&nbsp;whoami<span aria-hidden="true" className="inline-block w-2 h-5 ml-2 align-[-3px] bg-[#00FF00] animate-cursor-blink"></span>
        </p>
        <h1 id="hero-title" className="max-w-full text-4xl sm:text-5xl md:text-7xl font-mono text-white mb-6 uppercase tracking-normal leading-[0.95]">
          Find The Breach <br />
          <span className="text-[#00FF00] drop-shadow-[0_0_10px_rgba(0,255,0,0.4)]">
            Before It Finds You
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-sans mb-10 leading-relaxed">
          I identify vulnerabilities before adversaries do. Specializing in penetration testing, incident response, and securing mission-critical infrastructure.
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.45, ease: 'easeOut' }}
          className="flex flex-wrap gap-4 font-mono group"
        >
          <a href="#contact" className="relative px-6 py-3 bg-[#00FF00]/10 text-[#00FF00] border border-[#00FF00]/50 hover:bg-[#00FF00]/20 transition-all flex items-center gap-2">
            Initiate Contact <ChevronRight size={16} />
            <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[#00FF00] origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </a>
          <a href="#services" className="px-6 py-3 text-gray-400 border border-gray-800 hover:border-gray-600 hover:text-gray-200 transition-colors">
            View Operations
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Penetration Testing",
      desc: "Comprehensive red-team operations simulating advanced persistent threats to uncover critical vulnerabilities.",
      icon: <Lock className="text-[#00FF00]" size={24} />
    },
    {
      title: "Incident Response",
      desc: "Rapid containment, eradication, and recovery from active breaches. Digital forensics and malware analysis.",
      icon: <Terminal className="text-[#00FF00]" size={24} />
    },
    {
      title: "Security Auditing",
      desc: "Code reviews, cloud infrastructure assessments, and compliance checks (SOC2, HIPAA) for robust posture.",
      icon: <Shield className="text-[#00FF00]" size={24} />
    },
    {
      title: "Infrastructure Security",
      desc: "Zero-trust architecture implementation, network segmentation, and secure CI/CD pipeline integration.",
      icon: <Server className="text-[#00FF00]" size={24} />
    }
  ];

  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 id="services-title" className="text-3xl text-white font-mono uppercase">sudo list-services</h2>
          <div aria-hidden="true" className="h-px bg-gray-800 flex-1"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border border-gray-800 bg-[#161B22]/50 hover:bg-[#161B22] hover:border-[#00FF00]/30 transition-all group"
            >
              <div className="mb-4 bg-[#0D1117] w-12 h-12 rounded flex items-center justify-center border border-gray-800 group-hover:border-[#00FF00]/50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl text-gray-200 mb-3 font-mono">{service.title}</h3>
              <p className="text-sm text-gray-400 font-sans leading-relaxed">{service.desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      name: "Project.OVERWATCH",
      category: "Red Team Operation",
      desc: "Anonymized execution of a full-scale external and internal penetration test for a Fortune 500 financial institution. Discovered and remediated a zero-day in their custom middleware.",
      tech: ["Cobalt Strike", "Python", "Ghidra"]
    },
    {
      name: "ZeroTrust.ARCH",
      category: "Infra Design",
      desc: "Architected a complete identity-aware zero-trust network for a distributed healthcare provider, enforcing granular access controls across multi-cloud environments.",
      tech: ["AWS", "Terraform", "Okta"]
    }
  ];

  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 id="projects-title" className="text-3xl text-white font-mono uppercase">cat /var/log/projects</h2>
          <div aria-hidden="true" className="h-px bg-gray-800 flex-1"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-l-2 border-gray-800 pl-6 py-2 hover:border-[#00FF00] transition-colors"
            >
              <p className="text-xs text-[#00FF00] font-mono mb-2 uppercase tracking-widest">{project.category}</p>
              <h3 className="text-2xl text-gray-200 font-mono mb-3">{project.name}</h3>
              <p className="text-gray-400 font-sans mb-4 max-w-3xl">{project.desc}</p>
              <div className="flex gap-3 font-mono text-xs text-gray-500">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 bg-gray-800/50 border border-gray-700/50 rounded">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-32 pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 id="contact-title" className="text-3xl text-white font-mono uppercase">./establish-link</h2>
          <div aria-hidden="true" className="h-px bg-gray-800 flex-1"></div>
        </div>

        <div className="p-8 border border-gray-800 bg-[#161B22]/50 rounded-sm relative">
          <div aria-hidden="true" className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00FF00]"></div>
          <div aria-hidden="true" className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00FF00]"></div>
          <div aria-hidden="true" className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00FF00]"></div>
          <div aria-hidden="true" className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00FF00]"></div>

          <form className="space-y-6" aria-describedby="contact-help" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="target-email" className="block font-mono text-xs text-gray-500 mb-2">TARGET_EMAIL</label>
              <input 
                id="target-email"
                name="email"
                type="email" 
                autoComplete="email"
                required
                className="w-full bg-[#0D1117] border border-gray-800 p-3 font-mono text-sm text-gray-200 focus:outline-none focus:border-[#00FF00]/50 transition-colors"
                placeholder="user@domain.com"
              />
            </div>
            <div>
              <label htmlFor="payload" className="block font-mono text-xs text-gray-500 mb-2">PAYLOAD</label>
              <textarea 
                id="payload"
                name="message"
                rows={4}
                required
                className="w-full bg-[#0D1117] border border-gray-800 p-3 font-mono text-sm text-gray-200 focus:outline-none focus:border-[#00FF00]/50 transition-colors resize-none"
                placeholder="Enter scope details..."
              ></textarea>
            </div>
            <p id="contact-help" className="text-xs text-gray-500">
              Demo form: connect this action to your preferred form endpoint before publishing.
            </p>
            <button type="submit" className="w-full py-3 bg-[#00FF00]/10 text-[#00FF00] border border-[#00FF00]/50 hover:bg-[#00FF00]/20 font-mono transition-colors uppercase tracking-widest text-sm">
              Execute Transmit
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-[#0D1117] py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500">
        <p>CONNECTION SECURE // 0x{new Date().getFullYear().toString(16).toUpperCase()}</p>
        <div className="flex gap-4">
          <a href={`mailto:${contactEmail}`} className="hover:text-[#00FF00] transition-colors">EMAIL</a>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-[#00FF00] transition-colors">
              {link.label.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

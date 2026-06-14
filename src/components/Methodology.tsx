import { motion } from 'motion/react';
import { Target, Search, FileCode, CheckCircle2 } from 'lucide-react';

export function Methodology() {
  const steps = [
    { title: "Reconnaissance", desc: "Passive and active information gathering to map the vast attack surface.", icon: <Search size={20} className="text-gray-400" /> },
    { title: "Vulnerability Analysis", desc: "Identifying flaws, misconfigurations, and outdated components in targets.", icon: <Target size={20} className="text-gray-400" /> },
    { title: "Exploitation", desc: "Executing proof-of-concept attacks safely to demonstrate real-world risk.", icon: <FileCode size={20} className="text-gray-400" /> },
    { title: "Reporting & Remediation", desc: "Comprehensive documentation with actionable steps to patch discovered issues.", icon: <CheckCircle2 size={20} className="text-[#00FF00]" /> }
  ];

  return (
    <section id="methodology" aria-labelledby="methodology-title" className="scroll-mt-32">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="flex items-center gap-4 mb-12">
          <h2 id="methodology-title" className="text-3xl text-white font-mono uppercase">cat /etc/methodology</h2>
          <div aria-hidden="true" className="h-px bg-gray-800 flex-1"></div>
        </div>
        
        <ol className="grid md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-5 border border-gray-800 bg-[#161B22]/50 flex flex-col items-start gap-4 hover:border-[#00FF00]/40 transition-colors relative group overflow-hidden"
            >
              <div aria-hidden="true" className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00FF00]/50 to-transparent -translate-x-full group-hover:animate-shimmer delay-150"></div>
              {step.icon}
              <div>
                <h3 className="text-white font-mono text-sm uppercase mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs font-sans leading-relaxed">{step.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}

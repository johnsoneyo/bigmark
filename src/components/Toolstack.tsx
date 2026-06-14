import { motion } from 'motion/react';
import { Cpu, FolderOpen } from 'lucide-react';

export function Toolstack() {
  const categories = [
    {
      name: "offensive",
      owner: "redteam",
      size: "28K",
      tools: ["Burp Suite Pro", "Metasploit", "Cobalt Strike", "Nmap", "Wireshark"],
    },
    {
      name: "defensive",
      owner: "blueteam",
      size: "19K",
      tools: ["Splunk", "Suricata", "OSSEC", "CrowdStrike Falcon"],
    },
    {
      name: "scripting-dev",
      owner: "operator",
      size: "34K",
      tools: ["Python", "Bash", "Go", "Rust", "PowerShell"],
    },
    {
      name: "cloud-iam",
      owner: "platform",
      size: "23K",
      tools: ["AWS Security Hub", "Azure AD", "Terraform", "Docker/K8s"],
    },
  ];

  return (
    <section id="toolstack" aria-labelledby="toolstack-title" className="scroll-mt-32">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="flex items-center gap-4 mb-12">
          <h2 id="toolstack-title" className="text-3xl text-white font-mono uppercase">ls -la /opt/tools</h2>
          <div aria-hidden="true" className="h-px bg-gray-800 flex-1"></div>
        </div>

        <div className="border border-gray-800 bg-[#05080D]/80 shadow-[0_0_0_1px_rgba(0,255,0,0.03)]">
          <div className="flex items-center justify-between gap-4 border-b border-gray-800 bg-[#161B22]/60 px-4 py-3 font-mono text-xs text-gray-500">
            <div aria-hidden="true" className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#00FF00]/70"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-gray-700"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-gray-700"></span>
            </div>
            <span>/opt/tools - secure inventory</span>
          </div>

          <div className="p-4 md:p-6 font-mono">
            <div className="mb-5 flex items-center gap-2 text-sm text-gray-400">
              <span className="text-[#00FF00]">operator@node</span>
              <span aria-hidden="true" className="text-gray-700">:</span>
              <span className="text-gray-300">/opt/tools</span>
              <span aria-hidden="true" className="text-gray-700">$</span>
              <span>ls -la --grouped</span>
            </div>

            <div className="hidden md:grid grid-cols-[120px_92px_92px_1fr] gap-4 border-b border-gray-800 pb-3 text-xs uppercase tracking-widest text-gray-500">
              <span>mode</span>
              <span>owner</span>
              <span>size</span>
              <span>toolchain</span>
            </div>

            <div className="divide-y divide-gray-900">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.name}
                  role="group"
                  aria-label={`${cat.name} tools`}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="grid gap-3 py-5 md:grid-cols-[120px_92px_92px_1fr] md:gap-4"
                >
                  <div className="flex items-center gap-2 text-xs text-[#00FF00]">
                    <FolderOpen size={15} />
                    <span>drwxr-x---</span>
                  </div>
                  <div className="text-xs text-gray-500"><span className="sr-only">Owner: </span>{cat.owner}</div>
                  <div className="text-xs text-gray-500"><span className="sr-only">Size: </span>{cat.size}</div>
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-sm text-gray-200">
                      <Cpu size={16} className="text-[#00FF00]" />
                      <span>./{cat.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.tools.map((tool) => (
                        <span
                          key={tool}
                          className="border border-gray-800 bg-[#0D1117] px-2.5 py-1 text-xs text-gray-400 transition-colors hover:border-[#00FF00]/40 hover:text-gray-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 border-t border-gray-900 pt-4 text-xs text-gray-500">
              <span className="text-[#00FF00]">4</span> directories indexed, <span className="text-[#00FF00]">18</span> tools ready
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

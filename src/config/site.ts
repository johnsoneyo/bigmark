export const locales = ['de', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'de';
export const localeLabels: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
};

export const brand = {
  name: 'big-mark.de',
  logoText: './big-mark.de',
  logoImage: '/big-mark-logo.png',
};

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'GitHub', href: 'https://github.com/johnsoneyo' },
] as const;

export const sharedJsonLd = {
  type: 'ProfessionalService',
  areaServed: 'Worldwide',
  serviceType: [
    'IT Consulting',
    'Cloud Strategy',
    'Digital Transformation',
    'Security Advisory',
  ],
} as const;

export const translations = {
  de: {
    seo: {
      title: 'big-mark.de - IT-Consulting und digitale Lösungen',
      description:
        'Ein modernes Astro-Landingpage für IT-Consulting, das digitale Lösungen, Cloud-Modernisierung und operative Transformation liefert.',
      author: 'big-mark.de',
      keywords:
        'IT-Beratung, IT-Consulting, digitale Lösungen, Cloud-Modernisierung, operative Transformation, B2B IT',
      siteName: 'big-mark.de',
      themeColor: '#0B5CFF',
      twitterCard: 'summary',
    },
    navLinks: [
      { label: 'Leistungen', href: '#services' },
      { label: 'Vorgehen', href: '#methodology' },
      { label: 'Zertifikate', href: '#certifications' },
      { label: 'Projekte', href: '#projects' },
      { label: 'Kontakt', href: '#contact' },
    ],
    contact: {
      email: 'hello@big-mark.de',
      formHelp:
        'Teilen Sie Ihren Projektumfang, und ich sende Ihnen ein Angebot für die Vertragsdurchführung.',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'name@unternehmen.de',
      messageLabel: 'Projektdetails',
      messagePlaceholder:
        'Beschreiben Sie, welche Arbeit Sie benötigen, Ihre Timeline und Budgeterwartungen...',
      submitLabel: 'Angebot anfragen',
    },
    hero: {
      command: 'initialisiere Lieferung...',
      terminalSequence: [
        'Scope definieren...',
        'Teams mobilisieren...',
        'Ergebnisse liefern...',
      ],
      title: 'IT-Consulting Services',
      highlightedTitle: 'Für Ihre digitalen Projekte',
      description:
        'Ich unterstütze B2B-Kunden bei Planung, Aufbau und Betrieb digitaler Lösungen mit flexiblem IT-Consulting und Vertragslieferung.',
      primaryCta: { label: 'Angebot anfragen', href: '#contact' },
      secondaryCta: { label: 'Fähigkeiten ansehen', href: '#services' },
      proof: {
        stats: [
          { value: 120, suffix: '+', label: 'betreute Kunden' },
          { value: 15, suffix: '+', label: 'Jahre Erfahrung' },
          { value: 99, suffix: '%', label: 'erfolgreiche Engagements' },
        ],
      },
    },
    sections: {
      services: { heading: 'Unser Leistungsspektrum' },
      methodology: { heading: 'Unser Vorgehen' },
      certifications: { heading: 'Zertifikate' },
      toolstack: {
        heading: 'Technologie-Stack',
        terminalTitle: '/opt/tools - trusted platform',
        promptUser: 'consultant@it',
        promptPath: '/opt/stack',
        command: 'ls -la',
        summary: { directories: 4, tools: 18 },
      },
      projects: { heading: 'Projekte' },
      testimonials: {
        heading: 'Erfolgsgeschichten',
        eyebrow: 'Verifiziertes Feedback von Technologieführern',
        note:
          'Testimonials zeigen Geschäftsergebnisse, Governance-Verbesserungen und Lieferzuversicht.',
      },
      contact: { heading: 'Lassen Sie uns sprechen' },
    },
    services: [
      {
        title: 'IT-Strategie & Roadmap',
        desc: 'Technologieinvestitionen mit Geschäftszielen ausrichten und eine klare, umsetzbare IT-Roadmap für Vertragslieferungen erstellen.',
        icon: 'insights',
      },
      {
        title: 'Cloud-Modernisierung',
        desc: 'Cloud-Adoptionsprogramme gestalten und umsetzen, die Risiken reduzieren, Kosten kontrollieren und die Markteinführung beschleunigen.',
        icon: 'cloud',
      },
      {
        title: 'Sicherheit & Compliance',
        desc: 'Praktische Sicherheits- und Compliance-Services liefern, die Daten, Betrieb und Vertrauen schützen.',
        icon: 'shield',
      },
      {
        title: 'Digitale Operations',
        desc: 'Betrieb und Softwarelieferung automatisieren, um Zuverlässigkeit, Sichtbarkeit und Ausführungsicherheit zu verbessern.',
        icon: 'settings_suggest',
      },
    ],
    methodology: [
      {
        title: 'Discovery & Analyse',
        desc: 'Aktuelle Systeme, Schmerzpunkte und Geschäftsziele verstehen, um die wertvollsten Chancen zu identifizieren.',
        icon: 'search',
      },
      {
        title: 'Roadmap & Design',
        desc: 'Analysen in praktische Architekturen, optimierte Prozesse und messbare Erfolgskriterien überführen.',
        icon: 'architecture',
      },
      {
        title: 'Implementierungsunterstützung',
        desc: 'Technische Teams während der Umsetzung unterstützen, Übergabe ermöglichen und Governance für den langfristigen Betrieb einbetten.',
        icon: 'work_outline',
      },
    ],
    certifications: [
      {
        name: 'CISSP',
        title: 'Certified Information Systems Security Professional',
        issuer: 'ISC2',
        file: 'cissp.cert',
        issued: '2022-09-18',
        status: 'aktiv',
      },
      {
        name: 'PMP',
        title: 'Project Management Professional',
        issuer: 'PMI',
        file: 'pmp.cert',
        issued: '2021-05-10',
        status: 'aktiv',
      },
      {
        name: 'AWS CP',
        title: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        file: 'aws-cp.cert',
        issued: '2024-01-08',
        status: 'aktiv',
      },
    ],
    toolCategories: [
      {
        name: 'cloud',
        owner: 'platform',
        size: '24K',
        tools: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes'],
      },
      {
        name: 'ops',
        owner: 'automation',
        size: '20K',
        tools: ['GitHub Actions', 'Datadog', 'Prometheus', 'Argo CD', 'Ansible'],
      },
      {
        name: 'security',
        owner: 'governance',
        size: '18K',
        tools: ['Splunk', 'CrowdStrike', 'Okta', 'Tenable', 'Prisma Cloud'],
      },
      {
        name: 'development',
        owner: 'delivery',
        size: '30K',
        tools: ['Java', 'TypeScript', 'Python', 'Node.js', 'React', 'Rust', 'Docker'],
      },
    ],
    projects: [
      {
        name: 'DigitalOps Revamp',
        category: 'IT-Transformation',
        desc: 'Modernisierungsprogramm für einen B2B-Softwareanbieter, das Bereitstellungsgeschwindigkeit und Stabilität verbesserte.',
        tech: ['AWS', 'Terraform', 'GitHub Actions'],
      },
      {
        name: 'Cloud Migration Blueprint',
        category: 'Cloud-Strategie',
        desc: 'Sicheres, kostenoptimiertes Cloud-Migrationskonzept für ein verteiltes Dienstleistungsunternehmen inklusive Governance und DR.',
        tech: ['Azure', 'Okta', 'Kubernetes'],
      },
    ],
    testimonials: [
      {
        quote:
          'Die strategische Prüfung hat IT-Komplexität in eine klare Business-Case-Priorisierung überführt und geholfen, die entscheidenden Projekte zu identifizieren.',
        attribution: 'VP Technik',
        sector: 'B2B SaaS',
        rating: 5,
      },
      {
        quote:
          'Der Cloud-Migrationsplan hat unser Risiko reduziert und den Übergang in produktionsbereite Infrastruktur beschleunigt.',
        attribution: 'Director Operations',
        sector: 'Enterprise Services',
        rating: 5,
      },
      {
        quote:
          'Das Engagement lieferte Vertrauen auf Führungsebene und einen praktischen Fahrplan, den unsere Teams sofort umsetzen konnten.',
        attribution: 'Head of Product',
        sector: 'Technology Platform',
        rating: 5,
      },
    ],
    footer: {
      status: 'VERBUNDENE SICHERHEIT',
    },
  },
  en: {
    seo: {
      title: 'big-mark.de - Contracted IT Consulting and Digital Solutions',
      description:
        'A polished Astro landing page for an IT consulting service that delivers contracted digital solutions, cloud modernization, and operational transformation.',
      author: 'big-mark.de',
      keywords:
        'IT consultancy, contracted IT services, digital solutions, cloud modernization, operational transformation, business technology',
      siteName: 'big-mark.de',
      themeColor: '#0B5CFF',
      twitterCard: 'summary',
    },
    navLinks: [
      { label: 'Services', href: '#services' },
      { label: 'Approach', href: '#methodology' },
      { label: 'Credentials', href: '#certifications' },
      { label: 'Case Studies', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    contact: {
      email: 'info@big-mark.de',
      formHelp:
        'Share your project scope and I’ll follow up with a proposal for contracted delivery.',
      emailLabel: 'Email',
      emailPlaceholder: 'name@company.com',
      messageLabel: 'Project details',
      messagePlaceholder:
        'Describe the work you need delivered, your timeline, and budget expectations...',
      submitLabel: 'Request Proposal',
    },
    hero: {
      command: 'initializing delivery...',
      terminalSequence: ['defining scope...', 'mobilizing teams...', 'delivering outcomes...'],
      title: 'IT Consulting Services',
      highlightedTitle: 'For Your Digital Projects',
      description:
        'I help B2B clients plan, build, and operate digital solutions through flexible IT consulting and contract delivery.',
      primaryCta: { label: 'Request Proposal', href: '#contact' },
      secondaryCta: { label: 'View Capabilities', href: '#services' },
      proof: {
        stats: [
          { value: 120, suffix: '+', label: 'clients served' },
          { value: 15, suffix: '+', label: 'years experience' },
          { value: 99, suffix: '%', label: 'successful engagements' },
        ],
      },
    },
    sections: {
      services: { heading: 'Our Capabilities' },
      methodology: { heading: 'Our Approach' },
      certifications: { heading: 'Credentials' },
      toolstack: {
        heading: 'Technology Stack',
        terminalTitle: '/opt/tools - trusted platform',
        promptUser: 'consultant@it',
        promptPath: '/opt/stack',
        command: 'ls -la',
        summary: { directories: 4, tools: 18 },
      },
      projects: { heading: 'Case Studies' },
      testimonials: {
        heading: 'Client Success Stories',
        eyebrow: 'Verified feedback from technology leaders',
        note:
          'Testimonials reflect business outcomes, governance improvements, and delivery confidence.',
      },
      contact: { heading: 'Let’s Talk' },
    },
    services: [
      {
        title: 'IT Strategy & Roadmap',
        desc: 'Align technology investments with business objectives and build a clear, executable IT roadmap for contracted delivery.',
        icon: 'insights',
      },
      {
        title: 'Cloud Modernization',
        desc: 'Design and execute cloud adoption programs that reduce risk, control costs, and improve speed to market.',
        icon: 'cloud',
      },
      {
        title: 'Security & Compliance',
        desc: 'Deliver practical security and compliance services that protect data, operations, and customer trust.',
        icon: 'shield',
      },
      {
        title: 'Digital Operations',
        desc: 'Automate operations and software delivery to improve reliability, visibility, and execution certainty.',
        icon: 'settings_suggest',
      },
    ],
    methodology: [
      {
        title: 'Discovery & Assessment',
        desc: 'Understand current systems, pain points, and business goals to uncover the highest-value opportunities.',
        icon: 'search',
      },
      {
        title: 'Roadmap & Design',
        desc: 'Turn assessments into practical architectures, optimized processes, and measurable success criteria.',
        icon: 'architecture',
      },
      {
        title: 'Implementation Support',
        desc: 'Support technical teams during delivery, enable handoff, and embed governance for long-term operations.',
        icon: 'work_outline',
      },
    ],
    certifications: [
      {
        name: 'CISSP',
        title: 'Certified Information Systems Security Professional',
        issuer: 'ISC2',
        file: 'cissp.cert',
        issued: '2022-09-18',
        status: 'active',
      },
      {
        name: 'PMP',
        title: 'Project Management Professional',
        issuer: 'PMI',
        file: 'pmp.cert',
        issued: '2021-05-10',
        status: 'active',
      },
      {
        name: 'AWS CP',
        title: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        file: 'aws-cp.cert',
        issued: '2024-01-08',
        status: 'active',
      },
    ],
    toolCategories: [
      {
        name: 'cloud',
        owner: 'platform',
        size: '24K',
        tools: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes'],
      },
      {
        name: 'ops',
        owner: 'automation',
        size: '20K',
        tools: ['GitHub Actions', 'Datadog', 'Prometheus', 'Argo CD', 'Ansible'],
      },
      {
        name: 'security',
        owner: 'governance',
        size: '18K',
        tools: ['Splunk', 'CrowdStrike', 'Okta', 'Tenable', 'Prisma Cloud'],
      },
      {
        name: 'development',
        owner: 'delivery',
        size: '30K',
        tools: ['Java', 'TypeScript', 'Python', 'Node.js', 'React', 'Rust', 'Docker'],
      },
    ],
    projects: [
      {
        name: 'DigitalOps Revamp',
        category: 'IT Transformation',
        desc: 'Delivered a phased modernization program for a B2B software provider, improving deployment velocity and operational stability.',
        tech: ['AWS', 'Terraform', 'GitHub Actions'],
      },
      {
        name: 'Cloud Migration Blueprint',
        category: 'Cloud Strategy',
        desc: 'Designed a secure, cost-optimized cloud migration plan for a distributed services firm, including governance and disaster recovery.',
        tech: ['Azure', 'Okta', 'Kubernetes'],
      },
    ],
    testimonials: [
      {
        quote:
          'Their strategic review converted IT complexity into a clear business case and helped us prioritize the projects that move the needle.',
        attribution: 'VP of Technology',
        sector: 'B2B SaaS',
        rating: 5,
      },
      {
        quote:
          'The cloud migration plan reduced our risk exposure and accelerated our move to production-ready infrastructure.',
        attribution: 'Director of Operations',
        sector: 'Enterprise Services',
        rating: 5,
      },
      {
        quote:
          'The engagement delivered executive-level confidence and a practical roadmap our teams could execute immediately.',
        attribution: 'Head of Product',
        sector: 'Technology Platform',
        rating: 5,
      },
    ],
    footer: {
      status: 'CONNECTION SECURE',
    },
  },
} as const;

export const getSiteData = (locale: Locale) => {
  const localeData = translations[locale] ?? translations[defaultLocale];
  return {
    brand,
    socialLinks,
    jsonLd: sharedJsonLd,
    locale,
    alternateLocale: locale === 'de' ? 'en' : 'de',
    alternateLabel: locale === 'de' ? 'English' : 'Deutsch',
    ...localeData,
  };
};

export const locales = ['de', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'de';

export const localePath = (locale: Locale) =>
  locale === defaultLocale ? '/' : `/${locale}/`;
export const localeLabels: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
};

export const brand = {
  name: 'BIG-MARK IT Consult',
  logoText: 'BIG-MARK IT Consult',
  logoImage: '/big-mark-logo.png',
};

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/big-mark-digital-solutions-it/',
  },
] as const;

// Public Web3Forms access key (meant to be embedded in the page; it only allows
// sending submissions to the registered inbox).
export const web3formsAccessKey = '17753388-a6fc-472e-9b78-e4717b621ccf';

export const sharedJsonLd = {
  type: 'ProfessionalService',
  areaServed: 'DE',
  serviceType: [
    'IT Consulting',
    'Cloud Infrastructure',
    'Kubernetes',
    'DevOps',
    'Java Development',
  ],
} as const;

export const translations = {
  de: {
    seo: {
      title: 'BIG-MARK IT Consult - Cloud, Kubernetes und Java-Backend für Software-Teams',
      description:
        'BIG-MARK IT Consult: AWS, Azure und GCP mit Terraform, Kubernetes, CI/CD-Pipelines und Java/Spring-Backends. Engineers, die den Code selbst schreiben und die Systeme selbst betreiben.',
      author: 'BIG-MARK IT Consult',
      keywords:
        'IT-Beratung, Cloud, Kubernetes, DevOps, CI/CD, Java, Spring Boot, AWS, Azure, Google Cloud, Terraform',
      siteName: 'BIG-MARK IT Consult',
      themeColor: '#0B5CFF',
      twitterCard: 'summary',
    },
    ui: {
      skipLink: 'Zum Inhalt springen',
      homeLabel: 'Startseite',
      primaryNav: 'Hauptnavigation',
      mobileNav: 'Mobile Navigation',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
      switchLanguage: 'Auf Englisch wechseln',
      impressum: 'Impressum',
      privacy: 'Datenschutz',
      privacyNotice:
        'Ihre Angaben werden zur Bearbeitung Ihrer Anfrage über den Dienst Web3Forms übermittelt, zum Spam-Schutz kommt hCaptcha zum Einsatz. Details in der',
      privacyLink: 'Datenschutzerklärung',
      formSubject: 'Anfrage über BIG-MARK IT Consult',
    },
    navLinks: [
      { label: 'Leistungen', href: '#services' },
      { label: 'Vorgehen', href: '#methodology' },
      { label: 'Team', href: '#team' },
      { label: 'Kontakt', href: '#contact' },
    ],
    contact: {
      email: 'hello@big-mark.de',
      formHelp:
        'Beschreiben Sie kurz Ihr Anliegen. Wir melden uns zeitnah bei Ihnen.',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'name@unternehmen.de',
      messageLabel: 'Projektdetails',
      messagePlaceholder:
        'z. B. „Unterstützung im Plattform-Team beim Umzug von Jenkins nach GitHub Actions ab Q2“',
      submitLabel: 'Anfrage senden',
      statusCaptcha: 'Bitte bestätigen Sie zuerst das Captcha.',
      statusSending: 'Wird gesendet…',
      statusSuccess: 'Danke, Ihre Nachricht ist angekommen. Wir melden uns bald.',
      statusError: 'Das hat leider nicht geklappt. Bitte schreiben Sie uns direkt an hello@big-mark.de.',
    },
    hero: {
      kicker: 'Cloud · Kubernetes · Java',
      title: 'Cloud, Kubernetes und Java‑Backend',
      highlightedTitle: 'für Software-Teams',
      description:
        'Wir sind Engineers für Cloud-Infrastruktur und Java. Wir arbeiten direkt in Ihrem Team mit: an Terraform-Modulen, Pipelines und Code, und danach auch am laufenden Betrieb.',
      primaryCta: { label: 'Anfrage senden', href: '#contact' },
      secondaryCta: { label: 'Leistungen ansehen', href: '#services' },
    },
    sections: {
      services: { heading: 'Was wir tun' },
      methodology: { heading: 'Unser Vorgehen' },
      toolstack: { heading: 'Technologie-Stack' },
      projects: { heading: 'Beispielprojekte' },
      team: { heading: 'Team' },
      contact: { heading: 'Kontakt' },
    },
    services: [
      {
        title: 'Cloud-Plattformen',
        desc: 'Infrastruktur auf AWS, Azure und GCP, aufgesetzt mit Terraform. Wir senken laufende Cloud-Kosten und ziehen Services zwischen Anbietern um, etwa von Azure nach GCP.',
        icon: 'cloud',
      },
      {
        title: 'Kubernetes',
        desc: 'Produktiver Betrieb auf EKS, AKS und GKE: Wir schreiben Helm-Charts, holen Services von alten VMs in den Cluster, richten Logging und Monitoring ein und suchen Fehler, wenn es in Produktion klemmt.',
        icon: 'deployed_code',
      },
      {
        title: 'DevOps & CI/CD',
        desc: 'Pipelines für Build, Test und Deployment mit GitHub Actions oder Jenkins, auch als Migration gewachsener Jenkins-Jobs nach GitHub Actions.',
        icon: 'settings_suggest',
      },
      {
        title: 'Java-Backend & Architektur',
        desc: 'Wir entwickeln Services mit Java, Spring Boot und RabbitMQ und bauen ältere Spring-Anwendungen so um, dass sie sauber im Container laufen.',
        icon: 'code',
      },
    ],
    methodology: [
      {
        title: 'Kennenlernen',
        desc: 'Wir lassen uns zeigen, wo Ihr Team steht, welche Systeme laufen und wo es hakt, im Gespräch mit denen, die sie bauen und betreiben.',
        icon: 'search',
      },
      {
        title: 'Rahmen klären',
        desc: 'Wir klären, welche Themen wir übernehmen, wie wir uns in Ihre Abläufe einklinken und ob nach Aufwand oder als abgegrenztes Paket gearbeitet wird. Wenn etwas nicht zu uns passt, sagen wir das.',
        icon: 'architecture',
      },
      {
        title: 'Mitarbeit im Team',
        desc: 'Wir arbeiten direkt in Ihren Repositories, dokumentieren mit und geben unser Wissen im Alltag weiter, damit Ihr Team die Systeme auch ohne uns beherrscht.',
        icon: 'work_outline',
      },
    ],
    toolCategories: [
      {
        label: 'Cloud-Plattformen',
        desc: 'Infrastruktur als Code auf den drei großen Anbietern.',
        tools: ['AWS', 'Azure', 'Google Cloud', 'Terraform'],
      },
      {
        label: 'Container & Kubernetes',
        desc: 'Produktiver Betrieb und Paketierung von Services.',
        tools: ['Kubernetes', 'Helm', 'Docker', 'Argo CD', 'Flux CD'],
      },
      {
        label: 'CI/CD & Observability',
        desc: 'Pipelines, Metriken und Logging im Betrieb.',
        tools: ['GitHub Actions', 'Jenkins', 'Datadog', 'Prometheus', 'Grafana', 'OpenTelemetry'],
      },
      {
        label: 'Backend-Entwicklung',
        desc: 'Services, Messaging und Datenhaltung.',
        tools: ['Java', 'Spring Boot', 'Hibernate/JPA', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'RabbitMQ', 'Python'],
      },
    ],
    // Project cards are hidden while this list is empty (see big-mark/projekte-entwurf.md).
    projects: [] as { name: string; category: string; desc: string; tech: string[] }[],
    team: [
      {
        name: 'Johnson Eyo',
        role: 'Founder & Principal Cloud Engineer',
        bio: 'Seit 2014 in der Java-Entwicklung, zuletzt als Senior Java Architect. Verteilte Spring-Boot-Services, Umzug von VMs nach Kubernetes (GKE), CI/CD mit Docker und Helm sowie Integrationen für Telekommunikation und Wettplattformen.',
        photo: '/team/john.webp',
      },
      {
        name: 'Michael Keller',
        role: 'Backend & DevOps Engineer',
        bio: 'Über fünf Jahre Berufserfahrung mit Cloud-Infrastruktur auf AWS, Azure und GCP, Terraform, Kubernetes und Java/Spring. Betreibt produktive Cluster und baut CI/CD-Pipelines mit GitHub Actions und Jenkins.',
        photo: '',
      },
    ],
    footer: {
      status: 'BIG-MARK IT CONSULT',
    },
  },
  en: {
    seo: {
      title: 'BIG-MARK IT Consult - Cloud, Kubernetes and Java Backend for Software Teams',
      description:
        'BIG-MARK IT Consult: AWS, Azure and GCP with Terraform, Kubernetes, CI/CD pipelines and Java/Spring backends. Engineers who write the code and run the systems themselves.',
      author: 'BIG-MARK IT Consult',
      keywords:
        'IT consultancy, cloud, Kubernetes, DevOps, CI/CD, Java, Spring Boot, AWS, Azure, Google Cloud, Terraform',
      siteName: 'BIG-MARK IT Consult',
      themeColor: '#0B5CFF',
      twitterCard: 'summary',
    },
    ui: {
      skipLink: 'Skip to main content',
      homeLabel: 'Home',
      primaryNav: 'Primary navigation',
      mobileNav: 'Mobile navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      switchLanguage: 'Switch to German',
      impressum: 'Impressum',
      privacy: 'Datenschutz',
      privacyNotice:
        'Your details are sent via the Web3Forms service to process your request; hCaptcha is used for spam protection. More in our',
      privacyLink: 'privacy policy (German)',
      formSubject: 'Inquiry via BIG-MARK IT Consult',
    },
    navLinks: [
      { label: 'Services', href: '#services' },
      { label: 'Approach', href: '#methodology' },
      { label: 'Team', href: '#team' },
      { label: 'Contact', href: '#contact' },
    ],
    contact: {
      email: 'hello@big-mark.de',
      formHelp:
        'Please describe your request briefly. We will get back to you promptly.',
      emailLabel: 'Email',
      emailPlaceholder: 'name@company.com',
      messageLabel: 'Project details',
      messagePlaceholder:
        'e.g. “Hands-on support for our platform team migrating Jenkins to GitHub Actions starting Q2”',
      submitLabel: 'Send Inquiry',
      statusCaptcha: 'Please complete the captcha first.',
      statusSending: 'Sending…',
      statusSuccess: 'Thanks, your message has arrived. We’ll be in touch soon.',
      statusError: 'Something went wrong. Please email us directly at hello@big-mark.de.',
    },
    hero: {
      kicker: 'Cloud · Kubernetes · Java',
      title: 'Cloud, Kubernetes and Java Backend',
      highlightedTitle: 'for Software Teams',
      description:
        'We’re engineers for cloud infrastructure and Java. We work directly in your team on Terraform modules, pipelines and application code, and help run everything in production afterwards.',
      primaryCta: { label: 'Send Inquiry', href: '#contact' },
      secondaryCta: { label: 'View Services', href: '#services' },
    },
    sections: {
      services: { heading: 'What We Do' },
      methodology: { heading: 'Our Approach' },
      toolstack: { heading: 'Technology Stack' },
      projects: { heading: 'Example Projects' },
      team: { heading: 'Team' },
      contact: { heading: 'Contact' },
    },
    services: [
      {
        title: 'Cloud Platforms',
        desc: 'We set up infrastructure on AWS, Azure and GCP with Terraform, lower your monthly cloud bill and migrate services between providers, for example from Azure to GCP.',
        icon: 'cloud',
      },
      {
        title: 'Kubernetes',
        desc: 'Production Kubernetes on EKS, AKS and GKE: we write Helm charts, move services off old VMs into the cluster, set up logging and monitoring, and track down faults when production misbehaves.',
        icon: 'deployed_code',
      },
      {
        title: 'DevOps & CI/CD',
        desc: 'Pipelines for build, test and deployment with GitHub Actions or Jenkins, including migrating grown Jenkins setups to GitHub Actions.',
        icon: 'settings_suggest',
      },
      {
        title: 'Java Backend & Architecture',
        desc: 'We build services with Java, Spring Boot and RabbitMQ, and refactor older Spring applications so they run cleanly in containers.',
        icon: 'code',
      },
    ],
    methodology: [
      {
        title: 'Context',
        desc: 'We find out where your team stands, what runs in production and where it hurts, by talking to the people who build and run it.',
        icon: 'search',
      },
      {
        title: 'Scope',
        desc: 'We agree on which topics we take on, how we fit into your workflow, and whether we work on a time-and-materials basis or on a defined scope. If something isn’t a fit for us, we’ll say so.',
        icon: 'architecture',
      },
      {
        title: 'Working together',
        desc: 'We work directly in your repositories, document as we go and share what we know day to day, so your team stays in control of the systems.',
        icon: 'work_outline',
      },
    ],
    toolCategories: [
      {
        label: 'Cloud Platforms',
        desc: 'Infrastructure as code across the three major providers.',
        tools: ['AWS', 'Azure', 'Google Cloud', 'Terraform'],
      },
      {
        label: 'Containers & Kubernetes',
        desc: 'Running and packaging services in production.',
        tools: ['Kubernetes', 'Helm', 'Docker', 'Argo CD', 'Flux CD'],
      },
      {
        label: 'CI/CD & Observability',
        desc: 'Pipelines, metrics and logging in operation.',
        tools: ['GitHub Actions', 'Jenkins', 'Datadog', 'Prometheus', 'Grafana', 'OpenTelemetry'],
      },
      {
        label: 'Backend Development',
        desc: 'Services, messaging and data storage.',
        tools: ['Java', 'Spring Boot', 'Hibernate/JPA', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'RabbitMQ', 'Python'],
      },
    ],
    // Project cards are hidden while this list is empty (see big-mark/projekte-entwurf.md).
    projects: [] as { name: string; category: string; desc: string; tech: string[] }[],
    team: [
      {
        name: 'Johnson Eyo',
        role: 'Founder & Principal Cloud Engineer',
        bio: 'In Java development since 2014, most recently as Senior Java Architect. Distributed Spring Boot services, moving workloads from VMs to Kubernetes (GKE), CI/CD with Docker and Helm, and integrations for telecom and betting platforms.',
        photo: '/team/john.webp',
      },
      {
        name: 'Michael Keller',
        role: 'Backend & DevOps Engineer',
        bio: 'Over five years of professional experience with cloud infrastructure on AWS, Azure and GCP, Terraform, Kubernetes and Java/Spring. Runs production clusters and builds CI/CD pipelines with GitHub Actions and Jenkins.',
        photo: '',
      },
    ],
    footer: {
      status: 'BIG-MARK IT CONSULT',
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

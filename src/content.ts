export type Locale = 'de' | 'en';

const projects = {
  de: [
    { category: 'Modernisierung', title: 'Java-EE-Modernisierung ohne Lizenzabhängigkeit', text: 'Vier Java-EE-Enterprise-Services wurden von einem kommerziellen Application Server auf Amazon Corretto 17, Spring Boot, Thymeleaf und Tomcat modernisiert. Dynatrace, Spring Boot Admin, Actuator und JMX verbesserten die Beobachtbarkeit.', tech: ['Java 17', 'Spring Boot', 'Tomcat', 'Dynatrace'] },
    { category: 'Performance & Kosten', title: 'Datenbank- und Kostenoptimierung', text: 'Das Datenmodell eines Scan-Dienstes wurde überarbeitet und die Datenhaltung mit einem eigenen Migrationsservice von MongoDB nach PostgreSQL migriert: über 80 % weniger Speicherbedarf und deutlich kürzere Antwortzeiten.', tech: ['PostgreSQL', 'MongoDB', 'Java', 'Redis'] },
    { category: 'Containerisierung', title: 'Von der VM in den Cluster', text: 'Ältere Spring-Anwendungen wurden modernisiert und mit Docker, Kubernetes, Helm, CI/CD und Observability für den produktiven Betrieb auf GKE vorbereitet.', tech: ['Spring', 'Docker', 'Kubernetes', 'GKE'] },
    { category: 'Produktentwicklung', title: 'Kubernetes-Integration für EKS, AKS, GKE und OpenShift', text: 'Ein In-Cluster-Agent samt Helm-Chart und Proxy-Unterstützung für abgeschottete Unternehmensnetze wurde für mehrere Kubernetes-Plattformen entwickelt.', tech: ['Java', 'Spring Boot', 'Kubernetes', 'Helm'] },
    { category: 'KI & Tooling', title: 'KI-Assistent für die Störungsanalyse', text: 'Ein Java-Assistent auf Basis des Model Context Protocol verbindet Logs, Datenbankzugriff und Diagnosewerkzeuge für die Untersuchung von Störungen.', tech: ['Java', 'MCP'] },
    { category: 'DevOps', title: 'CI/CD-Migration', text: 'Build- und Deployment-Pipelines wurden von Jenkins auf GitHub Actions umgestellt und die automatisierte Auslieferung vereinheitlicht.', tech: ['GitHub Actions', 'Jenkins', 'Docker'] },
  ],
  en: [
    { category: 'Modernization', title: 'Java EE modernization without license lock-in', text: 'Four Java EE enterprise services were modernized from a commercial application server to Amazon Corretto 17, Spring Boot, Thymeleaf and Tomcat. Dynatrace, Spring Boot Admin, Actuator and JMX improved observability.', tech: ['Java 17', 'Spring Boot', 'Tomcat', 'Dynatrace'] },
    { category: 'Performance & cost', title: 'Database and cost optimization', text: 'A scanning service data model was redesigned and migrated from MongoDB to PostgreSQL with a dedicated migration service, cutting storage by over 80% and improving response times.', tech: ['PostgreSQL', 'MongoDB', 'Java', 'Redis'] },
    { category: 'Containerization', title: 'From VM to cluster', text: 'Legacy Spring applications were modernized and prepared for production on GKE using Docker, Kubernetes, Helm, CI/CD and observability.', tech: ['Spring', 'Docker', 'Kubernetes', 'GKE'] },
    { category: 'Product development', title: 'Kubernetes integration for EKS, AKS, GKE and OpenShift', text: 'An in-cluster agent and Helm chart with proxy support for locked-down enterprise networks was built across multiple Kubernetes platforms.', tech: ['Java', 'Spring Boot', 'Kubernetes', 'Helm'] },
    { category: 'AI & tooling', title: 'AI assistant for incident analysis', text: 'A Java assistant based on the Model Context Protocol connects logs, database access and diagnostic tools for incident investigation.', tech: ['Java', 'MCP'] },
    { category: 'DevOps', title: 'CI/CD migration', text: 'Build and deployment pipelines were migrated from Jenkins to GitHub Actions, standardizing automated delivery.', tech: ['GitHub Actions', 'Jenkins', 'Docker'] },
  ],
};

export const content = {
  de: {
    nav: { services: 'Leistungen', projects: 'Projekte', about: 'Über uns', engagement: 'Zusammenarbeit', contact: 'Kontakt' },
    hero: { eyebrow: 'Unabhängige B2B-Engineering-Beratung · Deutschland · Weltweit verfügbar', title: 'Java- und Cloud-Engineering für Unternehmen weltweit', text: 'Big Mark IT Consult unterstützt Entwicklungsteams weltweit bei der Modernisierung von Java-Unternehmensanwendungen, dem Aufbau zuverlässiger Backend-Systeme und der Umsetzung cloudnativer Lösungen.', primary: 'Projekt besprechen', secondary: 'Leistungen entdecken' },
    servicesTitle: 'Engineering für geschäftskritische Systeme', services: [
      ['Enterprise Java & Spring Boot Engineering', 'Wenn Backend-Systeme zuverlässig skalieren und sich sauber integrieren müssen.', 'Moderne Java- und Spring-Boot-Services, REST APIs, Kafka, Microservices und Enterprise-Integrationen.'],
      ['Legacy-Java-Modernisierung', 'Wenn Java EE, Monolithen oder technische Schulden die Delivery verlangsamen.', 'Schrittweise Migration, Refactoring und technische Erneuerung ohne unnötigen Big Bang.'],
      ['Cloud-Native Engineering', 'Wenn Deployments reproduzierbar, sicher und plattformfähig werden müssen.', 'AWS, Azure, GCP, Kubernetes, Docker, Helm, Terraform, CI/CD und GitOps.'],
      ['Softwarearchitektur & Integration', 'Wenn verteilte Systeme über Team- und Plattformgrenzen hinweg funktionieren müssen.', 'Architektur-Reviews, Event-Driven Design, REST-Integration und Troubleshooting.'],
      ['Production Engineering & Support', 'Wenn produktive Systeme instabil, langsam oder schwer zu diagnostizieren sind.', 'L3-Support, Root-Cause-Analyse, Performance-Diagnostik und Observability.'],
    ],
    challengesTitle: 'Technische Herausforderungen, die wir lösen', challenges: ['Legacy-Systeme sicher modernisieren', 'Java-Plattformen für Cloud und Container vorbereiten', 'Produktionsprobleme strukturiert analysieren', 'Delivery-Pipelines vereinheitlichen', 'Architekturentscheidungen belastbar machen'],
    projectsTitle: 'Modernisierung mit nachweisbarer Wirkung', projectsIntro: 'Ausgewählte, anonymisierte Projekterfahrung aus früheren Rollen und Kundeneinsätzen.',
    whyTitle: 'Erfahrene Engineers, direkt in Ihrem Team', whyText: 'Keine generische Agenturstruktur: Big Mark arbeitet hands-on in Repositories, Architekturgesprächen und Produktionssystemen – remote-first und mit klarer Verantwortung.',
    engagementTitle: 'Von der Klärung bis zum Wissenstransfer', steps: ['Technisches Erstgespräch', 'Scope-Assessment', 'B2B-Vereinbarung', 'Engineering Delivery', 'Dokumentation & Wissenstransfer'],
    teamTitle: 'Über Big Mark IT Consult', contactTitle: 'Lassen Sie uns über Ihr Projekt sprechen', form: { email: 'Geschäftliche E-Mail', message: 'Worum geht es?', send: 'Anfrage senden', success: 'Danke. Ihre Anfrage ist angekommen.', error: 'Die Anfrage konnte nicht gesendet werden. Schreiben Sie bitte an john@big-mark.de.' },
    projects: projects.de,
  },
  en: {
    nav: { services: 'Services', projects: 'Projects', about: 'About', engagement: 'Engagement', contact: 'Contact' },
    hero: { eyebrow: 'Independent B2B engineering consultancy · Germany · Available worldwide', title: 'Senior Java & Cloud Engineering for Global Businesses', text: 'Big Mark IT Consult helps engineering teams worldwide build reliable Java backend systems, modernize enterprise applications, and deliver cloud-native solutions through flexible B2B engagements.', primary: 'Discuss Your Project', secondary: 'Explore Our Services' },
    servicesTitle: 'Engineering for business-critical systems', services: [
      ['Enterprise Java & Spring Boot Engineering', 'When backend systems must scale reliably and integrate cleanly.', 'Modern Java and Spring Boot services, REST APIs, Kafka, microservices and enterprise integrations.'],
      ['Legacy Java Modernization', 'When Java EE, monoliths or technical debt slow delivery.', 'Incremental migration, refactoring and technical renewal without an unnecessary big bang.'],
      ['Cloud-Native Engineering', 'When delivery must become repeatable, secure and platform-ready.', 'AWS, Azure, GCP, Kubernetes, Docker, Helm, Terraform, CI/CD and GitOps.'],
      ['Software Architecture & Integration', 'When distributed systems must work across team and platform boundaries.', 'Architecture reviews, event-driven design, REST integration and troubleshooting.'],
      ['Production Engineering & Support', 'When production systems are unstable, slow or hard to diagnose.', 'L3 support, root-cause analysis, performance diagnostics and observability.'],
    ],
    challengesTitle: 'Engineering challenges we address', challenges: ['Modernize legacy systems safely', 'Prepare Java platforms for cloud and containers', 'Investigate production incidents systematically', 'Standardize delivery pipelines', 'Make architecture decisions defensible'],
    projectsTitle: 'Modernization experience with evidence', projectsIntro: 'Selected anonymized project experience from previous roles and client engagements.',
    whyTitle: 'Experienced engineers, directly in your team', whyText: 'No generic agency layers: Big Mark works hands-on in repositories, architecture discussions and production systems—remote-first with clear ownership.',
    engagementTitle: 'A clear path from discussion to delivery', steps: ['Technical discussion', 'Scope assessment', 'B2B agreement', 'Engineering delivery', 'Documentation & knowledge transfer'],
    teamTitle: 'About Big Mark IT Consult', contactTitle: "Let's discuss your engineering needs", form: { email: 'Business email', message: 'What do you need help with?', send: 'Send inquiry', success: 'Thank you. Your inquiry has arrived.', error: 'The inquiry could not be sent. Please email john@big-mark.de.' },
    projects: projects.en,
  },
} as const;

export const team = [
  { name: 'Johnson Eyo', role: 'Founder & Principal Cloud Engineer', photo: '/team/john.webp', de: 'Seit 2014 in der Java-Entwicklung, zuletzt als Senior Java Architect. Verteilte Spring-Boot-Services, Kubernetes, CI/CD und internationale Integrationen.', en: 'Working in Java engineering since 2014, most recently as a Senior Java Architect. Distributed Spring Boot services, Kubernetes, CI/CD and international integrations.' },
  { name: 'Michael Keller', role: 'Backend & DevOps Engineer', de: 'Über fünf Jahre Erfahrung mit AWS, Azure, GCP, Terraform, Kubernetes und Java/Spring sowie produktiven CI/CD-Pipelines.', en: 'Over five years of experience with AWS, Azure, GCP, Terraform, Kubernetes and Java/Spring, including production CI/CD pipelines.' },
];

export const technologies = ['Java 17+', 'Spring Boot', 'Spring Cloud', 'Kafka', 'REST APIs', 'Kubernetes', 'Docker', 'Helm', 'Terraform', 'AWS', 'Azure', 'Google Cloud', 'GitHub Actions', 'Jenkins', 'OpenTelemetry', 'PostgreSQL'];

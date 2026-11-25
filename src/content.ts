export type Locale = 'de' | 'en';

const projects = {
  de: [
    { category: 'Entwurf · Inhaberprüfung', title: 'Enterprise Java Application Engineering', text: 'Vorlage für verifizierte Angaben zu Geschäftskontext, technischer Herausforderung, Engineering-Ansatz, Verantwortlichkeiten und Ergebnissen.', tech: ['Java', 'Spring Boot', 'REST APIs'] },
    { category: 'Entwurf · Inhaberprüfung', title: 'Kafka & Event-Driven Systems', text: 'Unveröffentlichte Vorlage. Projektdetails und Ergebnisse werden erst nach Prüfung ergänzt.', tech: ['Apache Kafka', 'Microservices'] },
    { category: 'Entwurf · Inhaberprüfung', title: 'Anwendungsmodernisierung', text: 'Vorlage zur klaren Trennung früherer Berufserfahrung von direkt durch Big Mark IT Consult beauftragten Projekten.', tech: ['Legacy Modernization', 'Software Architecture'] },
  ],
  en: [
    { category: 'Draft · Owner review', title: 'Enterprise Java Application Engineering', text: 'Template for verified business context, technical challenge, engineering approach, responsibilities and outcomes.', tech: ['Java', 'Spring Boot', 'REST APIs'] },
    { category: 'Draft · Owner review', title: 'Kafka & Event-Driven Systems', text: 'Unpublished template. Project details and outcomes will be added only after verification.', tech: ['Apache Kafka', 'Microservices'] },
    { category: 'Draft · Owner review', title: 'Legacy Application Modernization', text: 'Template designed to distinguish previous professional experience from projects contracted directly by Big Mark IT Consult.', tech: ['Legacy Modernization', 'Software Architecture'] },
  ],
};

export const content = {
  de: {
    nav: { services: 'Leistungen', partnerships: 'Partnerschaften', projects: 'Engineering-Erfahrung', about: 'Über uns', engagement: 'Zusammenarbeit', contact: 'Kontakt' },
    hero: { eyebrow: 'Ihr unabhängiger B2B-Engineering-Partner', title: 'Enterprise-Softwareentwicklung & IT-Beratung', text: 'Big Mark IT Consult ist ein in Deutschland ansässiges Unternehmen für Softwareentwicklung und IT-Beratung. Wir unterstützen Unternehmen, Beratungshäuser und IT-Dienstleister beim Aufbau, bei der Modernisierung und beim Betrieb zuverlässiger Softwaresysteme – remote-first und mit Fokus auf langfristige technologische Partnerschaften.', primary: 'Partnerschaft besprechen', secondary: 'Unsere Leistungen entdecken' },
    servicesTitle: 'Spezialisierte Engineering-Leistungen', services: [
      ['Enterprise-Softwareentwicklung', 'Zuverlässige Enterprise-Anwendungen, Backend-Services und APIs.', 'Java, Spring Boot, Rust, REST APIs, Softwarearchitektur und Backend Engineering.'],
      ['Verteilte Systeme & Event-Driven Architecture', 'Skalierbare und resiliente verteilte Anwendungen.', 'Apache Kafka, Microservices, asynchrone Verarbeitung und Systemintegration.'],
      ['Cloud-native Softwareentwicklung', 'Moderne Anwendungen entwickeln, bereitstellen und betreiben.', 'Kubernetes, Docker, CI/CD, Observability und Infrastrukturintegration.'],
      ['Anwendungsmodernisierung', 'Bestehende Systeme verbessern, ohne den Geschäftsbetrieb unnötig zu stören.', 'Legacy-Java-Modernisierung, Migration, Architekturverbesserung und technische Schulden.'],
      ['Production Engineering & Application Support', 'Betriebsstabilität geschäftskritischer Anwendungen.', 'L3-Support, Ursachenanalyse, Troubleshooting, Monitoring und Performanceoptimierung.'],
      ['B2B-Engineering-Partnerschaften', 'Spezialisierte externe Expertise für bestehende Delivery-Teams.', 'B2B-Subcontracting, Projektunterstützung und langfristige Zusammenarbeit.'],
    ],
    challengesTitle: 'Technische Herausforderungen, die wir lösen', challenges: ['Legacy-Systeme sicher modernisieren', 'Java-Plattformen für Cloud und Container vorbereiten', 'Produktionsprobleme strukturiert analysieren', 'Delivery-Pipelines vereinheitlichen', 'Architekturentscheidungen belastbar machen'],
    projectsTitle: 'Engineering-Erfahrung', projectsIntro: 'Unveröffentlichte Vorlagen für verifizierte Projekterfahrung. Es werden keine Kunden, Ergebnisse oder Kennzahlen erfunden.',
    whyTitle: 'Technologiekompetenz nach Engineering-Domäne', whyText: 'Direkte technische Expertise, transparente Kommunikation und ein Fokus auf wartbare, zuverlässige Software.',
    engagementTitle: 'Flexibles B2B-Zusammenarbeitsmodell', steps: ['Anforderungen besprechen', 'Zusammenarbeit qualifizieren', 'B2B-Vereinbarung', 'Remote-first Delivery', 'Langfristige Partnerschaft'],
    teamTitle: 'Über Big Mark IT Consult', contactTitle: 'Lassen Sie uns über Ihr Projekt sprechen', form: { email: 'Geschäftliche E-Mail', message: 'Worum geht es?', send: 'Anfrage senden', success: 'Danke. Ihre Anfrage ist angekommen.', error: 'Die Anfrage konnte nicht gesendet werden. Schreiben Sie bitte an john@big-mark.de.' },
    projects: projects.de,
  },
  en: {
    nav: { services: 'Services', partnerships: 'Partnerships', projects: 'Engineering Experience', about: 'About', engagement: 'Engagement', contact: 'Contact' },
    hero: { eyebrow: 'Your Independent B2B Engineering Partner', title: 'Enterprise Software Engineering & IT Consulting', text: 'Big Mark IT Consult is a Germany-based software engineering and IT consulting company helping enterprises, consulting companies and technology service providers build, modernize and operate reliable software systems through remote-first, flexible B2B engagements.', primary: 'Discuss a Partnership', secondary: 'Explore Our Services' },
    servicesTitle: 'Specialist engineering services', services: [
      ['Enterprise Software Engineering', 'Reliable enterprise applications, backend services and APIs.', 'Java, Spring Boot, Rust, REST APIs, software architecture and backend engineering.'],
      ['Distributed Systems & Event-Driven Architecture', 'Scalable, resilient distributed applications.', 'Apache Kafka, microservices, asynchronous processing and system integration.'],
      ['Cloud-Native Engineering', 'Develop, deploy and operate modern applications.', 'Kubernetes, Docker, CI/CD, observability and infrastructure integration.'],
      ['Legacy Application Modernization', 'Improve existing systems without unnecessarily disrupting operations.', 'Legacy Java modernization, migration, architectural improvement and technical-debt reduction.'],
      ['Production Engineering & Application Support', 'Operational stability for business-critical applications.', 'L3 support, root-cause analysis, troubleshooting, monitoring and performance optimization.'],
      ['B2B Engineering Partnerships', 'Specialist external expertise for established delivery teams.', 'B2B subcontracting, project support and long-term collaboration.'],
    ],
    challengesTitle: 'Engineering challenges we address', challenges: ['Modernize legacy systems safely', 'Prepare Java platforms for cloud and containers', 'Investigate production incidents systematically', 'Standardize delivery pipelines', 'Make architecture decisions defensible'],
    projectsTitle: 'Engineering Experience', projectsIntro: 'Unpublished templates for verified experience. No clients, outcomes or performance figures are invented.',
    whyTitle: 'Technology expertise by engineering domain', whyText: 'Direct technical expertise, transparent communication and a focus on maintainable, reliable software.',
    engagementTitle: 'Flexible B2B collaboration', steps: ['Discuss requirements', 'Qualify the engagement', 'B2B agreement', 'Remote-first delivery', 'Long-term partnership'],
    teamTitle: 'About Big Mark IT Consult', contactTitle: "Let's discuss your engineering needs", form: { email: 'Business email', message: 'What do you need help with?', send: 'Send inquiry', success: 'Thank you. Your inquiry has arrived.', error: 'The inquiry could not be sent. Please email john@big-mark.de.' },
    projects: projects.en,
  },
} as const;

export const team = [
  { name: 'Johnson Eyo', role: 'Founder & Principal Engineer', photo: '/team/john.webp', de: 'Mehr als 11 Jahre Berufserfahrung in Enterprise-Softwareentwicklung, verteilten Systemen, Anwendungsmodernisierung, cloudnativen Technologien und Production Support.', en: 'More than 11 years of professional experience in enterprise software development, distributed systems, application modernization, cloud-native technologies and production support.' },
  { name: 'Michael Keller', role: 'Backend & DevOps Engineer', de: 'Engineering-Unterstützung für Backend-Systeme, Cloud-Infrastruktur, Kubernetes, Java/Spring und CI/CD.', en: 'Engineering support for backend systems, cloud infrastructure, Kubernetes, Java/Spring and CI/CD.' },
];

export const technologies = ['Java', 'Spring Boot', 'Rust', 'Apache Kafka', 'Microservices', 'Event-Driven Architecture', 'REST APIs', 'Kubernetes', 'Docker', 'CI/CD', 'Software Architecture', 'Legacy Modernization', 'Observability', 'L3 Support'];

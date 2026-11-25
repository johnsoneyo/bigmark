import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const routes = [
  'en', 'en/services', 'en/partnerships', 'en/projects', 'en/about', 'en/engagement', 'en/contact',
  'leistungen', 'de/partnerschaften', 'projekte', 'ueber-uns', 'zusammenarbeit', 'kontakt',
  'impressum', 'datenschutz', 'de',
];
for (const route of routes) {
  const target = join('dist', route, 'index.html');
  await mkdir(dirname(target), { recursive: true });
  await copyFile('dist/index.html', target);
}
const routeMeta = {
  '': ['de', 'Enterprise-Softwareentwicklung & IT-Beratung', 'Big Mark IT Consult ist Ihr unabhängiger B2B-Engineering-Partner in Deutschland.', '', 'en'],
  'en': ['en', 'Enterprise Software Engineering & IT Consulting', 'Big Mark IT Consult is your independent B2B engineering partner in Germany.', '', 'en'],
  'leistungen': ['de', 'Leistungen', 'Java, Modernisierung, Cloud-Native Engineering, Architektur und Production Support.', 'leistungen', 'en/services'],
  'en/services': ['en', 'Services', 'Java, modernization, cloud-native engineering, architecture and production support.', 'leistungen', 'en/services'],
  'de/partnerschaften': ['de', 'Engineering-Partnerschaften', 'Externe B2B-Engineering-Partnerschaften für Beratungshäuser, IT-Dienstleister und Unternehmen.', 'de/partnerschaften', 'en/partnerships'],
  'en/partnerships': ['en', 'Engineering Partnerships', 'External B2B engineering partnerships for consulting companies, technology providers and enterprises.', 'de/partnerschaften', 'en/partnerships'],
  'projekte': ['de', 'Projekterfahrung', 'Ausgewählte Projekterfahrung von Big Mark IT Consult.', 'projekte', 'en/projects'],
  'en/projects': ['en', 'Project Experience', 'Selected project experience from Big Mark IT Consult.', 'projekte', 'en/projects'],
  'ueber-uns': ['de', 'Über uns', 'Über Big Mark IT Consult, Johnson Eyo und Michael Keller.', 'ueber-uns', 'en/about'],
  'en/about': ['en', 'About', 'About Big Mark IT Consult, Johnson Eyo and Michael Keller.', 'ueber-uns', 'en/about'],
  'zusammenarbeit': ['de', 'Zusammenarbeit', 'Das B2B-Engagement-Modell von Big Mark IT Consult.', 'zusammenarbeit', 'en/engagement'],
  'en/engagement': ['en', 'Engagement', 'The Big Mark IT Consult B2B engagement model.', 'zusammenarbeit', 'en/engagement'],
  'kontakt': ['de', 'Kontakt', 'Besprechen Sie Ihr Engineering-Projekt mit Big Mark IT Consult.', 'kontakt', 'en/contact'],
  'en/contact': ['en', 'Contact', 'Discuss your engineering project with Big Mark IT Consult.', 'kontakt', 'en/contact'],
  'impressum': ['de', 'Impressum', 'Impressum von BIG-MARK IT Consult.', 'impressum', 'impressum'],
  'datenschutz': ['de', 'Datenschutzerklärung', 'Datenschutzerklärung von BIG-MARK IT Consult.', 'datenschutz', 'datenschutz'],
};
for (const [route, [lang, title, description, dePath, enPath]] of Object.entries(routeMeta)) {
  const file = route ? join('dist', route, 'index.html') : join('dist', 'index.html');
  const canonical = `https://big-mark.de/${route ? `${route}/` : ''}`;
  let html = await readFile(file, 'utf8');
  html = html.replace('<html lang="de">', `<html lang="${lang}">`).replace('<title>BIG-MARK IT Consult</title>', `<meta name="description" content="${description}"><link rel="canonical" href="${canonical}"><link rel="alternate" hreflang="de" href="https://big-mark.de/${dePath ? `${dePath}/` : ''}"><link rel="alternate" hreflang="en" href="https://big-mark.de/${enPath}/"><link rel="alternate" hreflang="x-default" href="https://big-mark.de/"><title>${title} | BIG-MARK IT Consult</title>`);
  await writeFile(file, html);
}
const urls = ['', 'en/', 'leistungen/', 'de/partnerschaften/', 'projekte/', 'ueber-uns/', 'zusammenarbeit/', 'kontakt/', 'en/services/', 'en/partnerships/', 'en/projects/', 'en/about/', 'en/engagement/', 'en/contact/', 'impressum/', 'datenschutz/'];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(path => `  <url><loc>https://big-mark.de/${path}</loc></url>`).join('\n')}\n</urlset>\n`;
await writeFile('dist/sitemap.xml', sitemap);

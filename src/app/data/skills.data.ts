export interface SkillGroup {
  title: string;
  items: string[];
}

export const SKILLS_DATA: SkillGroup[] = [
  {
    title: 'Integraciones & APIs',
    items: ['APIs REST', 'Swagger / OpenAPI', 'JSON', 'XML', 'JWT', 'Postman'],
  },
  {
    title: 'Frontend',
    items: ['Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'Python'],
  },
  {
    title: 'Bases de Datos',
    items: ['SQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'DevOps & Metodologías',
    items: ['Git', 'CI/CD', 'Scrum'],
  },
  {
    title: 'Herramientas Corporativas',
    items: ['Jira', 'INVGATE', 'Service Management'],
  },
];
``;

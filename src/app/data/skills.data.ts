import { ES } from '../services/language/i18n/es';

export interface SkillGroup {
  titleKey: keyof typeof ES;
  items: string[];
}

export const SKILLS_DATA: SkillGroup[] = [
  {
    titleKey: 'skillsGroupIntegrations',
    items: ['APIs REST', 'Swagger / OpenAPI', 'JSON', 'XML', 'JWT', 'Postman'],
  },
  {
    titleKey: 'skillsGroupFrontend',
    items: ['Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind'],
  },
  {
    titleKey: 'skillsGroupBackend',
    items: ['Node.js', 'Express', 'Python'],
  },
  {
    titleKey: 'skillsGroupDatabases',
    items: ['SQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    titleKey: 'skillsGroupDevops',
    items: ['Git', 'CI/CD', 'Scrum'],
  },
  {
    titleKey: 'skillsGroupTools',
    items: ['Jira', 'INVGATE', 'Service Management'],
  },
];

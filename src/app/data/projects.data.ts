import { ES } from '../services/language/i18n/es';

export interface Project {
  titleKey: keyof typeof ES;
  contextKey: keyof typeof ES;
  descriptionKey: keyof typeof ES;
  stack: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    titleKey: 'projectIntegrationTitle',
    contextKey: 'projectIntegrationContext',
    descriptionKey: 'projectIntegrationDescription',
    stack: ['APIs REST', 'MidPoint', 'Service Manager', 'JSON', 'JWT'],
  },
  {
    titleKey: 'projectAssetTitle',
    contextKey: 'projectAssetContext',
    descriptionKey: 'projectAssetDescription',
    stack: ['Angular', 'Node.js', 'SQL'],
  },
];

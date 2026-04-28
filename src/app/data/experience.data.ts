import { ES } from '../services/language/i18n/es';

export interface Experience {
  roleKey: keyof typeof ES;
  company: string;
  period: string;
  logo: string;
  responsibilitiesKeys: Array<keyof typeof ES>;
  stack?: string[];
}

export const EXPERIENCE_DATA: Experience[] = [
  {
    roleKey: 'experienceCorreoRole',
    company: 'Correo Argentino',
    period: '2021 – Present',
    logo: 'assets/logo-correo.png',
    responsibilitiesKeys: [
      'experienceCorreoResp1',
      'experienceCorreoResp2',
      'experienceCorreoResp3',
      'experienceCorreoResp4',
      'experienceCorreoResp5',
      'experienceCorreoResp6',
    ],
    stack: ['APIs REST', 'Service Manager', 'MidPoint', 'Angular', 'Node.js', 'SQL', 'JWT'],
  },
  {
    roleKey: 'experienceStiRole',
    company: 'STI Network',
    period: '2019 – 2021',
    logo: 'assets/logo-sti.png',
    responsibilitiesKeys: [
      'experienceStiResp1',
      'experienceStiResp2',
      'experienceStiResp3',
      'experienceStiResp4',
    ],
    stack: ['Redes', 'Soporte técnico', 'Switches', 'Ticketing', 'Infraestructura IT'],
  },
];

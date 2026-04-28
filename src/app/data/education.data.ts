import { ES } from '../services/language/i18n/es';

export interface Education {
  degreeKey: keyof typeof ES;
  institutionKey: keyof typeof ES;
  periodKey: keyof typeof ES;
  descriptionKey?: keyof typeof ES;
  logo: string;
}

export const EDUCATION_DATA: Education[] = [
  {
    degreeKey: 'educationUnajDegree',
    institutionKey: 'educationUnajInstitution',
    periodKey: 'educationUnajPeriod',
    descriptionKey: 'educationUnajDescription',
    logo: 'assets/unaj-logo.jpg',
  },
  {
    degreeKey: 'educationSchoolDegree',
    institutionKey: 'educationSchoolInstitution',
    periodKey: 'educationSchoolPeriod',
    descriptionKey: 'educationSchoolDescription',
    logo: 'assets/logo-escuela.png',
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  logo: string;
  responsibilities: string[];
  stack?: string[];
}

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Analista Técnico-Funcional | Analista de Integraciones | Dev',
    company: 'Correo Argentino',
    period: '2021 – Presente',
    logo: 'assets/logo-correo.png',
    responsibilities: [
      'Integración y automatización de procesos mediante Service Manager y MidPoint para provisión de identidades.',
      'Análisis de requerimientos funcionales y técnicos para integraciones internas.',
      'Diseño y documentación técnica de APIs REST en entornos productivos.',
      'Implementación, homologación y soporte de soluciones tecnológicas.',
      'Coordinación con proveedores y áreas de negocio, asegurando soluciones seguras y escalables.',
      'Desarrollo de sistema interno de Asset Management (frontend y backend).',
    ],
    stack: ['APIs REST', 'Service Manager', 'MidPoint', 'Angular', 'Node.js', 'SQL', 'JWT'],
  },
  {
    role: 'Analista de Soporte On Site N1 / N2',
    company: 'STI Network',
    period: '2019 – 2021',
    logo: 'assets/logo-sti.png',
    responsibilities: [
      'Soporte técnico N1 y N2 en entornos corporativos.',
      'Administración básica de redes: configuración de switches, diagnóstico de conectividad y resolución de incidentes.',
      'Gestión y seguimiento de incidencias mediante herramientas de ticketing.',
      'Soporte a infraestructura IT y usuarios finales.',
    ],
    stack: ['Redes', 'Soporte técnico', 'Switches', 'Ticketing', 'Infraestructura IT'],
  },
];

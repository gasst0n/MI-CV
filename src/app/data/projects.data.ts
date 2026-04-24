export interface Project {
  title: string;
  description: string;
  context: string;
  stack: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Integración Service Manager + MidPoint',
    context: 'Correo Argentino',
    description:
      'Diseño e implementación de integraciones para la provisión automatizada de identidades. Desarrollo de lógica de negocio, validaciones y documentación técnica de APIs REST en entornos productivos.',
    stack: ['APIs REST', 'MidPoint', 'Service Manager', 'JSON', 'JWT'],
  },
  {
    title: 'Sistema interno de Asset Management',
    context: 'Proyecto interno',
    description:
      'Desarrollo de un sistema web para la gestión de activos internos, incluyendo frontend en Angular, backend en Node.js y persistencia en base de datos SQL.',
    stack: ['Angular', 'Node.js', 'SQL'],
  },
];

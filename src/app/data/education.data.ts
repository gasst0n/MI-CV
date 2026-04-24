export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  logo: string;
}

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'Ingeniería en Informática',
    institution: 'Universidad Nacional Arturo Jauretche',
    period: '2022 – Presente',
    description:
      'Ingeniería en Informática con formación en las principales áreas de la disciplina, incluyendo desarrollo de software, bases de datos, sistemas de información, redes, seguridad informática y gestión tecnológica. La carrera brinda una base sólida para el diseño, implementación y mantenimiento de sistemas informáticos, integraciones y soluciones tecnológicas orientadas a entornos organizacionales y productivos.',
    logo: 'assets/unaj-logo.jpg',
  },
  {
    degree: 'Tecnicatura en Informatica con orientación en Sistemas Informáticos y Programación',
    institution: 'E.E.S.T N°4 de Berazategui',
    period: 'Ciclo completo (7 años)',
    description:
      'Formación técnica integral en sistemas informáticos y desarrollo de software. Adquisición de conocimientos en hardware, software, redes, sistemas operativos, seguridad informática y soporte técnico, junto con programación orientada a objetos, desarrollo web, bases de datos, algoritmos y estructuras de datos, orientados al análisis, diseño e implementación de soluciones informáticas.',
    logo: 'assets/logo-escuela.png',
  },
];

export const pipelineOverviewPresentation = {
  pageHeader: {
    title: 'Innovation Pipeline',
    subtitle:
      'Next-generation graphene-enabled technologies under development — from R&D pipeline to pilot trials.',
  },
  innovationPipeline: {
    sectionHeading: {
      number: '01',
      title: 'Pipeline Stages',
      subtitle: 'A view of products from market-ready to future pilots.',
      theme: 'light',
    },
    labels: {
      stepPrefix: 'Step',
    },
    phases: [
      {
        icon: 'Package',
        title: 'Market Ready',
        subtitle: 'Deployed & generating revenue',
        color: 'emerald',
        step: 1,
        products: [
          { name: 'Graphacrete', category: 'Construction', status: 'READY', icon: '🏗️' },
          { name: 'Graffisol', category: 'Solar Yield', status: 'READY', icon: '☀️' },
          { name: 'Ceraphene', category: 'Coatings', status: 'READY', icon: '💎' },
          { name: 'HD-G-PE', category: 'Polymers', status: 'READY', icon: '📦' },
        ],
      },
      {
        icon: 'Rocket',
        title: 'In Pipeline',
        subtitle: 'Scaling for industrial pilots',
        color: 'blue',
        step: 2,
        products: [
          { name: 'Rustene', category: 'Anti-Corrosion', status: 'DEV', icon: '🛡️' },
          { name: 'Graphyre', category: 'Automotive', status: 'DEV', icon: '🚗' },
          { name: 'Thermaphene', category: 'Textiles', status: 'DEV', icon: '🔥' },
          { name: 'Armophene', category: 'Defense', status: 'DEV', icon: '🎖️' },
        ],
      },
      {
        icon: 'FlaskConical',
        title: 'Future Pilots',
        subtitle: 'Breakthrough R&D Concepts',
        color: 'purple',
        step: 3,
        products: [
          { name: 'H₂ Membranes', category: 'Energy', status: 'PILOT', icon: '⚡' },
          { name: 'Desalination', category: 'Water', status: 'PILOT', icon: '💧' },
          { name: 'Li-Ion+', category: 'Storage', status: 'PILOT', icon: '🔋' },
          { name: 'Bio-Sensors', category: 'Medical', status: 'PILOT', icon: '🧬' },
        ],
      },
    ],
    bottomBanner: {
      title: 'The Future is Built on Graphene',
      description:
        'We are continuously expanding our portfolio. Have a specific challenge? Our materials science team can engineer a solution.',
      buttonLabel: 'View Tech Roadmap',
    },
  },
}

// Single source of truth for all branding and page content

export const brand = {
  name: 'MONOATOM',
  nameSub: 'L A B S',
  tagline: 'Engineering the Future with Graphene',
}

export const logo = {
  width: 130,
  height: 146,
  viewBox: '0 0 120 135',
  // Hexagon corner points [x, y pairs as polygon points string]
  hexagons: [
    // Center
    '60,45 75,53.66 75,71 60,79.66 45,71 45,53.66',
    // Top
    '60,10.33 75,19 75,36.33 60,45 45,36.33 45,19',
    // Top Right
    '90,27.66 105,36.33 105,53.66 90,62.33 75,53.66 75,36.33',
    // Bottom Right
    '90,62.33 105,71 105,88.33 90,97 75,88.33 75,71',
    // Bottom
    '60,79.66 75,88.33 75,105.66 60,114.33 45,105.66 45,88.33',
    // Bottom Left
    '30,62.33 45,71 45,88.33 30,97 15,88.33 15,71',
    // Top Left
    '30,27.66 45,36.33 45,53.66 30,62.33 15,53.66 15,36.33',
  ],
  // Nodes: [cx, cy, fill]
  nodes: [
    [60, 10.33, 'white'],
    [45, 19, 'white'],
    [75, 19, '#fcd783'],
    [30, 27.66, 'white'],
    [90, 27.66, '#72d6ed'],
    [15, 36.33, 'white'],
    [45, 36.33, 'white'],
    [75, 36.33, '#fcd783'],
    [105, 36.33, 'white'],
    [60, 45, 'white'],
    [15, 53.66, 'white'],
    [45, 53.66, '#fcd783'],
    [75, 53.66, 'white'],
    [105, 53.66, '#fcd783'],
    [30, 62.33, 'white'],
    [90, 62.33, 'white'],
    [15, 71, 'white'],
    [45, 71, 'white'],
    [75, 71, 'white'],
    [105, 71, 'white'],
    [60, 79.66, '#72d6ed'],
    [30, 88.33, 'white'],
    [90, 88.33, 'white'],
    [15, 88.33, 'white'],
    [45, 88.33, 'white'],
    [75, 88.33, 'white'],
    [105, 88.33, 'white'],
    [30, 97, 'white'],
    [90, 97, 'white'],
    [45, 105.66, 'white'],
    [75, 105.66, 'white'],
    [60, 114.33, 'white'],
  ],
}

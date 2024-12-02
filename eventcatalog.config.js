const publicPath = process.env.BASE_PATH ? `${process.env.BASE_PATH}/` : '';

module.exports = {
  basePath: process.env.BASE_PATH ?? '',
  title: 'OPG Event Store',
  tagline: 'Documentation source for cross-service events',
  organizationName: 'OPG',
  projectName: 'Event Store',
  editUrl: 'https://github.com/ministryofjustice/opg-event-store/edit/main',
  trailingSlash: true,
  primaryCTA: {
    label: 'Explore Events',
    href: '/events'
  },
  secondaryCTA: {
    'label': "Explore Services",
    'href': "/services"
  },
  logo: {
    alt: 'EventCatalog Logo',
    src: 'logo.svg',
  },
  footerLinks: [
    { label: 'Events', href: '/events' },
    { label: 'Services', href: '/services' },
    { label: 'Visualiser', href: '/visualiser' },
    { label: '3D Node Graph', href: '/overview' },
    { label: 'GitHub', href: 'https://github.com/ministryofjustice/opg-event-store/edit/main' }
  ],
  users: [
    {
      id: 'vega',
      name: 'Vega',
      avatarUrl: `${publicPath}vega.svg`,
      role: 'Team',
    },
    {
      id: 'mrlpa',
      name: 'Make and Register an LPA',
      avatarUrl: `${publicPath}make-register.svg`,
      role: 'Team',
    },
    {
      id: 'supervision',
      name: 'Supervision',
      avatarUrl: `${publicPath}supervision.svg`,
      role: 'Team',
    },
    {
      id: 'use',
      name: 'UaL',
      avatarUrl: `${publicPath}use.svg`,
      role: 'Team',
    },
  ],
}

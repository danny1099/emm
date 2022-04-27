export const modules = [
  {
    id: 1,
    icon: 'graph-up',
    name: 'dashboard',
    display: 'Dashboard',
    size: '.9rem',
    items: [
      {
        id: 1,
        name: 'Ventas',
        img: 'box',
        link: ''
      }
    ]
  },
  {
    id: 2,
    icon: 'layers',
    name: 'comercial',
    display: 'Comercial',
    size: '1.2rem',
    items: []
  },
  {
    id: 3,
    icon: 'clipboard-data',
    name: 'wholesales',
    display: 'Ventas',
    size: '1.1rem',
    items: []
  },
  {
    id: 4,
    icon: 'coin',
    name: 'comision',
    display: 'Comisiones',
    size: '1.2rem',
    items: []
  },
  {
    id: 5,
    icon: 'sliders2',
    name: 'parameters',
    display: 'Parametros',
    size: '1.3rem',
    items: [
      {
        id: 1,
        name: 'Puntos de venta',
        img: 'building',
        link: '/agencys'
      },
      {
        id: 2,
        name: 'Cargos',
        img: 'diagram-3',
        link: '/position'
      }
    ]
  }
]

export function getModuleByName(name) {
  if (name === '') {
    return {}
  }

  return modules.filter((module) => module.name === name)
}

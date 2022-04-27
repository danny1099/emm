export default function Dashboard() {
  return <h1>Dashboard</h1>
}

export async function getServerSideProps() {
  return {
    props: {
      title: 'Dashboard | EMM',
      description: 'Equiparse Maquinas & Montacargas',
      useLayout: true
    }
  }
}

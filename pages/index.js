export default function Home() {
  return (
    <div>
      <h1>emm</h1>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Home | EMM',
      description: 'Equiparse Maquinas & Montacargas',
      useLayout: false
    }
  }
}

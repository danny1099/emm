export default function index() {
  return <div>Login</div>
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Login | EMM',
      description: 'Equiparse Maquinas & Montacargas',
      useLayout: false
    }
  }
}

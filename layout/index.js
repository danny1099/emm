import { Main } from './styles/_main'

export default function Layout({ children }) {
  return (
    <Main>
      <div className="menu-client">
        <h2>menu</h2>
      </div>
      <section>{children}</section>
    </Main>
  )
}

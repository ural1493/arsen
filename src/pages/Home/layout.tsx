import s from './layout.module.scss'
import { ReactNode } from "react";

const Layout = ({ children }: {
  children: ReactNode
}) => (
  <main className={s.main}>
    <div className={s.container}>{children}</div>
  </main>
)

export default Layout;

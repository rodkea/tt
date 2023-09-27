import { Logo } from "../components/logo/Logo"

interface Props {
  children : JSX.Element
}

export const Layout = ({ children } : Props ) => {

  return(
    <div className="layout">      
      <Logo />
      { children }
    </div>
  )
}
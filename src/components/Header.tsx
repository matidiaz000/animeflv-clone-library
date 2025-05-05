import { NavLink } from "react-router-dom"

interface IProps {
  logo: string,
  leftContent?: React.ReactNode,
  rightContent?: React.ReactNode 
}

export const Header = ({logo, leftContent, rightContent}: IProps) => {
  return (
    <header className="bg-dark">
      <div className="container-md py-3 py-md-4">
        <div className="d-flex justify-content-between align-items-center">
          <NavLink to="/">
            <img src={logo} alt="AnimeFLV" />
          </NavLink>
          <nav className="d-flex align-items-center ms-md-3 ms-auto">
            {leftContent}
          </nav>
          <nav className="ms-auto d-none d-md-flex align-items-center me-n3">
            {rightContent}
          </nav>
        </div>
      </div>
    </header>
  )
}
interface IProps {
  logo: string,
  leftContent?: React.ReactNode,
  rightContent?: React.ReactNode 
}

export const Header = ({logo, leftContent, rightContent}: IProps) => {
  return (
    <header className="bg-dark">
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center">
          <a href="/">
            <img src={logo} alt="AnimeFLV" />
          </a>
          <nav className="d-flex align-items-center ms-3">
            {leftContent}
          </nav>
          <nav className="ms-auto d-flex align-items-center me-n3">
            {rightContent}
          </nav>
        </div>
      </div>
    </header>
  )
}
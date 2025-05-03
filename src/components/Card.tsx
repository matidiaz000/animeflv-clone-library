import { Icon } from "./Icon"

export type Categories = 'film' | 'anime' | 'ova' | 'default'

export interface ICard {
  img: string,
  category?: Categories,
  title: string,
  subtitle: string,
  link: string,
  time?: string,
  date?: Date,
  children?: React.ReactNode
}

export const Card = ({img, category, title, subtitle, link, time, date, children}: ICard) => {
  const categoryData = (category: ICard["category"], type: "text" | "color"): string => {
    if (type === "text") {
      if (category === "film") return "Pelicula"
      else if (category === "anime") return "Serie"
      else if (category === "ova") return "OVA"
      else return ""
    } else {
      if (category === "film") return "bg-danger-200 text-danger-600"
      else if (category === "anime") return "bg-primary-200 text-primary-600"
      else if (category === "ova") return "bg-secondary-200 text-secondary-600"
      else return "bg-gray-200 text-gray-600"
    }
  }

  const setDate = (date: Date) => {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const day = date.getDate();
    return `${day}/${month}/${year}`;
  }

  if (time) {
    if (img) {
      return (
        <a href={link} className="text-decoration-none CardComponent">
          <div className="position-relative rounded-3 overflow-hidden">
            <img className="mw-100 w-100 border-0 bg-image" src={img} alt={title} />
            <span className="bg-dark text-white position-absolute bottom-0 end-0 m-2 px-2 py-1 rounded small fw-semibold">
              {time}
            </span>
          </div>
          <div className="text-dark text-decoration-none p-2">
            <span className="fw-bold lh-1 mb-1 clamp clamp2">{title}</span>
            <div className="d-flex justify-content-between align-items-start">
              <span className="small clamp clamp2">{subtitle}</span>
              <>{children}</>
            </div>
          </div>
        </a>
      )
    } else {
      return (
        <div className="text-decoration-none CardComponent">
          <div className="position-relative rounded-3 overflow-hidden">
            <div className="bg-primary text-white w-100 d-flex justify-content-center align-items-center flex-column" style={{height: 93}}>
              <Icon icon="Show" size={35}/>
              <span>Reproduciendo</span>
            </div>
          </div>
          <div className="text-dark text-decoration-none p-2">
            <span className="fw-bold lh-1 mb-1 clamp clamp2">{title}</span>
            <div className="d-flex justify-content-between align-items-start">
              <span className="small clamp clamp2">{subtitle}</span>
              <>{children}</>
            </div>
          </div>
        </div>
      )
    }
  }

  if (title && subtitle) return (
    <a href={link} className="text-decoration-none CardComponent">
      <div className="position-relative rounded-3 overflow-hidden">
        <div
          className="mw-100 w-100 bg-image"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <span className={`badge ${categoryData(category, "color")} text-uppercase position-absolute bottom-0 start-0 m-2`}>
          {categoryData(category, "text")}
        </span>
      </div>
      <div className="text-center text-dark py-2 mt-2">
        <span className="fw-bold lh-1 mb-2 clamp clamp2">{title}</span>
        <span className="text-opacity-50 small d-block">{subtitle}</span>
      </div>
    </a>
  )

  if (date) return (
    <>
      <div className="d-flex align-items-center justify-content-center bg-primary rounded-3">
        <div className="d-flex flex-column align-items-center py-3">
          <Icon icon="Calendar" size={50} className="text-white mb-1" />
          <span className="fw-bold text-white small">{setDate(date)}</span>
        </div>
      </div>
      <div className="text-center p-2">
        <span className="fw-bold">{title}</span>
      </div>
    </>
  )

  return (
    <div className="bg-light p-2 rounded-3">
      <img className="rounded-3 w-100 mw-100" src={img} alt={title} />
    </div>
  )
}

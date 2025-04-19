import IconsJSON from '../icomoon/selection.json'

interface IconSet {
  icon: {
    paths: string[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    attrs: any[],
    grid: number,
    tags: string[],
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attrs: any[],
  properties: {
    order: number,
    id: number,
    name: string,
    prevSize: number,
    code: number,
  },
  setIdx: number,
  setId: number,
  iconIdx: number
}

interface IProps {
  size?: string | number;
  icon: string;
  style?: React.CSSProperties;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

export const Icon = ({ icon, size = 24, style = {}, ...rest }: IProps) => {
  return (
    <>
      {
        IconsJSON.icons.map((el: IconSet) => {
          if (el.properties.name === icon) {
            return (
              <svg
                key={el.iconIdx}
                style={{overflow: "visible", ...style}}
                width={size}
                height={size}
                viewBox="0 0 1024 1024"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...rest}
              >
                {/*<path d={el.icon.paths[0]} fill="currentColor" {...el.icon.attrs} /> */}
                <path d={el.icon.paths.toString()} fill="currentColor" />
              </svg>
            )
          }
        })
      }
    </>
  );
};

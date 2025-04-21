export interface IIcon {
  icon: {
    path: string[],
    attrs: any[]
    grid: number,
    tags: string[]
  },
  attrs: string[],
  properties: {
    order: number,
    id: number,
    name: string,
    prevSize: number,
    code: number
  },
  setIdx: number,
  setId: number,
  iconIdx: number
}

export interface IPreferences {
  showGlyphs: boolean,
  showQuickUse: boolean,
  showQuickUse2: boolean,
  showSVGs: boolean,
  fontPref: {
    prefix: string,
    metadata: {
      fontFamily: string,
      majorVersion: number,
      minorVersion: number
    },
    metrics: {
      emSize: number,
      baseline: number,
      whitespace: number
    },
    embed: boolean,
    noie8: boolean,
    ie7: boolean,
    showSelector: boolean,
    selector: string,
    showMetrics: boolean,
    showMetadata: boolean,
    showVersion: boolean,
    autoHost: boolean
  },
  imagePref: {
    prefix: string,
    png: boolean,
    useClassSelector: boolean,
    color: number,
    bgColor: number,
    classSelector: string
  },
  historySize: number,
  showCodes: boolean,
  gridSize: number,
  quickUsageToken: {
    animeflv: string
  }
}

export interface IIcomoonSelection {
  IcoMoonType: string,
  icons: IIcon[],
  height: number,
  metadata: {
    name: string
  },
  preferences: IPreferences
}
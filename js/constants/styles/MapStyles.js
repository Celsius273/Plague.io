export const DEFAULT_MAP = 'world_mill'

export const BACKGROUND_COLOR = '#112255'

export const mapStyle = {
    map: DEFAULT_MAP,
    backgroundColor: BACKGROUND_COLOR,
    regionStyle: {
        initial: {
            fill: 'white',
            'fill-opacity': 1,
            stroke: 'white',
            'stroke-width': 0,
            'stroke-opacity': 1,
        }
    },
    series: {
        regions: [{
            attribute: 'fill'
        }]
    },
    zoomOnScroll: false,
    panOnDrag: false,
    zoomStep: 0,
    onRegionTipShow: ((e, el, code) => {
        e.preventDefault();
    }),
    onRegionOver: ((e, code) => {
        e.preventDefault();   
    })
}

const palette = ['']

// export colorizeMap = ()

/*
const palette = ['rgb(50, 194, 223)', 'rgb(100, 207, 233)', 'rgb(151, 207, 233)']
const generateColors = (() => {
    const colors = {}
    let key

    console.log(worldMap.regions)
    Immutable.fromJS(worldMap.regions).forEach((value, key) => {
        colors[key] = palette[Math.floor(Math.random()*palette.length)]
    })
    return colors
})

worldMap.series.regions[0].setValues(generateColors())
*/
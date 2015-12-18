export const DEFAULT_MAP = 'world_mill'

export const BACKGROUND_COLOR = '#112255'

// deprecated
export const markerStyle = {
    initial: {
        fill: '#F8E23B',
        stroke: '#383f47',
        r: 10
    }
}

export const mapStyle = {
    map: DEFAULT_MAP,
    backgroundColor: BACKGROUND_COLOR,
    markerStyle: markerStyle,
    regionStyle: {
        initial: {
            fill: 'white',
            'fill-opacity': 1,
            stroke: 'white',
            'stroke-width': 0,
            'stroke-opacity': 1,
        }
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

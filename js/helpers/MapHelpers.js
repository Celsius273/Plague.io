import {CITY_COLORS} from '../constants/styles/CityStyles'


export const coordinatesToPoint = ((map, city) => {
    const cityCoordinates = city.get('coordinates')
    return map.latLngToPoint(
        cityCoordinates[0],
        cityCoordinates[1]
    )
})

export const getCityAttr = ((city, x, y) => {
    return {
        fill: CITY_COLORS[city.get('initialDiseaseColouring')],
        cx: x, cy: y,
        id: city.get('name'),
        'data-click-id': city.get('name')
    }
})
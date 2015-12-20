import Immutable from 'immutable'
import React from 'react'

import {CITY_COLORS} from '../constants/styles/CityStyles'
import PlayerActions from '../actions/PlayerActions'
import {coordinatesToPoint, getCityAttr} from '../helpers/MapHelpers'
import MapStore from '../stores/MapStore'


// global for svg overlay
let drawLayer

var Cities = React.createClass({
    propTypes: {
        cities: React.PropTypes.object.isRequired,
        mapObject: React.PropTypes.object,
        isMapInitialized: React.PropTypes.bool
    },

    getDefaultProps() {
        return {
            isMapInitialized: false,
            mapObject: null
        }
    }, 

    getContainerSize() {
        return {
            width: this.refs.map_overlay.clientWidth,
            height: this.refs.map_overlay.clientHeight
        }
    },

    connectMarkers(cities) {
        const map = this.props.mapObject
        let connected = new Immutable.Set()
        cities.forEach((city, cityId) => {
            const adjacencies = city.get('adjacencies')
            const cityCoordinates = coordinatesToPoint(map, city)

            adjacencies.forEach((adjacentCityId) => {
                if (connected.has(adjacentCityId)) {
                    return
                }

                const adjacentCity = cities.get(adjacentCityId)
                const adjacentCoordinates = coordinatesToPoint(map, adjacentCity)

                drawLayer.line(
                    cityCoordinates.x, cityCoordinates.y,
                    adjacentCoordinates.x, adjacentCoordinates.y
                    ).stroke({
                        color: CITY_COLORS[city.get('initialDiseaseColouring')],
                        width: 6
                    })
            })

            connected = connected.add(cityId)
        })
    },

    createMarkers(cities) {
        const map = this.props.mapObject
        cities.forEach((city) => {
            const {x, y} = coordinatesToPoint(map, city)

            /*
            {
                fill: CITY_COLORS[city.get('initialDiseaseColouring')],
                cx: x, cy: y,
                id: city.get('name'),
                'data-click-id': city.get('name'),
                stroke: 'black',
                'stroke-width': '3'
            }
            */

            drawLayer.circle()
                .radius(15)
                .attr(getCityAttr(city, x, y))
                .addClass(`city ${city.get('initialDiseaseColouring')}`)
                .on('click', (e) => {
                    e.stopPropagation()
                    PlayerActions.selectCity(city)
                })
        })
    },

    createMapOverlay() {
        const {width, height} = this.getContainerSize()
        window.addEventListener('resize', this.handleResize)

        const cities = this.props.cities
        drawLayer = SVG(this.refs.map_overlay).size(width, height)
        .viewbox({
            x: 0, y: 0,
            width: width, height: height
        })

        this.connectMarkers(cities)
        this.createMarkers(cities)
    },

    handleResize() {
        const {width, height} = this.getContainerSize()
        drawLayer.size(width, height)
    },

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    },

    render() {
        if (this.props.isMapInitialized) {
            this.createMapOverlay()
        }

        return (
            <div
                className='world-map-overlay'
                ref='map_overlay'
            >
            </div>
        )
    }
})

export default Cities
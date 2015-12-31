import Immutable from 'immutable'
import React from 'react'

import {CITY_SIZE} from '../../../constants/MapConstants'
import PlayerActions from '../../../actions/PlayerActions'
import MapStore from '../../../stores/MapStore'


// global for svg overlay
let drawLayer

const coordinatesToPoint = ((map, city) => {
    const cityCoordinates = city.get('coordinates')
    return map.latLngToPoint(
        cityCoordinates[0],
        cityCoordinates[1]
    )
})

const getCityAttr = ((city, x, y) => {
    return {
        cx: x, cy: y,
        id: city.get('name'),
        'data-click-id': city.get('name')
    }
})

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

    renderCityConnections(cities) {
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

                const line = drawLayer.line(
                    cityCoordinates.x, cityCoordinates.y,
                    adjacentCoordinates.x, adjacentCoordinates.y
                    ).stroke({
                        color: '#bfa', width: 4
                    }).filter((add) => {
                        add.gaussianBlur(1.4)
                    })
            })

            connected = connected.add(cityId)
        })
    },

    renderDiseases(cities) {
        
    },

    renderCityMarkers(cities) {
        const map = this.props.mapObject
        cities.forEach((city) => {
            const {x, y} = coordinatesToPoint(map, city)

            const circle = drawLayer.circle()
                .radius(CITY_SIZE)
                .attr(getCityAttr(city, x, y))
                .addClass(`city ${city.get('initialDiseaseColouring')}`)
                .on('click', (e) => {
                    e.stopPropagation()
                    PlayerActions.selectCity(city)
                })
        })
    },

    renderPlayers(cities) {
        
    },

    renderResearchCenters(cities) {

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

        // steps are ordered by the order in which elements overlap each other
        // most of this is really just appending stuff to the svg layer
        this.renderCityConnections(cities)
        // this.renderDiseases(cities)
        this.renderCityMarkers(cities)
        // this.renderPlayers(cities)
        // this.renderResearchCenters(cities)
    },

    handleResize() {
        const {width, height} = this.getContainerSize()
        drawLayer.size(width, height)
    },

    componentWillUpdate() {
        if (this.props.isMapInitialized) {
            drawLayer.remove()
        }
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
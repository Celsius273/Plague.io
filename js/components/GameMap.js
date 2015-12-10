import React from 'react'

import MapStore from '../stores/MapStore'
import {mapStyle} from '../constants/styles/MapStyles'
import TestActions from '../actions/TestActions'

let worldMap
let drawLayer

var GameMap = React.createClass({
    propTypes: {
        GameStore: React.PropTypes.object.isRequired,
        MapStore: React.PropTypes.object.isRequired
    },

    connectMarkers() {
        const test1 = [64.133, -21.933]
        const test2 = [48.857, 2.351]

        var coords1 = worldMap.latLngToPoint(test1[0], test1[1])
        var coords2 = worldMap.latLngToPoint(test2[0], test2[1])

        drawLayer.line(
            coords1.x, coords1.y, coords2.x, coords2.y
            ).stroke({
                color: '#f0f',
                width: 4
            })
    },

    createMarkers(cities) {
        cities.forEach((city) => {
            const {x, y} = worldMap.latLngToPoint(
                city.get('coordinates')[0],
                city.get('coordinates')[1]
            )

            drawLayer.circle()
                .radius(10)
                .attr({
                    fill: '#370',
                    cx: x,
                    cy: y
                })
        })
    },

    componentDidMount() {
        const mapStore = this.props.MapStore
        const cities = mapStore.get('cities')
        const mapProps = {
            markers: MapStore.createMarkers(mapStore.get('cities'))
        }

        Object.assign(mapProps, mapStyle)
        $('.world-map').vectorMap(mapProps)
        worldMap = $('.world-map').vectorMap('get', 'mapObject')
        drawLayer = SVG(this.refs.map_overlay).size(1500, 1000)

        this.connectMarkers()
        this.createMarkers(cities)

    },

    render() {
        const mapStyle = {
            width: '1500px',
            height: '1000px'
        }
        return (
            <div className='world-map-container'>
                <div
                    className='world-map'
                    style={mapStyle}
                >
                </div>
                <div
                    className='world-map-overlay'
                    ref='map_overlay'
                >
                </div>
            </div>
        )
    }
})

export default GameMap
import React from 'react'

import PlayerActions from '../actions/PlayerActions'
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

    connectMarkers() {
        const latLngToPoint = this.props.latLngToPoint

        const test1 = [64.133, -21.933]
        const test2 = [48.857, 2.351]

        var coords1 = this.props.mapObject.latLngToPoint(test1[0], test1[1])
        var coords2 = this.props.mapObject.latLngToPoint(test2[0], test2[1])

        drawLayer.line(
            coords1.x, coords1.y, coords2.x, coords2.y
            ).stroke({
                color: '#f0f',
                width: 4
            })
    },

    createMarkers(cities) {
        cities.forEach((city) => {
            const {x, y} = this.props.mapObject.latLngToPoint(
                city.get('coordinates')[0],
                city.get('coordinates')[1]
            )

            drawLayer.circle()
                .radius(10)
                .attr({
                    fill: '#370',
                    cx: x,
                    cy: y,
                    id: city.get('name'),
                    'data-click-id': city.get('name')
                }).on('click', (e) => {
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
            x: 0,
            y: 0,
            width: width,
            height: height
        })

        this.connectMarkers()
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
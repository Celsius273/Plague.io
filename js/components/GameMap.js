import React from 'react'

import Cities from '../components/Cities'
import PlayerActions from '../actions/PlayerActions'
import MapStore from '../stores/MapStore'
import {mapStyle} from '../constants/styles/MapStyles'


// globals for map
let worldMap

var GameMap = React.createClass({
    propTypes: {
        GameStore: React.PropTypes.object.isRequired,
        MapStore: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            isMapInitialized: false
        }
    },

    getContainerSize() {
        return {
            width: this.refs.map_container.clientWidth,
            height: this.refs.map_container.clientHeight
        }
    },

    componentDidMount() {
        const {width, height} = this.getContainerSize()
        $('.world-map').vectorMap(mapStyle)
        worldMap = $('.world-map').vectorMap('get', 'mapObject')

        this.setState({
            isMapInitialized: true
        })
    },

    render() {
        return (
            <div
                className='world-map-container'
                ref='map_container'
            >
                <div
                    className='world-map'
                    ref='map'
                >
                </div>
                <Cities
                    cities={this.props.MapStore.get('cities')}
                    mapObject={worldMap}
                    isMapInitialized={this.state.isMapInitialized}
                />
            </div>
        )
    }
})

export default GameMap
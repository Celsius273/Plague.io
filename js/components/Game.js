import alt from '../alt'
import AltContainer from 'alt-container'
import Formsy from 'formsy-react'
import React from 'react'
import ReactDOM from 'react-dom'

import GameStore from '../stores/GameStore'
import TestActions from '../actions/TestActions'
import MapStore from '../stores/MapStore'
import GameHeader from './GameHeader'
import GameMap from './GameMap'
import GameConsole from './GameConsole'

var GameInner = React.createClass({
    propTypes: {
        GameStore: React.PropTypes.object.isRequired,
        MapStore: React.PropTypes.object.isRequired
    },

    render() {
        return (
            <div className='game-container'>
                <GameHeader
                    GameStore = {this.props.GameStore}
                />
                <GameMap
                    GameStore = {this.props.GameStore}
                    MapStore = {this.props.MapStore}
                />
                <GameConsole
                    GameStore = {this.props.GameStore}
                />
            </div>
        )
    }
})

var Game = React.createClass({
    componentDidMount() {
        // fetch game data here or redirect to login screen
    },

    render() {
        const stores = {
            GameStore,
            MapStore
        }
        return (
            <AltContainer
                stores = {stores}
                component = {GameInner}
            />
        )
    }
})

export default Game
import React from 'react'

import GameStore from '../stores/MapStore'


var GameHeader = React.createClass({
    propTypes: {
        GameStore: React.PropTypes.object.isRequired
    },

    render() {
        return (
            <div className='game-header' ref='game_header'>
            </div>
        )
    }
})

export default GameHeader
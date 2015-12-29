import React from 'react'

import GameStore from '../../../stores/MapStore'


var GameConsole = React.createClass({
    propTypes: {
        GameStore: React.PropTypes.object.isRequired
    },

    render() {
        return (
            <div className='game-console'>
            </div>
        )
    }
})

export default GameConsole
import classNames from 'classnames'
import React from 'react'

import GameStore from '../stores/GameStore'


var GameHeader = React.createClass({
    propTypes: {
        GameStore: React.PropTypes.object.isRequired
    },

    createDiseaseComponents(diseases) {
        const elements = diseases.map((numDiseases, diseaseColor) => {
            const classes = classNames(
                'header-disease-count',
                diseaseColor
            )

            return (
                <div className={classes}>
                    <p><i className="fa fa-bug"></i> {numDiseases} / 24</p>
                </div>
            )
        })
        return elements
    },

    render() {
        const infectionRate = this.props.GameStore.get('infectionRate')
        const outbreaks = this.props.GameStore.get('outbreaks')

        const diseaseComponents = this.createDiseaseComponents(
            this.props.GameStore.get('diseases'))

        return (
            <div className='game-header' ref='game_header'>
                <div className='header-infection-rate'>
                    <p>Infection rate: {infectionRate}</p>
                </div>
                <div className='header-outbreaks'>
                    <p>Outbreaks: {outbreaks}</p>
                </div>
                {diseaseComponents}
            </div>
        )
    }
})

export default GameHeader
import classNames from 'classnames'
import Immutable from 'immutable'
import React from 'react'


var Cures = React.createClass({
    propTypes: {
        cures: React.PropTypes.object.isRequired,
    },

    createCureIcon(isCureFound, diseaseColor) {
        const cureClasses = classNames(
            'fa', 'fa-stack-lg', 'fa-flask', diseaseColor
        )

        const cureOverlayClasses = classNames(
            'fa', 'fa-stack-2x', 'fa-circle', 'cures-overlay'
        )

        const notCured = isCureFound ? null : (
            <i className='fa fa-stack-2x fa-ban dark-red'></i>
        )

        return (
            <span className="fa-stack fa-lg">
                <i className={cureOverlayClasses}></i>
                <i className={cureClasses}></i>
                {notCured}
            </span>
        )
    },

    createCureComponents(cures) {
        const cureComponents = cures.map((isCureFound, diseaseColor) => {
            const cureIcon = this.createCureIcon(isCureFound, diseaseColor)

            return (
                <div className='cures-child'>
                    <p className='no-margin'>
                        {cureIcon}
                    </p>
                </div>
            )
        })
        return cureComponents
    },

    render() {
        const curesFound = this.createCureComponents(this.props.cures)

        return (
            <div
                className='world-map-cures'
                ref='map_cures'
            >
                <p className='no-margin cures-title'>Cures Found</p>
                {curesFound}
            </div>
        )
    }
})

export default Cures

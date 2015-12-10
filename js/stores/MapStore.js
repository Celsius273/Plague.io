import alt from '../alt'
import {bind, datasource, decorate} from 'alt/utils/decorators'
import Immutable from 'immutable'

import {DISEASE_COLORS} from '../constants/GameConstants'
import TestActions from '../actions/TestActions'

@decorate(alt)
export class MapStore {
    static displayName = 'MapStore'

    constructor() {
        this.state = this.defaultState()
    }

    defaultState() {
        return new Immutable.Map({
            cities: new Immutable.Map({
                1: new Immutable.Map({
                    id: 1,
                    name: 'Reykjavik',
                    adjacencies: new Immutable.Set([2]),
                    coordinates: [64.133, -21.933],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLUE
                }),
                2: new Immutable.Map({
                    id: 2,
                    name: 'Paris',
                    adjacencies: new Immutable.Set([1]),
                    coordinates: [48.857, 2.351],
                    hasResearchCenter: true,
                    initialDiseaseColouring: DISEASE_COLORS.YELLOW
                })
            })
        })
    }

    static createMarkers(cities) {
        const markers = []
        cities.forEach((city) => {
            markers.push({
                latLng: city.get('coordinates'),
                name: city.get('name')
            })
        })
        return markers
    }
}

export default alt.createStore(MapStore)
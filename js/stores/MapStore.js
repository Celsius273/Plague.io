import alt from '../alt'
import {bind, datasource, decorate} from 'alt/utils/decorators'
import Immutable from 'immutable'

import {DISEASE_COLORS} from '../constants/GameConstants'
import PlayerActions from '../actions/PlayerActions'


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
                    id: '1',
                    name: 'Reykjavik',
                    adjacencies: new Immutable.Set(['2', '3']),
                    coordinates: [64.133, -21.933],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLUE
                }),
                2: new Immutable.Map({
                    id: '2',
                    name: 'Paris',
                    adjacencies: new Immutable.Set(['1', '3']),
                    coordinates: [48.857, 2.351],
                    hasResearchCenter: true,
                    initialDiseaseColouring: DISEASE_COLORS.YELLOW
                }),
                3: new Immutable.Map({
                    id: '3',
                    name: `St. John's`,
                    adjacencies: new Immutable.Set(['1', '2', '4']),
                    coordinates: [47.567, -52.707],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.RED
                }),
                4: new Immutable.Map({
                    id: '4',
                    name: 'Washington D.C.',
                    adjacencies: new Immutable.Set(['3']),
                    coordinates: [38.905, -77.016],
                    hasResearchCenter: false,
                    initialDiseaseColouring: DISEASE_COLORS.BLACK
                })
            }),
            selectedCity: null,
            currentCity: null
        })
    }

    @bind(PlayerActions.selectCity)
    onSelectCity(city) {
        console.log(city.toJS())
    }
}

export default alt.createStore(MapStore)
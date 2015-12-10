import alt from '../alt'
import {bind, datasource, decorate} from 'alt/utils/decorators'
import Immutable from 'immutable'


@decorate(alt)
export class GameStore {
    static displayName = 'GameStore'

    constructor() {
        this.state = this.defaultState()
    }

    defaultState() {
        return new Immutable.Map({
            cures: new Immutable.Map({
                red: false,
                yellow: false,
                blue: false,
                black: false
            }),
            diseases: new Immutable.Map({
                red: 0,
                yellow: 0,
                blue: 0,
                black: 0
            }),
            outbreaks: 0,
            cityCards: [],
            cityCardDiscards: [],
            infectionCards: [],
            infectionCardDiscards: []
        })
    }
}

export default alt.createStore(GameStore)
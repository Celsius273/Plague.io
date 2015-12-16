import alt from '../alt'


class PlayerActions {
    static displayName = 'PlayerActions'

    constructor() {
        this.generateActions(
            'selectCity'
        )
    }
}

export default alt.createActions(PlayerActions)
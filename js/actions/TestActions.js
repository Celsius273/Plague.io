import alt from '../alt'


class TestActions {
    // static displayName = 'TestActions'

    constructor() {
        this.generateActions(
            'testAction'
        )
    }
}

export default alt.createActions(TestActions)
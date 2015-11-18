import alt from '../alt'
import {bind, datasource, decorate} from 'alt/utils/decorators'
import Immutable from 'immutable'

import TestActions from '../actions/TestActions'

@decorate(alt)
export class TestStore {
    static displayName = 'TestStore'

	constructor() {
        this.state = this.defaultState()
    }

    defaultState() {
        return new Immutable.Map({
        	message: 'React test here'
        })
    }

    @bind(TestActions.testAction)
    onTestAction(message) {
    	this.setState(
    		this.state.set('message', message)
    	)
    }
}

export default alt.createStore(TestStore)
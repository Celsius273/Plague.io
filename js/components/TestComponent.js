import alt from '../alt'
import AltContainer from 'alt-container'
import Formsy from 'formsy-react'
import React from 'react'
import ReactDOM from 'react-dom'

import InputText from './InputText'
import TestActions from '../actions/TestActions'
import TestStore from '../stores/TestStore'

var TestComponentChild = React.createClass({
    propTypes: {
        TestStore: React.PropTypes.object.isRequired
    },

    submit(input) {
        TestActions.testAction(input.test)
    },

    render() {
        const message = this.props.TestStore.get('message')
        const inputName = 'test'
        return (
            <div
                className="test-component"
            >
                <h1>{message}</h1>
                <Formsy.Form
                    onValidSubmit={this.submit}
                >
                    <InputText
                        name={inputName}
                        // validations="isTest"
                        // validationError="This is not a valid message"
                    />
                    <button
                        type="submit"
                    >
                    Change message
                    </button>
                </Formsy.Form>
            </div>
        )
    }
})

var TestComponent = React.createClass({
    render() {
        const stores = {
            TestStore
        }
        return (
            <AltContainer
                stores = {stores}
                component = {TestComponentChild}
            />
        )
    }
})

export default TestComponent
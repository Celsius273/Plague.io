import Formsy from 'formsy-react'
import React from 'react'
import ReactDOM from 'react-dom'

var InputText = React.createClass({
    mixins: [Formsy.Mixin],

    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    changeValue: function (event) {
        this.setValue(event.currentTarget.value);
    },
    render: function () {
        return (
            <div className="input-text">
                <input
                    type="text"
                    onChange={this.changeValue}
                />
            </div>
        )
    }
})

export default InputText
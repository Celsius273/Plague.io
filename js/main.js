import TestComponent from '../js/components/TestComponent'

// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var chromeDebug = require('alt/utils/chromeDebug');

ReactDOM.render(
	<TestComponent/>,
	document.getElementById('container')
)
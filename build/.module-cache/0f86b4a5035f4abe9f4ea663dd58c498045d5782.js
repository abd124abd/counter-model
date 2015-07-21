/** @jsx React.DOM */

'use strict';

var AddButtons = React.createClass({displayName: "AddButtons",
	onClickHandler: function(evt) {
		return this.props.onClick
	},
	render: function() {
		return React.createElement("button", {className: "add-button", onClick: this.onClickHandler}, "+")
	}
});

var SubtractButtons = React.createClass({displayName: "SubtractButtons",
	render: function() {
		return React.createElement("button", {className: "subtract-button", onClick: this.props.onClick}, "-")
	}
});

var Counter = React.createClass({displayName: "Counter",

	onAdd: function() {
		this.setState({
			count: 34,
		})
	},

	onSubtract: function() {
		this.setState({
			count: 5675,
		})
	},

	addCreation: function() {
		return React.createElement(AddButtons, {onClick: this.onAdd});
	},

	getInitialState: function() {
		return {
			count: 10,
			add: this.addCreation(),
		};
	},

	render: function() {
		return React.createElement("div", null, 
			   	React.createElement("div", {className: "count"}, this.state.count), 
			   	React.createElement("button", {className: "add-button", onClick: this.onAdd}, "asdfsa"), 
			   	React.createElement(SubtractButtons, {onClick: this.onSubtract})
			   )
	}
});

React.render(React.createElement(Counter, null), document.getElementById('container'));
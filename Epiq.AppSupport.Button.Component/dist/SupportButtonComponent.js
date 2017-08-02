import React from 'react';
import dotnetify from 'dotnetify';
import SupportChatIntegrationComponent from 'epiq-appsupport-chatintegration-component';

class SupportButtonComponent extends React.Component {
	constructor(props) {
		super(props);

		dotnetify.react.connect("SayHiVM", this);
		this.state = { Greetings: "", ServerTime: "" };
	}

	render() {
		var style = {
			'background-color': 'green',
			'border-radius': '5px'
		};

		return React.createElement(
			'button',
			{ style: style },
			'Send'
		);
	}
}

export default SupportButtonComponent;

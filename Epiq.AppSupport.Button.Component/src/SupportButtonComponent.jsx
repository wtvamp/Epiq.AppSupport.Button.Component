import React from 'react';

class SupportButtonComponent extends React.Component {
    constructor(props) {
        super(props);
	}

	render() {
		var style = {
			'background-color': 'green',
			'border-radius': '5px'
		};

        return (
            <button style={style} onClick={this.props.onClick}>Send</button>
        );
    }
}

export default SupportButtonComponent;
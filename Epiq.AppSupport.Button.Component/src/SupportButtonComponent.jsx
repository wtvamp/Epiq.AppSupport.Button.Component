import React from 'react';

class SupportButtonComponent extends React.Component {
    constructor(props) {
        super(props);
	}

	render() {
        return (
            <button onClick={this.props.onClick}>Open Support Chat</button>
        );
    }
}

export default SupportButtonComponent;
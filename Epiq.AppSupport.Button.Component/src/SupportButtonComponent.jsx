import React from 'react';

class SupportButtonComponent extends React.Component {
    constructor(props) {
        super(props);
	}

	render() {
	    const style = {
            'backgroundColor': '#9ebcea',
	        'borderRadius': '5px'
	    };

	    return (
            <button style={style} onClick={this.props.onClick}>Start Chat</button>
        );
    }
}

export default SupportButtonComponent;
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

        return React.createElement(
            'button',
            { style: style, onClick: this.props.onClick },
            'Send'
        );
    }
}

export default SupportButtonComponent;

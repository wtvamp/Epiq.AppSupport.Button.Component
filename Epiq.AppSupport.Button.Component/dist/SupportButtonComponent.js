import React from 'react';

class SupportButtonComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'button',
            { onClick: this.props.onClick },
            'Open Support Chat'
        );
    }
}

export default SupportButtonComponent;

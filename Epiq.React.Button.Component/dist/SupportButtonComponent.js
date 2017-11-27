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

        return React.createElement(
            'button',
            { style: style, onClick: this.props.onClick },
            'Start Chat'
        );
    }
}

export default SupportButtonComponent;

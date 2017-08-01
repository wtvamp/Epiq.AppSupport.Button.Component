import React from 'react';
import dotnetify from 'dotnetify';
import { Button } from 'react-bootstrap';

class SupportButtonComponent extends React.Component {
    constructor(props) {
        super(props);

        dotnetify.react.connect("SayHiVM", this);
		this.state = { Greetings: "", ServerTime: "" };

		
    }

    render() {
        return (
			<Button bsStyle="success">Send</Button>
        );
    }
}



export default SupportButtonComponent;
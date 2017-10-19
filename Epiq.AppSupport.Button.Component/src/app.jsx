import React from 'react';
import ReactDOM from 'react-dom';
import SupportButtonComponent from 'SupportButtonComponent.jsx';
import $ from 'jquery';

//$.connection.hub.url = "http://localhost:53035/signalr";

ReactDOM.render(
    <SupportButtonComponent />,
    document.getElementById('Content')
);
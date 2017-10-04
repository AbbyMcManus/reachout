import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        var renderedSidebar = null;
        console.log(this.props)
        if (this.props.isOpen) {
            renderedSidebar = (
                <div id="sidebar">
                    <h4>sidebar</h4>
                    <p>sidebar links will go in here</p>
                </div>
            );
        } else {
            renderedSidebar = <div></div>
        }
        return renderedSidebar;
    }
}

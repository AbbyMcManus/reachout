import React, { Component } from 'react';

import TopNav from './topnav.js';
import Sidebar from './sidebar.js';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { sidebarIsOpen: false };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.setState(Object.assign({}, this.state, { sidebarIsOpen: !this.state.sidebarIsOpen}));
    }
    render() {
        var sidebarIsOpen = false;
        return (
            <div>
                <TopNav />
                <h3>user header will go here</h3>
                <hr/>
                <div>user info will go here</div>
                <button onClick={this.onClick}>toggle sidebar (temp)</button>
                <Sidebar isOpen={this.state.sidebarIsOpen} />
            </div>
        );
    }
}

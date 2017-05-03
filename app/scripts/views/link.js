import React from 'react';

const Link = React.createClass({
    render: function() {
        return (<a href={this.props.destination}>{this.props.name}</a>);

    }
});


export default Link;

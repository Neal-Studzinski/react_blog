import React from 'react';

const Post = React.createClass({
    getInitialState: function() {
        return {

            hidden: false
        }
    },

    hideContent: function() {
        this.setState({
            hidden: !this.state.hidden
        });
    },
    render: function() {
        var pClass = 'show-content';
        if (this.state.hidden) {
            pClass = 'hide-content';
        }
        return(
            <div className = 'blog-post'>
                <h3>{this.props.title}</h3>
                <p className = {pClass}>{this.props.body}</p>
                <button onClick={this.hideContent}>Hide</button>
                <sub>{this.props.name}</sub>
                <sub>{this.props.time}</sub>

            </div>
        )
    }
})

export default Post;

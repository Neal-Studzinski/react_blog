import React from 'react';
import Header from './header.js';
import Posts from './posts.js';
import NewPost from './newPost.js';

export default React.createClass({
    render: function() {
        return ( <main>
            <Header />
            <NewPost />
            <Posts />

            </main>
        );
    }
});

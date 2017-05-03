import React from 'react';

export default React.createClass({

    getInitialState: function() {
        return {
            hideForm: true
        }
    },

    formHandler: function() {
        this.setState({
            hideForm: !this.state.hideForm
        })
    },

    handler: function(e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'http://tiny-za-server.herokuapp.com/collections/nealblog',
            contentType: 'application/json',
            data: JSON.stringify({
                    name: 'Neal',
                    title: e.target.querySelector('input').value,
                    body: e.target.querySelector('textArea').value,
                    time: '4:19pm'
            })
        })

    },
    render: function() {
        var pClass = 'hide-content';
        if (this.state.hideForm=== false) {
            pClass = 'show-content';
        }
        return(

            <section className = 'form-flex'>
            <button className='submit-button' onClick={this.formHandler}>New Post</button>
                <form className={pClass} onSubmit={this.handler}>

                    <label htmlFor='new-title'>Title</label>
                    <input id='new-title' type='text' placeholder='Post Title'/><br />
                    <label htmlFor= 'new-post'>Post</label>
                    <textArea id='new-post'type='text' rows='8' cols='80' placeholder="Enter your blog post" />
                    <br />
                    <button className = 'submit-button2' >Submit</button>
                </form>
            </section>)
            }

}
)

import React, { Component, components} from 'react';
import {Link} from 'react-router-dom'
import searlizeform from 'form-searlize'

class CreateContact extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const values = searlizeform(e.target,{ hash: true});
        if(this.props.onCreateContact) {
            this.props.onCreateContact(values)
        }
    }

    render() {
        return(
            <div>
                <link to='/' className='close-create-contact'>close</link>
                <form onSubmit={this.handleSubmit} className='create-contact-form'>
                    <imageInput
                        className='create-contact-avatar-input'
                        name='avatarURL'
                        maxheight={64}
                    />
                    <div className='create-contact-details'>
                        <input type='text' placeholder='Name' name='name'/>
                        <input type='text' placeholder='Email' name='email'/>
                        <button>Add Contact</button>
                    </div>    
                </form>
            </div>
        )
    }
    
}
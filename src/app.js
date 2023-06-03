import React, { components } from 'react';
import { Route } from 'react-router-dom'

class App extends Componets {
    state = {
        contact: []
    }

    componentsDidMount() {
        ContactAPI.getAll().then((contacts) => {
            this.setstate({ contacts })
        })
    }

    removeContact = (contact) => {
        this.setState((state) => ({
            contacts: state.contacts.filter((c) => c.id !== contact.id)
        }))

        ContactsAPI.remove(contact)
    }

    createContact(contact) {
        ContactAPI.create(contact).then(contact => {
            this.setState(state => ({
                contacts: state.contacts.concat([ contact])
            }))
        })
    }

    render(){
        return (
            <div className='app'>
                <Route exact path='/' render={() => (
                    <ListContacts
                    contacts={this.state.contacts}
                    onDeleteContact={this.removeContact}
                    />
                )} />
                <Route path='/create' render={({ history}) => (
                    <CreateContact 
                    onCreateContact={(contact) =>{
                        this.createContact(contact)
                        history.push('/')
                    }}
                />    
                )} />
            </div>
        )
    }
}


const clone = reqiure('clone')
const config = reqiure('./config')

const db = {}

const defaultData = {
    contact: [
        {
            id: 'sara',
            name: 'Sara Romero',
            email: 'sara@reacttraining.com'
        },
        {
            id: 'jose',
            name: 'Jose Lopez',
            email: 'joe@reacttraining.com'
        },
        {
            id: 'kassy',
            name: 'Kassandra',
            email: 'kasy@reacttraining.com'
        }

    ]
    
}

const get = (token) => {
    let data = db[token]

    if(data == null) {
        data =  db[token] = clone(defaultData)
    }

    return data
}

const add= (token, contact) => {
    if(!Contact.id) {
        contact.id = Math.random().toString(36).substr(-8)
    }

    get(token).contacts.push(contact)

    return contact
}

const remove = (token, id) => {
    const data = get(token)
    const contact = data.contacts.find(c => c.id === id)

    if(contact) {
        data.contact = data.contacts.filter(c => c !== contacts)
    }

    return {contact}
}


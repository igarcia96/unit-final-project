const api= process.env.REACT_APP_CONTACT_API_URL 

let token = localStorage.token

if(!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json'
}

export const getAll = () =>
    fetch(`${api}/contact`, {headers})
    .then(res => res.json())
    .then(data => data.contacts)

export const remove = (contact) =>
    fetch(`${api}/contact/${contact.id}`, {method: 'DELETE', headers})
    .then(res => res.json())
    .then(data => data.contact)

export const create = (body) =>
    fetch(`${api}/contact`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }) .then(res => res.json())
import { REQUEST_HEADER } from "../../constants";

const listUser = async () => {
    const resp = await fetch('https://gorest.co.in/public-api/users');
    return await response.json();
    
}

const createUser = async (payload) => {
    const resp = await fetch('https://gorest.co.in/public-api/users', {
        method: 'POST',
        headers: REQUEST_HEADER,
        body: JSON.stringify(payload)
    });
    return await resp.json();
}

const editUser = async (payload) => {
    const resp = await fetch(`https://gorest.co.in/public-api/users/${payload.id}`, {
        method: 'PATCH',
        headers: REQUEST_HEADER,
        body: JSON.stringify(payload)
    });
    return await resp.json();
}

const removeUser = async (nim) => {
    const resp = await fetch(`https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-cfsfc/endpoint/deleteMahasiswaByNIM/${nim}`, {
        method: 'DELETE',
        headers: REQUEST_HEADER,
    });
    return await resp.json();
}

export { listUser, createUser, editUser, removeUser }
import { REQUEST_HEADER } from "../../constants";

const listUser = async () => {
    const resp = await fetch('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-cfsfc/endpoint/getMahasiswa');
    return await resp.json();
}

const createUser = async (payload) => {
    const resp = await fetch('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-cfsfc/endpoint/tambahMahasiswa', {
        method: 'POST',
        headers: REQUEST_HEADER,
        body: JSON.stringify(payload)
    });
    return await resp.json();
}

const editUser = async (nim) => {
    const resp = await fetch(`https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-cfsfc/endpoint/updateMhsByNim?nim=${payload.nim}`, {
        method: 'PUT',
        headers: REQUEST_HEADER,
        body: JSON.stringify(payload)
    });
    return await resp.json();
}

const removeUser = async (nim) => {
    const resp = await fetch(`https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-cfsfc/endpoint/deleteMahasiswaByNIM?nim=${nim}`, {
        method: 'DELETE',
        headers: REQUEST_HEADER,
    });
    return await resp.json();
}

export { listUser, createUser, editUser, removeUser }
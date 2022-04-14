import { REQUEST_HEADER } from "../../constants";
import { initialForm } from "./UserScreen";
const listUser = async () => {
    const resp = await fetch('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-cfsfc/endpoint/getMahasiswa');
    return await resp.json();
}

const createUser = async (payload) => {
    const resp = await fetch(`https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-cfsfc/endpoint/tambahMahasiswa?nim=${payload.nim}&nama=${payload.nama}&prodi=${payload.prodi}&alamat=${payload.alamat}&status=${payload.status}`, {
        method: 'POST',
        headers: REQUEST_HEADER,
        body: JSON.stringify(payload)
    });
    return await resp.json();
}

const editUser = async (payload) => {
    const resp = await fetch(`https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-cfsfc/endpoint/updateMhsByNim?nim=${payload.nim}&nama=${payload.nama}&prodi=${payload.prodi}&alamat=${payload.alamat}&status=${payload.status}`, {
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
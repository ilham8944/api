import { REQUEST_HEADER } from "../../constants";

const listUser = async () => {
    const resp = await fetch('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-cfsfc/endpoint/getMenantea');
    return await resp.json();
}

// const listUser = async (payload) => {
//     const resp = await fetch(`https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-cfsfc/endpoint/getMahasiswa?nim=${payload.nim}&nama=${payload.nama}&prodi=${payload.prodi}&alamat=${payload.alamat}&status=${payload.status}`, {
//         method: 'GET',
//         headers: REQUEST_HEADER,
//         body: JSON.stringify(payload)
//     });
//     return await resp.json();
// }

const createUser = async (payload) => {
    const resp = await fetch(`https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-cfsfc/endpoint/tambahMenantea?id=${payload.id}&kategori=${payload.kategori}&nama=${payload.nama}&harga=${payload.harga}&stok=${payload.stok}`, {
        method: 'POST',
        headers: REQUEST_HEADER,
        body: JSON.stringify(payload)
    });
    return await resp.json();
}

const editUser = async (payload) => {
    const resp = await fetch(`https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-cfsfc/endpoint/UpdateMenanteaByID?id=${payload.id}&kategori=${payload.kategori}&nama=${payload.nama}&harga=${payload.harga}&stok=${payload.stok}`, {
        method: 'PUT',
        headers: REQUEST_HEADER,
        body: JSON.stringify(payload)
    });
    return await resp.json();
}

const removeUser = async (id) => {
    const resp = await fetch(`https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-cfsfc/endpoint/DeleteByID?id=${id}`, {
        method: 'DELETE',
        headers: REQUEST_HEADER,
    });
    return await resp.json();
}

export { listUser, createUser, editUser, removeUser }
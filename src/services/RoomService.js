import ApiAxios from '../API'

const headers = {
    headers: {
        authorization:`
            Bearer ${localStorage.getItem('user-token')}
        `
    }
}

export const getClient = async () =>{
    const response = await ApiAxios.get('/client',headers)
    return response.data
}

export const erase = async(room_id) =>{
    await ApiAxios.delete(`/room/${room_id}`,headers)
}

export const create = async ({name, description_room, nome, result, id_user, id_public, topic}) =>{
    const response = await ApiAxios.post('/room',{name, description_room, nome, result, id_user, id_public, topic},headers)
    return response.data
}
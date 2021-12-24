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

export const postClient = async({name, surname, email, senha}) =>{
    const response = await ApiAxios.post('/client',{name, surname, email, senha},headers)
    return response.data
}

export const clientRoom = async(user_id) =>{
    const response = await ApiAxios.post(`/client/${user_id}`,{},headers)
    return response.data
}

export const getClientById = async(user_id) =>{
    const response = await ApiAxios.get(`/client/${user_id}`,headers)
    return response.data
    
}

export const putClient = async(user_id, {name, surname, email, senha, nick_name}) =>{
    const response = await ApiAxios.put(`/client/${user_id}`, {name, surname, email, senha, nick_name},headers)
    return response.data
}

export const deleteClientById = async(user_id) =>{
    await ApiAxios.delete(`/client/${user_id}`,headers)
}
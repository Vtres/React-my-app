import ApiAxios from '../API'

export const getPost = async () =>{
    const response = await ApiAxios.get('/post')
    return response.data
}

export const getOwnerPost = async (id) =>{
    const response = await ApiAxios.get(`/post/${id}`)
    return response.data
}

export const create = async({ id_user, title, description, name, result })=>{
    const response = await ApiAxios.post('/post',{ id_user, title, description, name, result })
    return response.data
}
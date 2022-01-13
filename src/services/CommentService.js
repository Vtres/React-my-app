import ApiAxios from '../API'

export const show = async (id) =>{
    const response = await ApiAxios.get(`/comment/${id}`)
    return response.data
}

export const create = async({ message, id_post, id_client})=>{
    const response = await ApiAxios.post('/comment',{message, id_post, id_client})
    return response.data
}
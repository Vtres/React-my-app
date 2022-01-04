import ApiAxios from '../API'

export const create = async () =>{
    const response = await ApiAxios.post('/content')
    return response.data
}

export const list = async(id)=>{
    const response = await ApiAxios.get(`/content/${id}`)
    return response.data
}
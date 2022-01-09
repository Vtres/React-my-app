import ApiAxios from '../API'

export const create = async ({text,id_class,action}) =>{
    const response = await ApiAxios.post('/content',{text,id_class,action})
    return response.data
}

export const list = async(id)=>{
    const response = await ApiAxios.get(`/content/${id}`)
    return response.data
}

export const listFile = async(id)=>{
    const response = await ApiAxios.get(`/content/files/${id}`)
    return response.data
}
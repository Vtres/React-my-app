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

export const createFile = async({id_class,nameFile,result})=>{
    const response = await ApiAxios.post(`/content/files`,{id_class,nameFile,result})
    return response.data
}

export const destroy= async(id)=>{
    await ApiAxios.delete(`/content/${id}`)
}
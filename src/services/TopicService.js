import ApiAxios from '../API'


export const index = async () =>{
    const response = await ApiAxios.get('/topic')
    return response.data
}

export const topicCreate = async (name) =>{
    const response = await ApiAxios.post('/topic',{name})
    return response.status
}

export const roomTopic = async (id)=>{
    const response = await ApiAxios.get(`/topic/room/${id}`)
    return response.data
}
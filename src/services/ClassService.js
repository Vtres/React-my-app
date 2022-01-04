import ApiAxios from '../API'

export const postClass = async({title, id_room}) =>{
    const response = await ApiAxios.post('/class',{title, id_room})
    return response.data
}

export const showClassByIdRoom = async(id_room) =>{
    const response = await ApiAxios.get(`/class/${id_room}`)
    return response.data
}
export const deleteClassById = async(class_id) =>{
    await ApiAxios.delete(`/class/${class_id}`)
}
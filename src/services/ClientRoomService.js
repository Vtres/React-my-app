import ApiAxios from '../API'

export const exit = async(room_id) =>{
    await ApiAxios.delete(`/clientRoom/${room_id}`)
}
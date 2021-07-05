import ApiAxios from '../API'

export const getClient = async () =>{
    const response = await ApiAxios.get('/client')
    return response.data
}
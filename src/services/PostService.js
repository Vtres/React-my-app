import ApiAxios from '../API'

export const getPost = async () =>{
    const response = await ApiAxios.get('/post')
    return response.data
}
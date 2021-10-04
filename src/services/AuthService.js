import ApiAxios from '../API'

export const checkToken = async (token) =>{
    const response = await ApiAxios.post('/auth/check-token',{token})
    return response.data
}

export const postSignIn = async({email, senha}) =>{
    const response = await ApiAxios.post('/auth/signin',{email,senha})
    return response.data
}
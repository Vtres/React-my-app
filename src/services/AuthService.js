import ApiAxios from '../API'

export const checkToken = async (token) =>{
    const response = await ApiAxios.post('/auth/check-token',{token})
    return response.data
}

export const postSignIn = async({email, senha}) =>{
    const response = await ApiAxios.post('/auth/signin',{email,senha})
    return response.data
}

export const postAddClient = async({name,surname,email,senha}) =>{
    const active = false;
    const response = await ApiAxios.post('/auth/addUser',{name,surname,email,senha,active})
    return response.data
}
import ApiAxios from '../API'

const headers = {
    headers: {
        authorization:`
            Bearer ${localStorage.getItem('user-token')}
        `
    }
}

export const getClient = async () =>{
    const response = await ApiAxios.get('/client',headers)
    return response.data
}
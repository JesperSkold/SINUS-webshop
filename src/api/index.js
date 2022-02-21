import axios from 'axios'

axios.defaults.baseURL = "http://localhost:5000/api"

export function saveToken(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export async function fetchAllProducts(){
  try{
    const response = await axios.get('/items')
    return response
  } catch (error){
    return error.response
  }

}
export async function fetchImages(){
  try{
    const response = await axios.get('/images')
    return response
  } catch (error){
    return error.response
  }
}
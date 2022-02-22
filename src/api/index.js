import axios from 'axios'

axios.defaults.baseURL = "http://localhost:5000/api"

export function saveToken(token) {
  console.log(token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export async function fetchAllProducts(route){
  try{
    console.log(route)
    const response = await axios.get('/items', {params: {category: route}})
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
export async function registerUser(email, name, password, street, zip, city){
  try{
    const response = await axios.post('/register', {
      email,
      name,
      password,
      address: {
        street,
        zip,
        city
      }
    })
    return response
  } catch (error){
    return error.response
  }
}
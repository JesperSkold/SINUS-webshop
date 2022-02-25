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
export async function fetchAccountInfo(){
  try{
    const response = await axios.get('/me')
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
export async function loginUser(email, password){
  try{
    const response = await axios.post('/auth', {
      email,
      password
    })
    return response
  } catch (error){
    return error.response
  }
}

export async function placeOrder(items, city, street, zip){
  try{
    const response = await axios.post('/orders', {
      items,
      shippingAddress: { 
        city,
        street,
        zip,
      }
    })
    return response
  } catch (error){
    return error.response
  }
}
export async function fetchOrderHistory(){
  try{
    const response = await axios.get('/orders')
    return response
  } catch (error){
    return error.response
  }
}

export async function editOrder(id, status){
  try{
    const response = await axios.patch('/orders/' + id, {status: status})
    return response
  }catch (error){
    return error.response
  }
}
  export async function patchProduct(id, title, shortDesc, longDesc, imgFile, category, price){
    try{
      const response = await axios.patch('/items/' + id, {
        title,
        shortDesc,
        longDesc,
        imgFile,
        category,
        price,
      })
      return response
    }catch (error){
      return error.response
    }
}

  export async function deleteProduct(id){
    try{
      const response = await axios.delete('/items/' + id)
      return response
    }catch (error){
      return error.response
    }
  }

  export async function addProduct(title, shortDesc, longDesc, imgFile, category, price){
    try{
      const response = await axios.post('/items/', {
        title,
        shortDesc,
        longDesc,
        imgFile,
        category,
        price,
      })
      return response
    }catch (error){
      return error.response
    }
  }

  export async function upload(ref){
    const formData = new FormData()
    formData.append("imgFile", ref)
    console.log(ref);
    try{
      const response = await axios.post('/images', formData)
      return response
    }catch(error){
      return error.response
    }
  }


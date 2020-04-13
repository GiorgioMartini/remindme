import axios from "axios"

export const categoriesUrl = `provider/category`
export const providersUrl = `provider/categoryProvider/category/`

export const getCategories = async () => await axios.get(categoriesUrl).then(({ data }) => data)
export const getProviders = async (id) => await axios.get(providersUrl + id).then(({ data }) => data)
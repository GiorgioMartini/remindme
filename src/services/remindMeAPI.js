import axios from "axios"

export const categoryUrl = `provider/category`
export const getCategories = async () => await axios.get(categoryUrl).then(({ data }) => data)

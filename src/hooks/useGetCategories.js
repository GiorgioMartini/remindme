import { useState, useEffect } from 'react'
import { getCategories } from '../services/remindMeAPI'

// refactor to make reusable
export const useGetCategories = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)

    getCategories().then((data) => {
      setData(data)
      setError(null)
      setLoading(false)
    })
      .catch((e) => {
        console.warn(e.message)
        setError('Error fetching data. Try again.')
        setLoading(false)
      })
  }, [url])

  return { loading, data, error }
}
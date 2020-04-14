import { useState, useEffect } from 'react'
import { getCategories, getProviders } from '../apis/remindMeAPI'

export const useServices = (provider) => {
  // This can be refactored to use useReducer
  const [loadingCategories, setLoadingCategories] = useState(true)
  const [loadingProviders, setLoadingProviders] = useState(true)
  const [categories, setCategories] = useState(null)
  const [providers, setProviders] = useState(null)
  const [error, setError] = useState(null)

  // We could separate this hook into two, one for Categories
  // and another for Providers if we needed to just fetch one them.
  useEffect(() => {
    setLoadingCategories(true)

    getCategories().then((categories) => {
      setCategories(categories)
      setError(null)
      setLoadingCategories(false)
    })
      .catch((e) => {
        console.warn(e.message)
        setError('Error fetching categories. Try again.')
        setLoadingCategories(false)
      })
  }, [])

  // We could also add a condition to check if we
  // aready have either categories, or any of the providers
  // stored in an object from a previous fetch so we can cache it. 
  useEffect(() => {
    if (provider) {
      setLoadingProviders(true)
      getProviders(provider).then(providers => {
        setProviders(providers)
        setError(null)
        setLoadingProviders(false)
      })
        .catch((e) => {
          console.warn(e.message)
          setError('Error fetching providers. Try again.')
          setLoadingProviders(false)
          setProviders([])
        })
    } else {
      setLoadingProviders(false)
    }

  }, [provider])

  return { loadingCategories, loadingProviders, categories, error, providers }
}

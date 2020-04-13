import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useReminder } from './ReminderContext'
import { useServices } from '../../hooks/useServices';

const AddReminder = ({ history }) => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const { state, saveFormData, createReminder } = useReminder()
  const { loadingCategories, loadingProviders, categories, error, providers } = useServices(selectedCategory)
  const actionText = state.current.id ? `Update ${state.current.title}:` : 'Create a reminder'
  const onChange = (e, id) => saveFormData([e.target.value, e.target.id])
  const onDateChange = date => saveFormData([date, 'endDate'])
  const onCategoryChange = (e, categories) => {
    const selectedCategorie = categories.find(c => c.id === e.target.value)
    setSelectedCategory(e.target.value)
    saveFormData([selectedCategorie.categoryName, e.target.id])
  }

  const onSubmit = e => {
    e.preventDefault()
    history.push('/overview')
    createReminder()
  }

  return error
    ? <p className="red tc lh-title f1">Ooops there was an error, please try again.</p>
    : (
      <form onSubmit={onSubmit} className="flex flex-column p3 pb6">
        <p className="f2 tc b pb4 mt3">{actionText}</p>
        <label className="pb2" htmlFor="title">Title</label>
        <input required className="mb4 pa2" onChange={onChange} value={state.current.title || ''} type="text" id="title" />

        {loadingCategories && <p className="loading">Loading categories...</p>}
        {categories && (
          <div className="flex flex-column p3">
            <label className="pb2" htmlFor="provider">Category</label>
            <select required onChange={e => onCategoryChange(e, categories)} className="mb4" id="category">
              <option value=''>Choose a category</option>
              {categories && categories.map((category, i) => (
                <option key={i} value={category.id}>{category.categoryName}</option>
              ))}
            </select>
          </div>
        )}

        {loadingProviders && <p className="loading">Loading providers...</p>}
        {providers && (
          <div className="flex flex-column p3">
            <label className="pb2" htmlFor="provider">Providers</label>
            <select required onChange={onChange} className="mb4" id="provider">
              <option value=''>Choose a Provider</option>
              {providers.map((provider, i) => (
                <option key={i} value={provider.company.companyName}>{provider.company.companyName}</option>
              ))}
            </select>
          </div>
        )}

        <label className="pb2" htmlFor="endDate">End date</label>
        <DatePicker className="mb4 w-100 pa2" selected={state.current.endDate || ''} onChange={onDateChange} />

        <label className="pb2" htmlFor="noticePeriod">
          Notice period <span className="gray">(in days)</span>
        </label>
        <input required className="mb4 pa2" onChange={onChange} value={state.current.noticePeriod || ''} type="number" id="noticePeriod" />

        <input className="pointer grow bg-light-green white pa3 bn b f4 br2" required type="submit" value={actionText} />
      </form >
    )
}

export default AddReminder

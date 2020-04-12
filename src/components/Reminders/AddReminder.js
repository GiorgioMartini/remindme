import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGetCategories } from '../../hooks/useGetCategories'
import { useReminder } from './ReminderContext'

const AddReminder = () => {
  const { loading, data, error } = useGetCategories()
  const { state, handleSetFormData, createReminder } = useReminder()
  const onChange = (e, id) => handleSetFormData([e.target.value, e.target.id])
  const onDateChange = date => handleSetFormData([date, 'endDate'])
  const { current } = state
  const onSubmit = (e) => {
    e.preventDefault()
    createReminder()
  }

  return loading
    ? <p>Loading...</p>
    : (
      <form onSubmit={onSubmit} className="mw6 center flex flex-column p3">
        {/* {error && <p>{error}</p>} */}
        <h4 className="red" >{JSON.stringify(state.current)}</h4>
        <h4 className="blue">{JSON.stringify(state.reminders)}</h4>

        <p className="f3 tc b pv4">Create a reminder:</p>
        <label className="pb2" htmlFor="title">Title</label>
        <input className="mb4 pa2" onChange={onChange} value={current.title || ''} type="text" id="title" />

        <label className="pb2" htmlFor="category">Category</label>
        <input className="mb4 pa2" onChange={onChange} value={current.category || ''} type="text" id="category" />

        <label className="pb2" htmlFor="provider">Provider</label>
        <select onChange={onChange} className="mb4" id="provider">
          {data.map((category, i) => (
            <option key={i} value={current.categoryName || ''}>{category.categoryName}</option>
          ))}
        </select>

        <label className="pb2" htmlFor="endDate">End date</label>
        <DatePicker className="mb4 w-100 pa2" selected={current.endDate || ''} onChange={onDateChange} />

        <label className="pb2" htmlFor="noticePeriod">Notice period</label>
        <input className="mb4 pa2" onChange={onChange} value={current.noticePeriod || ''} type="number" id="noticePeriod" />

        <input type="submit" value="Create Reminder" />
      </form >
    )
}

export default AddReminder

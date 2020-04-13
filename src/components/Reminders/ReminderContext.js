import React, { createContext, useContext, useReducer, useMemo } from 'react'
import remiderReducer from './ReminderReducer'
const ReminderContext = createContext()

function useReminder() {
  const context = useContext(ReminderContext)
  if (!context) throw new Error(`useReminder must be used within a ReminderProvider`)
  const [state, dispatch] = context

  const saveFormData = (formData) => dispatch({
    type: 'SAVE_FORM_DATA',
    formData
  })

  const createReminder = () => dispatch({
    type: 'CREATE_REMINDER'
  })

  return {
    state,
    dispatch,
    saveFormData,
    createReminder,
  }
}

const reminderInitialState = {
  current: {},
  reminders: [],
  active: null,
}

function ReminderProvider(props) {
  const [state, dispatch] = useReducer(remiderReducer, reminderInitialState)
  const value = useMemo(() => [state, dispatch], [state])
  return <ReminderContext.Provider value={value} {...props} />
}

export { ReminderProvider, useReminder }

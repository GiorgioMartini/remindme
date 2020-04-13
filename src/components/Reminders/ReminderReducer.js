function reminderReducer(state, action) {
  switch (action.type) {
    case 'SAVE_FORM_DATA': {
      const [data, input] = action.formData
      return {
        ...state,
        current: {
          ...state.current,
          [input]: data
        }
      }
    }
    case 'CREATE_REMINDER': {
      const id = Date.now()
      const newReminder = {
        ...state.current,
        id,
      }

      // updadate reminder
      if (state.current.id) {
        return {
          ...state,
          reminders: {
            ...state.reminders,
            [state.current.id]: state.current
          },
          current: newReminder,
        }
      }

      // create reminder
      return {
        ...state,
        reminders: {
          ...state.reminders,
          [newReminder.id]: newReminder
        },
        current: newReminder,
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}

export default reminderReducer

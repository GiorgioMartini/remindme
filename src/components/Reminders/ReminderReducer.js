function reminderReducer(state, action) {
  switch (action.type) {
    case 'SAVE_FORM_DATA': {
      const [data, input] = action.formData
      debugger
      return {
        ...state,
        current: {
          ...state.current,
          [input]: data
        }
      }
    }
    case 'CREATE_REMINDER': {
      debugger
      return {
        ...state,
        reminders: [...state.reminders, state.current]
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}

export default reminderReducer

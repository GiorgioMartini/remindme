import React from 'react'
import AddReminder from './AddReminder'
import ReminderOverview from './ReminderOverview'
import Reminder from './Reminder'
import { Route } from 'react-router-dom'
import { ReminderProvider } from './ReminderContext'

function Reminders() {
  return (
    <ReminderProvider>
      <div className="pa2 mw6 center">
        <Route path="/" exact component={AddReminder} />
        <Route path="/overview" component={ReminderOverview} />
        <Route path="/reminder/:id" component={Reminder} />
      </div>
    </ReminderProvider>
  )
}

export default Reminders

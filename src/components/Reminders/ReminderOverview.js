import React, { Fragment } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { useReminder } from './ReminderContext'
import { Link, Redirect } from 'react-router-dom';

const Reminderoverview = ({ history }) => {
  const { state } = useReminder()
  if (!state.current.title) return <Redirect to="/" />
  const date = state.current.endDate
  const formatedDate = `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`

  return (
    <Fragment>
      <h3 className="f2 b">Reminder overview</h3>
      <p><b className="pr3">Title:</b> {state.current.title}</p>
      <p><b className="pr3">Category:</b> {state.current.category}</p>
      <p><b className="pr3">Provider:</b> {state.current.provider}</p>
      <p><b className="pr3">End date:</b> {formatedDate}</p>
      <p><b className="pr3">Notice period:</b> {state.current.noticePeriod}</p>

      <h3 className="pt4">Edit Reminders: </h3>
      <ul>
        {Object.values(state.reminders).map((reminder, i) => {
          return <li key={i}>
            <Link to={`reminder/${reminder.id}`}>{reminder.title}</Link>
          </li>
        })}
      </ul>
    </Fragment>
  )
}

export default Reminderoverview

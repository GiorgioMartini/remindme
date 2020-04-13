import React, { Fragment } from 'react'

const Reminder = ({ match }) => {
  debugger
  return (
    <div className="pa3 tc">
      <p className="f3">TODO:</p>
      <p className="f4">Here one would edit the reminder with the id of {match.params.id}.</p>
    </div>
  )
}

export default Reminder
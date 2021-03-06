import React from 'react'
import { Calendar, Views } from 'react-big-calendar'
import events from '../events'

let Timeslots = ({ localizer }) => (
  <Calendar
    events={events}
    step={15}
    timeslots={8}
    localizer={localizer}
    defaultView={Views.WEEK}
    defaultDate={new Date(2020, 3, 12)}
  />
)

export default Timeslots

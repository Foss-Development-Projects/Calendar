import React, { useState } from 'react';

import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import { format, parse, startOfWeek, getDay } from "date-fns"
import ReactDatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { enUS } from "date-fns/locale";
const locales: Object = {
    "en-US": enUS
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events: any = [

    { 
        title: "Meeting 1",
        allDay: true,
        start: new Date(2022, 6, 0),
        end: new Date(2022, 7, 0)
    },

    { 
        title: "Meeting 2",
        allDay: false,
        start: new Date(2022, 10, 0),
        end: new Date(2022, 11, 0)
    },

    { 
        title: "Meeting 3",
        allDay: true,
        start: new Date(2022, 7, 0),
        end: new Date(2022, 8, 0)
    }

]

const App = () => {
    return (
        <div className="app">
            <Calendar 
                localizer={localizer} 
                events={events} 
                style={{height: "500", margin: "50px"}}
            />
        </div>
    )
}

export default App

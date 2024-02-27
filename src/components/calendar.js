import React, { useState } from 'react';
import '../style.css';

export function Calendar() {
  const [appointments, setAppointments] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleAddAppointment = (event) => {
    event.preventDefault();
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const numDays = daysInMonth(month, year);
    const startingDay = firstDayOfMonth(month, year);

    const rows = [];
    let cells = [];
    for (let i = 0; i < startingDay; i++) {
      cells.push(<td key={`empty-${i}`}></td>);
    }

    for (let day = 1; day <= numDays; day++) {
      cells.push(<td key={day}>{day}</td>);
      if ((day + startingDay) % 7 === 0 || day === numDays) {
        rows.push(<tr key={day}>{cells}</tr>);
        cells = [];
      }
    }

    return (
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  };

  return (
    <div className="calendar-page">
        <h2>Calendar</h2>
        <div className="two-view">
            <div className="Calendar">
                {/* Calendar Table */}
                <h2>{/* Month */}</h2>
                <br />
                <table className="calendar-table">
                    <thead>
                        <tr>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Calendar Days */}
                    </tbody>
                </table>
            </div>

            {/* Add Appointment Section */}
            <div className="add-appointment">
              <h3>Add Appointment</h3>
              <form onSubmit={handleAddAppointment}>
                <label htmlFor="appointment-date">Date:</label>
                <input type="date" id="appointment-date" name="appointment-date" required />
                <label htmlFor="appointment-time">Time:</label>
                <input type="time" id="appointment-time" name="appointment-time" required />
                <label htmlFor="appointment-description">Description:</label>
                <textarea id="appointment-description" name="appointment-description" rows="3" required></textarea>
                <button type="submit">Add</button>
              </form>
            </div>
        </div>

        {/* Event List */}
        <div className="event-list">
            <h3>Upcoming Events</h3>
            <ul>
                {/* Render appointments here */}
            </ul>
        </div>
    </div>
  );
};

export default Calendar;
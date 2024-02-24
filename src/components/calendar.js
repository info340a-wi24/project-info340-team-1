import React, { useState } from 'react';
import '../style.css';

export function Calendar() {
  const [appointments, setAppointments] = useState(null);
  const handleAddAppointment = (event) => {
    event.preventDefault();
  };

  return (
    <div className="calendar">
        <h2>Calendar</h2>
        <div className="two-view">
            <div className="Calendar">
                {/* Calendar Table */}
                <h2>{/* Month */}</h2>
                <br />
                <table className="calendar-table">
                    {/* Table Header */}
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
                    {/* Table Body */}
                    <tbody>
                        {/* Calendar Days */}
                        {/* Map through dates here if they are dynamic */}
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
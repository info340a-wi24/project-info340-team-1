import React, { useState } from 'react';
import '../style.css';

export function Calendar() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    description: ''
  });

  const [events, setEvents] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEvents([...events, formData]);
    setFormData({
      date: '',
      time: '',
      description: ''
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div id="calendarPage">
      <div id="add-appointment">
        <h3>Add Appointment</h3>
        <form id="appointment-form" onSubmit={handleSubmit}>
          <label htmlFor="appointment-date">Date:</label>
          <input
            type="date"
            id="appointment-date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <label htmlFor="appointment-time">Time:</label>
          <input
            type="time"
            id="appointment-time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
          <label htmlFor="appointment-description">Description:</label>
          <textarea
            id="appointment-description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
          <button type="submit" className="add-button">Add</button>
        </form>
        <div id="event-list">
          <h3>Upcoming Events</h3>
          <ul>
            {events.length ? (
              events.map((event, index) => (
                <li key={index}>
                  <strong>Date:</strong> {event.date}, <strong>Time:</strong> {event.time}, <strong>Description:</strong>{' '}
                  {event.description}
                </li>
              ))
            ) : (
              <li>No events scheduled</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

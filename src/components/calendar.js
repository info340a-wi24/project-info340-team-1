import React, { useState } from 'react';
import '../style.css';
import trashImg from '../img/trash.png';

export function Calendar() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    description: ''
  });

  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);

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

  const handleCheckboxChange = (index) => {
    const updatedSelectedEvents = [...selectedEvents];
    if (updatedSelectedEvents.includes(index)) {
      updatedSelectedEvents.splice(updatedSelectedEvents.indexOf(index), 1);
    } else {
      updatedSelectedEvents.push(index);
    }
    setSelectedEvents(updatedSelectedEvents);
  };

  const handleDeleteSelected = () => {
    const updatedEvents = events.filter((event, index) => !selectedEvents.includes(index));
    setEvents(updatedEvents);
    setSelectedEvents([]);
  }

  const [doctorAvailability, setDoctorAvailability] = useState([
    // Example doctor's availability data
    { day: 'Monday', time: '10:00 AM - 2:00 PM' },
    { day: 'Tuesday', time: '9:00 AM - 1:00 PM' },
    { day: 'Wednesday', time: '2:00 PM - 6:00 PM' },
  ]);

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
      </div>
      <div id="event-list">
        <h3>Upcoming Events</h3>
        <ul>
          {events.length ? (
            events.map((event, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={selectedEvents.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
                <strong>Date:</strong> {event.date},
                <strong>Time:</strong> {event.time},
                <strong>Description:</strong>{' '}
                {event.description}
              </li>
            ))
          ) : (
            <li>No events scheduled</li>
          )}
        </ul>
        {selectedEvents.length > 0 && (
          <button onClick={handleDeleteSelected}>
            <img src={trashImg} alt="Trash Icon"/>
          </button>
        )}
      </div>

      <div id="doctor-availability">
        <h3>Doctor's Availability</h3>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Availability Time</th>
            </tr>
          </thead>
          <tbody>
            {doctorAvailability.map((availability, index) => (
              <tr key={index}>
                <td>{availability.day}</td>
                <td>{availability.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

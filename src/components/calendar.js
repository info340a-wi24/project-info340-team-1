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

  const handleDeleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  }

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
    <div className="card-deck">
      {events.length ? (
        events.map((event, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <input
                type="checkbox"
                checked={selectedEvents.includes(index)}
                onChange={() => handleCheckboxChange(index)}
              />
              <h5 className="card-title">Date: {event.date}</h5>
              <p className="card-text">Time: {event.time}</p>
              <p className="card-text">Description: {event.description}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="card">
          <div className="card-body">
            <p className="card-text">No events scheduled</p>
          </div>
        </div>
      )}
    </div>
    {selectedEvents.length > 0 && (
      <button className="btn btn-danger" onClick={handleDeleteSelected}></button>
    )}
  </div>
    </div>
  );
};

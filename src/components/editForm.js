import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ref, onValue, off } from 'firebase/database';  // Import necessary Firebase functions
import '../style.css';

export function EditSymptomForm({ onUpdateSymptom, db }) {
  const navigate = useNavigate();
  const { symptomId } = useParams();
  const [formData, setFormData] = useState({/* Initial form data */});

  useEffect(() => {
    // Fetch the existing symptom data from Firebase using symptomId
    const symptomRef = ref(db, `symptoms/${symptomId}`);
    onValue(symptomRef, (snapshot) => {
      const symptomData = snapshot.val();
      setFormData(symptomData);
    });

    // Cleanup the listener
    return () => off(symptomRef);
  }, [symptomId]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Handle input changes based on your form structure
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'radio' ? (checked ? value : prevFormData[name]) : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateSymptom(symptomId, formData);
    navigate("/home");
  };

  return (
    <div>
      <h2>Edit Symptom</h2>
      <form onSubmit={handleSubmit}>
        {/* Your form input fields go here, use handleInputChange for onChange */}
        <label htmlFor="title">Symptom Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        {/* Repeat similar pattern for other input fields */}
        <button type="submit">Update Symptom</button>
      </form>
    </div>
  );
}

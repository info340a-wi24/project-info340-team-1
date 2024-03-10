import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ref, onValue, off } from 'firebase/database';  // Import necessary Firebase functions
import '../style.css';

export function EditSymptomForm({ onUpdateSymptom, db }) {
  const navigate = useNavigate();
  const { symptomId } = useParams();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Fetch the existing symptom data from Firebase using symptomId
    const symptomRef = ref(db, `symptoms/${symptomId}`);
    onValue(symptomRef, (snapshot) => {
      const symptomData = snapshot.val();
      setFormData(symptomData);
    });

    return () => off(symptomRef);
  }, [symptomId]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
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
      <main className="container-form">
        <section className="form-section">
          <h2 className="form-header">Edit Symptom</h2>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Symptom Title:</label>
                <input 
                  type="text"
                  className="form-title-control"
                  name="title"
                  id="symptom_title"
                  value={formData.title || ''}
                  onChange={handleInputChange}
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input 
                  type="date"
                  className="form-control"
                  name="date"
                  id="date_field"
                  value={formData.date || ''}
                  onChange={handleInputChange}
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="duration">Duration:</label>
                <select 
                  className="form-control"
                  name="duration"
                  id="duration_field"
                  value={formData.duration || ''}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select duration</option>
                  <option value="3-4">3-4 days</option>
                  <option value="1-2">1-2 weeks</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="many months">A couple of months</option>
                  <option value="more">More than that</option>
                </select>
              </div>
  
              <div className="form-group">
                <label htmlFor="description">Describe Your Symptoms:</label>
                <textarea 
                  className="form-control form-text"
                  name="description"
                  id="symptoms_field"
                  rows="5"
                  value={formData.description || ''}
                  onChange={handleInputChange}
                ></textarea>
              </div>
  
              <div className="form-group">
                <label htmlFor="painLevel">Rate your pain:</label><br />
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={i + 1}>
                    <input 
                      type="radio"
                      name="painLevel"
                      value={i + 1}
                      checked={formData.painLevel === `${i + 1}`}
                      onChange={handleInputChange}
                    /> {`${i + 1} - ${['No Pain', 'Mild Pain', 'Moderate Pain', 'Severe Pain', 'Very Severe Pain'][i]}`}<br />
                  </div>
                ))}
              </div>
  
              <button id="submit" type="submit" className="btn btn-primary">Update Symptom</button>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>This page was created by our Info 340 team</p>
        <p>&copy; 2024 SymptoTrack.</p>
      </footer>
    </div>
  );
}

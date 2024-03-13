import React, { useState, useEffect }from 'react';
import '../style.css';
import { useNavigate, useParams } from 'react-router-dom';



export function SymptomForm({ onFormSubmit, existingSymptomData }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        duration: '',
        description: '',
        painLevel: '',
    });
    useEffect(() => {
        if (existingSymptomData) {
          setFormData(existingSymptomData);
        }
      }, [existingSymptomData]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'radio') {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: checked ? value : prevFormData.painLevel,
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(formData, !!existingSymptomData);
        navigate("/home");
    };

    return(
        <div>
            <main className="container-form">
                <section className="form-section">
                    <h2 className="form-header">{existingSymptomData ? 'Edit Symptom' : 'Symptom Form'}</h2>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Symptom Title:</label>
                                <input 
                                    type="text"
                                    className="form-title-control"
                                    name="title"
                                    id="symptom_title"
                                    value={formData.title}
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
                                    value={formData.date}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="duration">Duration:</label>
                                <select 
                                    className="form-control"
                                    name="duration"
                                    id="duration_field"
                                    value={formData.duration}
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
                                <label htmlFor="symptoms_field">Describe Your Symptoms:</label>
                                <textarea 
                                    className="form-control form-text"
                                    name="description"
                                    id="symptom_field"
                                    rows="5"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pain">Rate your pain:</label><br />
                                <input 
                                    type="radio"
                                    name="painLevel"
                                    value="1"
                                    checked={formData.painLevel === '1'}
                                    onChange={handleInputChange}
                                /> No Pain<br />
                                <input 
                                    type="radio"
                                    name="painLevel"
                                    value="2"
                                    checked={formData.painLevel === '2'}
                                    onChange={handleInputChange}
                                /> Mild Pain<br />
                                <input 
                                    type="radio"
                                    name="painLevel"
                                    value="3"
                                    checked={formData.painLevel === '3'}
                                    onChange={handleInputChange}
                                /> Moderate Pain<br />
                                <input 
                                    type="radio"
                                    name="painLevel"
                                    value="4"
                                    checked={formData.painLevel === '4'}
                                    onChange={handleInputChange}
                                /> Severe Pain<br />
                                <input 
                                    type="radio"
                                    name="painLevel"
                                    value="5"
                                    checked={formData.painLevel === '5'}
                                    onChange={handleInputChange}
                                /> Very Severe Pain<br />
                            </div>
                            <button id="submit" type="submit" className="btn btn-primary" >
                                {existingSymptomData ? 'Update' : 'Submit'}
                            </button>
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
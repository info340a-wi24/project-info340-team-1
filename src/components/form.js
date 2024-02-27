import React, { useState } from 'react';
import '../style.css';

export function SymptomForm() {
    const [formData, setFormData] = useState({
        date: '',
        duration: '',
        symptom: '',
        pain: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log(formData); 
    };

    return(
        <div>
            <main className="container-form">
                <section className="form-section">
                    <h2 className="form-header">Symptom Form</h2>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
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
                                <label htmlFor="symptom_field">Describe Your Symptoms:</label>
                                <textarea 
                                    className="form-control form-text" 
                                    name="symptom" 
                                    id="symptom_field" 
                                    rows="5" 
                                    value={formData.symptom} 
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pain">Rate your pain:</label><br />
                                <input type="radio" name="pain" value="1" checked={formData.pain === '1'} onChange={handleInputChange} /> No Pain<br />
                                <input type="radio" name="pain" value="2" checked={formData.pain === '2'} onChange={handleInputChange} /> Mild Pain<br />
                                <input type="radio" name="pain" value="3" checked={formData.pain === '3'} onChange={handleInputChange} /> Moderate Pain<br />
                                <input type="radio" name="pain" value="4" checked={formData.pain === '4'} onChange={handleInputChange} /> Severe Pain<br />
                                <input type="radio" name="pain" value="5" checked={formData.pain === '5'} onChange={handleInputChange} /> Very Severe Pain<br />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

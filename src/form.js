import React from 'react';
import './css/style.css'; 

export function SymptomForm() {
    return(
        <main className="container-form">
            <section className="form-section">
                <h2 className="form-header">Symptom Form</h2>
                <div className="form-container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <input type="date" className="form-control" name="date" id="date_field" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="duration">Duration:</label>
                            <select className="form-control" name="duration" id="duration_field">
                                <option value="" disabled selected>Select duration</option>
                                <option value="3-4">3-4 days</option>
                                <option value="1-2">1-2 weeks</option>
                                <option value="1-2 months">1-2 months</option>
                                <option value="many months">A couple of months</option>
                                <option value="more">More than that</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="symptoms_field">Describe Your Symptoms:</label>
                            <textarea className="form-control form-text" name="symptom" id="symptom_field" rows="5"></textarea>
                        </div>
                        <div className="form-group">
                        <label htmlFor="pain">Rate your pain:</label><br />
                            <input type="radio" name="pain" value="1" /> No Pain<br />
                            <input type="radio" name="pain" value="2" /> Mild Pain<br />
                            <input type="radio" name="pain" value="3" /> Moderate Pain<br />
                            <input type="radio" name="pain" value="4" /> Severe Pain<br />
                            <input type="radio" name="pain" value="5" /> Very Severe Pain<br />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

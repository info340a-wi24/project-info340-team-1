import React from 'react';
import '../style.css';

export function EditForm() {
    return (
        <main className="container-form">
            <section className="form-section">
                <h2 className="form-header">Symptom Form</h2>
                <div className="form-container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <input type="date" className="form-control" name="date" id="date_field" value="2024-02-06" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="duration">Duration:</label>
                            <select className="form-control" name="duration" id="duration_field">
                                <option value="" disabled selected>Select duration</option>
                                <option value="3-4">3-4 days</option>
                                <option value="1-2" selected>1-2 weeks</option>
                                <option value="1-2 months">1-2 months</option>
                                <option value="many months">A couple of months</option>
                                <option value="more">More than that</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="symptoms_field">Describe Your Symptoms:</label>
                            <textarea className="form-control form-text" name="symptom" id="symptom_field" rows="5">
                                I have been feeling very dizzy recently, the feeling happens a lot when I stand up and I don't know why. It makes getting up in the mornings very hard, I have been taking tylenol for it.
                            </textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pain">Rate your pain:</label><br />
                            <input type="radio" name="pain" value="1" /> No Pain<br />
                            <input type="radio" name="pain" value="2" checked /> Mild Pain<br />
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

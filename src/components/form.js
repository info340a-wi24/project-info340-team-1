import React, { useState, useEffect }from 'react';
import '../style.css';
import { useNavigate } from 'react-router-dom';



export function SymptomForm({ onFormSubmit }) {

    const navigate = useNavigate(); //access navigate function
    const [title, setTitle] = useState('');
    // useEffect(() => {
    //     // Use the updated title value
    //     if (title) {
    //       navigate("/home", { state: { title } });
    //     }
    //   }, [title, navigate]);

    // const handleSubmit = function(event) {
    //     event.preventDefault();
    //     setTitle(event.target.elements.title.value);
    // }
    const handleSubmit = function (event) {
        event.preventDefault();
        const newTitle = event.target.elements.title.value;

        setTitle(newTitle);
        onFormSubmit(newTitle);
        navigate("/home", { state: { title: newTitle } });
      };


    return(
        <div>
            <main className="container-form">
                <section className="form-section">
                    <h2 className="form-header">Symptom Form</h2>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Symptom Title:</label>
                                <input type="text" className="form-title-control" name="title" id="symptom_title" />
                            </div>
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
                <footer className="footer">
                <p>This page was created by our Info 340 team</p>
                <p>&copy; 2024 SymptoTrack.</p>
                </footer>
            </main>
        </div>
    );
}
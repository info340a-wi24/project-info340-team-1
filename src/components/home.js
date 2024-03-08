//import React from 'react';
import '../style.css';
import {SymptomForm} from './form';
import {EditForm} from './editForm';
import filterImg from '../img/filter.png';
import addImg from '../img/add.png';
import editImg from '../img/edit.png';
import trashImg from '../img/trash.png';
import mycharImg from '../img/mychar.png'; 
import uwMHImg from '../img/uwMH.png';
import webMDImg from '../img/webMD.png'; 
import seaHealthImg from '../img/seattleHealth.png'; 

// for add function
import React, { useState, useEffect }from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

// delete function 
function deleteButton(event) {
    const symptomElement = event.target.closest('.symptom');
    if (symptomElement) {
        symptomElement.remove();
    }
}

export function Home ({symptoms , onDeleteSymptom}) {
    const location = useLocation();
    const [titles, setTitles] = useState([]);

    //Effect to update titles when location state changes
    useEffect(() => {
        const newTitles = symptoms.map(symptom => symptom.title);
        setTitles(newTitles);
    }, [symptoms]);
    return (
        <div id ="wrapper">
            <div id="contents">
                <main id="main_page">
                        <div className="container">
                            <div className="tracker">
                                <section className="head">
                                    <h2>Symptoms</h2>
                                    <div className="filter">
                                        <Link to="/form" className="symptom_add">
                                            <img src={addImg} alt="Add Icon"/>
                                        </Link>
                                    </div>
                                </section>
                                <ul>
                                    {symptoms.map(symptom => (
                                        <section className="symptom" key={symptom.id}>
                                            <li>
                                                <Link to={`/editForm/${symptom.id}`} className="symptom_link">{symptom.title}</Link> 
                                                <div className="symptom-button">
                                                    <Link to={`/editForm/${symptom.id}`} className="symptom_form">
                                                        <img src={editImg} alt="Edit" />
                                                    </Link>
                                                    <button className="trash-icon" onClick={() => onDeleteSymptom(symptom.id)}>
                                                        <img src={trashImg} alt="Trash Icon" />
                                                    </button>
                                                </div>
                                            </li>
                                        </section>
                                    ))}
                                </ul>

                            </div>


                            <div className="quick-links">
                                <div className="link-box">
                                    <section className="head">
                                        <h2>Quick Links</h2>
                                    </section>

                                    <div className="link">
                                        <a href="https://www.mychart.org/" target="_blank"><img src={mycharImg} alt="my chart" />My Chart</a>
                                    </div>
                                    <div className="link">
                                        <a href="https://wellbeing.uw.edu/mental-health/mental-health-resources/" target="_blank"><img src={uwMHImg} alt="uw resources" />UW Mental Health Resources</a>
                                    </div>
                                    <div className="link">
                                        <a href="https://www.webmd.com/" target="_blank"><img src={webMDImg} alt="webmd" />WebMD</a>
                                    </div>
                                    <div className="link">
                                        <a href="https://seattlecenter.org/skcclinic/" target="_blank"><img src={seaHealthImg} alt="Seattle Center Foundation" />Seattle Center Foundation</a>
                                    </div>

                                </div>

                            </div>
                        </div>
                </main>
            </div>
        <footer className="footer">
            <p>This page was created by our Info 340 team</p>
            <p>&copy; 2024 SymptoTrack.</p>
        </footer>
        </div>
        )
    };
  
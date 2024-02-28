//import React from 'react';
import '../style.css';
import {SymptomForm} from './form';
import {EditForm} from './editForm';
import filterImg from '../img/filter.png';
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

export function Home ({symptoms}) {
    const location = useLocation();
    const [titles, setTitles] = useState([]);

    //Effect to update titles when location state changes
    useEffect(() => {
        const newTitle = location.state ? location.state.title : null;
        if (newTitle) {
            setTitles(prevTitles => [...prevTitles, newTitle]);
            }
        }, [location.state]);

    return (
        <div>
            <main id="main_page">
                    <div className="container">
                        <div className="tracker">
                            <section className="head">
                                <h2>Symptoms</h2>
                                <div className="filter">
                                    <button type="button" id="filter-image">
                                        <img src={filterImg} alt="Filter Icon"/>   
                                    </button>
                                </div>
                            </section>
                            <ul>
                                {symptoms.map((symptom, index) => (
                                    <section className="symptom" key={index}>
                                        <li>
                                            <Link to="/form" className="symptom_link">{symptom}</Link>
                                            <div className="symptom-button">
                                                <a className="edit-btn" href="edit-form.html">
                                                    <button id="close-image"><img src="../img/edit.png" alt="Edit" /></button>
                                                    </a>
                                                    <button className="trash-icon" onClick={deleteButton}>
                                                        <img src={trashImg} alt="Trash Icon"/>
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
        )
    };
  
